from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.api.v1 import models, schemas
from app.database import get_db, Base
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Medicare PlanIt API",
    description="API for Medicare plan recommendations",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your frontend's URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"]
)

@app.post("/api/v1/submit-questionnaire", response_model=schemas.QuestionnaireResponseModel)
async def submit_questionnaire(
    submission: schemas.QuestionnaireSubmission,
    db: Session = Depends(get_db)
):
    """
    API endpoint to submit a questionnaire. Validates and stores the questionnaire submission in the database.
    """
    try:
        # Convert submission data to a dictionary and log it for debugging
        submission_data = submission.dict()
        logger.debug(f"Received submission data: {submission_data}")

        # Create database entry
        db_submission = models.QuestionnaireResponse(
            responses=submission_data
        )

        # Add and commit to database
        db.add(db_submission)
        db.commit()
        db.refresh(db_submission)

        logger.info(f"Questionnaire submitted successfully. ID: {db_submission.id}")

        return db_submission
    except Exception as e:
        logger.error(f"Error submitting questionnaire: {str(e)}")
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail=f"Error submitting questionnaire: {str(e)}"
        )

@app.get("/api/v1/questionnaire/{submission_id}", response_model=schemas.QuestionnaireResponseModel)
async def get_questionnaire(submission_id: int, db: Session = Depends(get_db)):
    """
    API endpoint to retrieve a questionnaire submission by its ID.
    """
    try:
        submission = db.query(models.QuestionnaireResponse).filter(
            models.QuestionnaireResponse.id == submission_id
        ).first()

        if not submission:
            raise HTTPException(
                status_code=404,
                detail="Questionnaire submission not found"
            )

        logger.info(f"Retrieved submission ID: {submission_id}")
        return submission
    except Exception as e:
        logger.error(f"Error retrieving questionnaire: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error retrieving questionnaire: {str(e)}"
        )

@app.get("/")
async def root():
    """
    Root API endpoint for health checks.
    """
    return {
        "status": "API is running",
        "version": "1.0.0"
    }

@app.options("/api/v1/submit-questionnaire")
async def options_questionnaire():
    """
    OPTIONS request handler for CORS preflight.
    """
    return {"status": "OK"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
