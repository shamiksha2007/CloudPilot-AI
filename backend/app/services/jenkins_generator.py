def generate_jenkinsfile(analysis):

    docker_required = analysis["docker_present"]

    if docker_required:

        jenkinsfile = """
pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building application'
            }
        }


        stage('Test') {
            steps {
                echo 'Running tests'
            }
        }


        stage('Docker Build') {
            steps {
                echo 'Building Docker image'
            }
        }


        stage('Deploy') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
"""

    else:

        jenkinsfile = """
pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
            }
        }


        stage('Test') {
            steps {
                echo 'Running tests'
            }
        }


        stage('Deploy') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
"""


    return jenkinsfile