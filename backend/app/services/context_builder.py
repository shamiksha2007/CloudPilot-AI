from pathlib import Path


IMPORTANT_FILES = [
    "README.md",
    "package.json",
    "requirements.txt",
    "pyproject.toml",
    "Dockerfile",
    "docker-compose.yml",
    "docker-compose.yaml",
    "Jenkinsfile",
    ".env.example",
    "main.py",
    "app.py",
    "server.js",
    "serverless.yml",
]


CODE_EXTENSIONS = [
    ".py",
    ".js",
    ".ts",
    ".java",
    ".go",
    ".rs",
]


IGNORE_DIRS = [
    ".git",
    "node_modules",
    "__pycache__",
    "venv",
    ".venv",
    "dist",
    "build",
    ".next",
    "coverage",
    "tests",
    "docs",
    "benchmarks"
]


MAX_CODE_FILES = 15
MAX_FILE_SIZE = 5000



def read_file(path: Path):

    try:
        if path.exists() and path.is_file():

            content = path.read_text(
                encoding="utf-8",
                errors="ignore"
            )

            return content[:MAX_FILE_SIZE]

    except Exception:
        return None

    return None



def should_ignore(path):

    for part in path.parts:

        if part in IGNORE_DIRS:
            return True

    return False



def build_repository_context(repo_path):

    repo = Path(repo_path)


    context = {

        "folder_structure": [],

        "important_files": {},

        "code_files": {}

    }


    code_count = 0


    for item in repo.rglob("*"):


        if should_ignore(item):
            continue


        relative = str(
            item.relative_to(repo)
        )


        if item.is_file():

            context["folder_structure"].append(relative)


        # collect source files
        if (
            item.is_file()
            and item.suffix in CODE_EXTENSIONS
            and code_count < MAX_CODE_FILES
        ):

            content = read_file(item)

            if content:

                context["code_files"][relative] = content

                code_count += 1



    # important files

    for filename in IMPORTANT_FILES:


        file = repo / filename


        content = read_file(file)


        if content:

            context["important_files"][filename] = content



    return context