

const employees = {
    "employees": [
        {
            "email": "employee1@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Project Meeting",
                    "date": "05-11-24",
                    "category": "Meetings",
                    "description": "Discuss project milestones and deadlines."
                },
                {
                    "title": "Code Review",
                    "date": "06-11-24",
                    "category": "Development",
                    "description": "Review and improve code quality in module A."
                }
            ]
        },
        {
            "email": "employee2@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Design Review",
                    "date": "05-11-24",
                    "category": "Design",
                    "description": "Review latest UI/UX designs for the app."
                },
                {
                    "title": "Update Documentation",
                    "date": "07-11-24",
                    "category": "Documentation",
                    "description": "Update project documentation and add comments."
                }
            ]
        },
        {
            "email": "employee3@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Client Presentation",
                    "date": "05-11-24",
                    "category": "Client Relations",
                    "description": "Present the project demo to the client."
                },
                {
                    "title": "Database Optimization",
                    "date": "08-11-24",
                    "category": "Database",
                    "description": "Optimize database queries for faster performance."
                }
            ]
        },
        {
            "email": "employee4@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Sprint Planning",
                    "date": "05-11-24",
                    "category": "Planning",
                    "description": "Plan tasks and deadlines for the next sprint."
                },
                {
                    "title": "Bug Fixing",
                    "date": "09-11-24",
                    "category": "Development",
                    "description": "Resolve bugs reported by the QA team."
                }
            ]
        },
        {
            "email": "employee5@example.com",
            "password": "123",
            "tasks": [
                {
                    "title": "Security Audit",
                    "date": "05-11-24",
                    "category": "Security",
                    "description": "Conduct a security audit of the new features."
                },
                {
                    "title": "Performance Testing",
                    "date": "10-11-24",
                    "category": "Testing",
                    "description": "Run performance tests on the application."
                }
            ]
        }
    ]
}


const admin = {
    "admin": {
        "email": "admin@example.com",
        "password": "123"
    }
};

const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
    return true
}

const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
}

export { setLocalStorage, getLocalStorage }