from fastapi import APIRouter, HTTPException

from app.services.aws_deployer import deploy


router = APIRouter()


@router.post("/deploy/aws")
def deploy_project():

    try:

        result = deploy()

        return result

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )