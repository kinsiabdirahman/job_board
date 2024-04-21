import json

# Existing job data from seeds.py
jobs_data = [
    {
        "job_title": "Software Engineer",
        "job_description": "Responsible for designing, developing, and testing software applications.",
        "job_responsibilities": "Write clean, efficient code based on specifications.",
        "job_salary": 90000,
        "location": "Nairobi"
    },
    {
        "job_title": "Data Scientist",
        "job_description": "Responsible for analyzing complex datasets to discover insights and trends.",
        "job_responsibilities": "Analyze and interpret complex data sets.",
        "job_salary": 95000,
        "location": "Nairobi"
    },
    # Add more job data here...
]

# Additional responsibilities and qualifications for each job
additional_data = {
    "Software Engineer": {
        "additional_responsibilities": [
            "Collaborate with other engineers to integrate software components.",
            "Troubleshoot and debug issues."
        ],
        "minimum_qualifications": [
            "Bachelor's degree in Computer Science or related field.",
            "Experience with programming languages such as Python, Java, or C++.",
            "Strong problem-solving skills.",
            "Ability to work independently and in teams."
        ]
    },
    "Data Scientist": {
        "additional_responsibilities": [
            "Develop statistical models and algorithms.",
            "Present findings to stakeholders."
        ],
        "minimum_qualifications": [
            "Master's degree in Data Science, Statistics, or related field.",
            "Proficiency in statistical analysis tools such as R or Python.",
            "Experience with data visualization techniques.",
            "Excellent communication and presentation skills."
        ]
    },
    # Add additional responsibilities and qualifications for other jobs here...
}

# Update existing job data with additional responsibilities and qualifications
for job in jobs_data:
    title = job["job_title"]
    if title in additional_data:
        job["job_responsibilities"] += " " + ". ".join(additional_data[title]["additional_responsibilities"])
        job["minimum_qualifications"] = additional_data[title]["minimum_qualifications"]

# Write the updated job data to a JSON file
with open("updated_jobs.json", "w") as json_file:
    json.dump(jobs_data, json_file, indent=4)
