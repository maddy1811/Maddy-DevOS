from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import engine, Base
from app.models.user import User
from app.models.project import Project

from app.routes.auth import router as auth_router
from app.routes.projects import router as project_router
from app.routes.chat import router as chat_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Developer OS")

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(project_router)
app.include_router(chat_router)

@app.get("/")
def root():
    return {
        "message": "AI Developer OS Backend Running"
    }