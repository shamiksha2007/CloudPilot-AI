import tempfile

from git import Repo

from app.services.context_builder import build_repository_context
from app.services.llm_analyzer import analyze_with_llm


def analyze_github_repository(repo_url):

    folder = tempfile.mkdtemp()

    # Clone repository
    Repo.clone_from(
        repo_url,
        folder
    )


    # Build AI context
    repository_context = build_repository_context(
        folder
    )


    # Ask LLM to reason
    ai_analysis = analyze_with_llm(
        repository_context
    )


    return {
        "ai_analysis": ai_analysis,
        "repository_context": repository_context
    }