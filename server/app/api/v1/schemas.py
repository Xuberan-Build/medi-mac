from pydantic import BaseModel, Field, EmailStr, StringConstraints
from typing import Optional, Dict, Any
from datetime import datetime


# Question response schema
class QuestionResponse(BaseModel):
    value: int = Field(..., ge=1, le=5)  # Rating between 1-5
    comments: Optional[str] = None       # Optional comments for each question


# Questionnaire submission schema
class QuestionnaireSubmission(BaseModel):
    doctor_choice: QuestionResponse
    managed_care: QuestionResponse
    domestic_travel: QuestionResponse
    yearly_maximums: QuestionResponse
    monthly_premiums: QuestionResponse
    prescription_plans: QuestionResponse
    dental_vision: QuestionResponse
    email: EmailStr
    name: str = Field(..., min_length=1, max_length=100)
    city: str = Field(..., min_length=1, max_length=50)
    state: str = Field(..., min_length=2, max_length=50)


# Response model for questionnaire (sent back to the frontend)
class QuestionnaireResponseModel(BaseModel):
    id: int
    responses: Dict[str, Any]
    created_at: datetime
    user: Optional[Dict[str, Any]] = None

    class Config:
        from_attributes = True
