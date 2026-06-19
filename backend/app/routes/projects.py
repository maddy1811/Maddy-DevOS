from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.project import Project
from app.schemas.project import ProjectCreate
from app.auth.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)

# CREATE PROJECT
@router.post("/")
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    new_project = Project(
        user_id=current_user.id,
        name=project.name,
        description=project.description,
        project_type=project.project_type,
        github_url=project.github_url
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return {
        "message": "Project created successfully",
        "project_id": new_project.id
    }


# GET ALL PROJECTS
@router.get("/")
def get_projects(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    projects = db.query(Project).filter(
        Project.user_id == current_user.id
    ).all()

    return projects