from pydantic import BaseModel
from typing import Optional

class ProjectCreate(BaseModel):
    name: str
    description: str
    project_type: str
    github_url: Optional[str] = None