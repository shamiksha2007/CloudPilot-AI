from app.utils.file_scanner import scan_project


def analyze_project_structure(path):

    files = scan_project(path)

    analysis = {
        "language": "Unknown",
        "framework": "Unknown",
        "application_type": "Unknown",
        "docker_present": False,
        "database_detected": False,
        "files_detected": files
    }


    # Language/framework detection

    if "package.json" in files:
        analysis["language"] = "JavaScript/TypeScript"
        analysis["framework"] = "Node.js"

    elif "requirements.txt" in files:
        analysis["language"] = "Python"
        analysis["framework"] = "Python Backend"


    # Application type detection

    if "src" in files:
        analysis["application_type"] = "Frontend"

    elif "main.py" in files or "app.py" in files:
        analysis["application_type"] = "Backend"


    # Docker detection

    if "Dockerfile" in files:
        analysis["docker_present"] = True


    # Database detection

    database_files = [
        "schema.sql",
        "database.py",
        "models.py"
    ]

    if any(file in files for file in database_files):
        analysis["database_detected"] = True


    return analysis