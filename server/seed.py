#!/usr/bin/env python3

# Standard library imports
from models import db, Job

# Local imports
from app import app

if __name__ == '__main__':
    with app.app_context():
        print("Starting seeding...")
        # Seed code goes here!

        jobs = []

        jobs.append(Job(
            job_title='Software Engineer',
            job_description='Responsible for designing, developing, and testing software applications.',
            job_responsibilities='Write clean, efficient code based on specifications. Collaborate with other engineers to integrate software components. Troubleshoot and debug issues.',
            job_salary=90000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Data Scientist',
            job_description='Responsible for analyzing complex datasets to discover insights and trends.',
            job_responsibilities='Collect and clean data. Perform statistical analysis and create predictive models. Interpret and communicate findings to stakeholders.',
            job_salary=95000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Cybersecurity Analyst',
            job_description='Responsible for protecting an organization’s sensitive information from cyber threats.',
            job_responsibilities='Monitor systems for security breaches. Investigate security incidents and recommend solutions. Develop and implement security measures.',
            job_salary=85000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Cloud Solutions Architect',
            job_description='Responsible for designing and implementing cloud-based solutions.',
            job_responsibilities='Assess business requirements and design cloud architectures. Develop cloud migration strategies. Implement and manage cloud infrastructure.',
            job_salary=100000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Machine Learning Engineer',
            job_description='Responsible for developing machine learning models and algorithms.',
            job_responsibilities='Collect and preprocess data. Train and evaluate machine learning models. Deploy models into production environments.',
            job_salary=95000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='DevOps Engineer',
            job_description='Responsible for automating and streamlining the deployment and operation of systems.',
            job_responsibilities='Design and implement CI/CD pipelines. Configure and manage infrastructure as code. Monitor and optimize system performance.',
            job_salary=95000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Full Stack Developer',
            job_description='Responsible for developing both client and server software for web applications.',
            job_responsibilities='Develop front-end and back-end code. Design user interactions on web pages. Create servers and databases for functionality.',
            job_salary=90000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Data Engineer',
            job_description='Responsible for designing, constructing, and maintaining scalable data pipelines.',
            job_responsibilities='Create and manage large-scale data processing systems. Develop and deploy data pipelines. Optimize data workflows for efficiency and reliability.',
            job_salary=95000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='IT Security Consultant',
            job_description='Responsible for assessing and improving the security posture of organizations.',
            job_responsibilities='Conduct security assessments and audits. Develop and implement security policies and procedures. Provide security training and awareness programs.',
            job_salary=90000,
            location='Nairobi'
        ))

        jobs.append(Job(
            job_title='Blockchain Developer',
            job_description='Responsible for designing and implementing blockchain-based solutions.',
            job_responsibilities='Develop smart contracts and decentralized applications. Implement consensus algorithms. Integrate blockchain technology with existing systems.',
            job_salary=100000,
            location='Nairobi'
        ))

        # Add each job instance to the database session
        for job in jobs:
            db.session.add(job)

        # Commit the changes to persist them in the database
        db.session.commit()

        print("Seeding completed successfully!")
