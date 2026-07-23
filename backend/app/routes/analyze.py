from fastapi import APIRouter, Body

from app.services.project_analyzer import analyze_project_structure
from app.services.deployment_recommender import generate_recommendation
from app.services.docker_generator import generate_dockerfile
from app.services.jenkins_generator import generate_jenkinsfile
from app.services.github_analyzer import analyze_github_repository

router = APIRouter()


@router.get("/analyze")
def analyze_project():

    analysis = analyze_project_structure(".")

    recommendation = generate_recommendation(analysis)

    dockerfile = generate_dockerfile(analysis)

    jenkinsfile = generate_jenkinsfile(analysis)

    return {
        "status": "success",
        "analysis": analysis,
        "recommendation": recommendation,
        "dockerfile": dockerfile,
        "jenkinsfile": jenkinsfile
    }


@router.post("/analyze/github")
def analyze_github(repo_url: str = Body(..., embed=True)):

    result = analyze_github_repository(repo_url)

    return {
        "status": "success",
        "result": result
    }