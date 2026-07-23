import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

ANALYSIS_MODEL = os.getenv(
    "ANALYSIS_MODEL",
    "llama-3.3-70b-versatile"
)

CHAT_MODEL = os.getenv(
    "CHAT_MODEL",
    "llama-3.1-8b-instant"
)

MODEL = CHAT_MODEL