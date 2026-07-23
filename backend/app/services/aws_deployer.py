import boto3
import subprocess
import time
import os


REGION = "ap-south-1"

ECR_REPOSITORY = "cloudpilot"

ACCOUNT_ID = "864981730114"

IMAGE_URI = f"{ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/{ECR_REPOSITORY}:latest"

ROLE_ARN = "arn:aws:iam::864981730114:role/AppRunnerECRAccessRole"


ecr = boto3.client(
    "ecr",
    region_name=REGION
)

apprunner = boto3.client(
    "apprunner",
    region_name=REGION
)


def docker_login():

    password = subprocess.check_output(
        [
            "aws",
            "ecr",
            "get-login-password",
            "--region",
            REGION
        ]
    ).decode()

    subprocess.run(
        [
            "docker",
            "login",
            "--username",
            "AWS",
            "--password-stdin",
            f"{ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com"
        ],
        input=password.encode(),
        check=True
    )


def build_and_push():

    docker_login()

    subprocess.run(
        [
            "docker",
            "build",
            "-t",
            IMAGE_URI,
            "."
        ],
        check=True
    )


    subprocess.run(
        [
            "docker",
            "push",
            IMAGE_URI
        ],
        check=True
    )


def create_service():

    response = apprunner.create_service(

        ServiceName="cloudpilot-service",

        SourceConfiguration={

            "ImageRepository": {

                "ImageIdentifier": IMAGE_URI,

                "ImageRepositoryType": "ECR",

                "ImageConfiguration": {

                    "Port": "8000",

                    "RuntimeEnvironmentVariables": {
                        "ENV": "production"
                    }
                }
            },

            "AutoDeploymentsEnabled": False
        },

        InstanceConfiguration={

            "Cpu": "1 vCPU",

            "Memory": "2 GB",

            "InstanceRoleArn": ROLE_ARN
        }
    )


    return response["Service"]


def deploy():

    build_and_push()

    service = create_service()

    arn = service["ServiceArn"]


    while True:

        status = apprunner.describe_service(
            ServiceArn=arn
        )


        state = status["Service"]["Status"]


        if state == "RUNNING":

            return {
                "status": "success",
                "url": status["Service"]["ServiceUrl"]
            }


        if state == "CREATE_FAILED":

            return {
                "status": "failed",
                "details": status
            }


        time.sleep(10)
