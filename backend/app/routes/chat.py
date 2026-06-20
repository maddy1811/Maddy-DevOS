import os

import anthropic
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException

from app.auth.dependencies import get_current_user
from app.models.user import User
from app.schemas.chat import ChatRequest, ChatResponse

load_dotenv()

router = APIRouter(prefix="/chat", tags=["Chat Assistant"])

MODEL = "claude-sonnet-4-6"
MAX_TOKENS = 1024

SYSTEM_PROMPT = (
    "You are Maddy AI, the assistant built into Maddy's AI Operating System "
    "for developers. You help with coding questions, debugging, architecture "
    "decisions, and explaining unfamiliar code. Be concise and practical, and "
    "use code blocks when sharing code."
)


@router.post("/", response_model=ChatResponse)
def send_message(
    request: ChatRequest,
    current_user: User = Depends(get_current_user),
):
    api_key = os.getenv("ANTHROPIC_API_KEY")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="ANTHROPIC_API_KEY is not configured on the server",
        )

    if not request.messages:
        raise HTTPException(status_code=400, detail="messages cannot be empty")

    client = anthropic.Anthropic(api_key=api_key)

    try:
        response = client.messages.create(
            model=MODEL,
            max_tokens=MAX_TOKENS,
            system=SYSTEM_PROMPT,
            messages=[
                {"role": m.role, "content": m.content} for m in request.messages
            ],
        )
    except anthropic.APIError as e:
        raise HTTPException(status_code=502, detail=f"AI service error: {str(e)}")

    reply_text = "".join(
        block.text for block in response.content if block.type == "text"
    )

    if not reply_text:
        reply_text = "Sorry, I couldn't generate a response. Please try again."

    return ChatResponse(reply=reply_text)
