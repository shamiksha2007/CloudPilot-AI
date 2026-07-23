def generate_recommendation(analysis):

    recommendation = {
        "cloud_provider": "",
        "containerization": "",
        "ci_cd": ""
    }


    # Cloud recommendation

    if analysis["language"] == "Python":
        recommendation["cloud_provider"] = "AWS"

    elif analysis["language"] == "JavaScript/TypeScript":
        recommendation["cloud_provider"] = "AWS / Azure"


    # Docker recommendation

    if analysis["docker_present"]:
        recommendation["containerization"] = "Docker already configured"

    else:
        recommendation["containerization"] = "Create Dockerfile"


    # CI/CD recommendation

    recommendation["ci_cd"] = "Generate Jenkins pipeline"


    return recommendation