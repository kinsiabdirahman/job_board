
from models import db, Job
from app import app


def delete_jobs():
    with app.app_context():

        jobs_to_delete = Job.query.limit(12).all()


        for job in jobs_to_delete:
            db.session.delete(job)

        db.session.commit()

if __name__ == "__main__":
    delete_jobs()
