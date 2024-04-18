#!/usr/bin/env python3

# Standard library imports
from models import db, Job

# Local imports
from app import app
from models import db

if __name__ == '_main_':
    with app.app_context():
        print("Starting seeding...")
        # Seed code goes here!

        jobs = []

        jobs.append(Job(
            job_title='Software Engineer',
            job_description='Responsible for designing, developing, and testing software applications.',
            job_responsibilities='Write clean, efficient code based on specifications. Collaborate with other engineers to integrate software components. Troubleshoot and debug issues.',
            job_salary=90000
        ))

        jobs.append(Job(
            job_title='Data Scientist',
            job_description='Responsible for analyzing complex datasets to discover insights and trends.',
            job_responsibilities='Collect and clean data. Perform statistical analysis and create predictive models. Interpret and communicate findings to stakeholders.',
            job_salary=95000
        ))

        jobs.append(Job(
            job_title='Digital Marketing Manager',
            job_description='Responsible for developing and implementing digital marketing strategies.',
            job_responsibilities='Plan and execute digital campaigns across various channels. Analyze campaign performance and optimize strategies. Manage marketing budget and resources.',
            job_salary=85000
        ))

        jobs.append(Job(
            job_title='Financial Analyst',
            job_description='Responsible for analyzing financial data and providing insights to support decision-making.',
            job_responsibilities='Gather financial data and perform analysis. Create financial models and forecasts. Prepare reports and presentations for management.',
            job_salary=80000
        ))

        jobs.append(Job(
            job_title='Human Resources Manager',
            job_description='Responsible for overseeing HR activities such as recruitment, training, and employee relations.',
            job_responsibilities='Develop HR policies and procedures. Recruit and onboard new employees. Resolve employee conflicts and provide guidance on HR issues.',
            job_salary=90000
        ))

        jobs.append(Job(
            job_title='Project Manager',
            job_description='Responsible for planning, executing, and closing projects within scope, budget, and schedule.',
            job_responsibilities='Define project scope, goals, and deliverables. Create project plans and schedules. Monitor project progress and manage stakeholders.',
            job_salary=100000
        ))

        jobs.append(Job(
            job_title='Sales Manager',
            job_description='Responsible for leading and motivating a sales team to achieve revenue targets.',
            job_responsibilities='Develop sales strategies and plans. Set sales targets and quotas. Train and mentor sales representatives.',
            job_salary=95000
        ))

        jobs.append(Job(
            job_title='Customer Success Manager',
            job_description='Responsible for ensuring customer satisfaction and retention by providing exceptional service and support.',
            job_responsibilities='Build and maintain relationships with customers. Address customer inquiries and concerns. Identify opportunities for upselling and cross-selling.',
            job_salary=85000
        ))

        jobs.append(Job(
            job_title='Quality Assurance Engineer',
            job_description='Responsible for testing software applications to ensure they meet quality standards and requirements.',
            job_responsibilities='Develop test plans and strategies. Execute test cases and report defects. Collaborate with developers to resolve issues.',
            job_salary=80000
        ))

        jobs.append(Job(
            job_title='Content Writer',
            job_description='Responsible for creating engaging and informative content for websites, blogs, and social media.',
            job_responsibilities='Research topics and develop content ideas. Write articles, blog posts, and social media posts. Edit and proofread content for accuracy and clarity.',
            job_salary=75000
        ))

  

  
        db.session.add_all(jobs)
        db.session.commit()


        
    

        