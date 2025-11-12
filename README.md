# 🧪 Cypress Automation Project - OrangeHRM Demo

This project demonstrates **end-to-end testing automation** using **Cypress** on the [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/).  
It automates key user flows such as **login**, **adding a new employee**, **verifying the data**, and **deleting the employee record**.

---

## 🎯 Project Objective

The main goal of this project is to **practice and showcase automation testing skills** using Cypress.  
It reflects real-world QA scenarios where a tester:
- Logs into an application
- Performs CRUD operations (Create, Read, Update, Delete)
- Validates that the UI and workflow behave as expected
- Records and analyzes test results automatically

---

## ⚙️ Tech Stack & Tools
| Tool / Language | Purpose |
|------------------|----------|
| **Cypress** | End-to-End Testing Framework |
| **JavaScript (ES6)** | Test scripting |
| **Visual Studio Code** | IDE for development |
| **Node.js & npm** | Package management |
| **Git & GitHub** | Version control and hosting |

---

## 🧩 Test Scenarios Covered

### 1. Login
- Opens the OrangeHRM login page  
- Enters valid credentials (`Admin / admin123`)  
- Clicks the login button and verifies the dashboard is visible  

### 2. Add Employee
- Navigates to **PIM module**  
- Clicks “Add Employee”  
- Fills employee details (first name, last name, job title, etc.)  
- Saves the record successfully  

### 3. Verify & Delete Employee
- Searches for the added employee  
- Verifies that the employee appears in the table  
- Selects and deletes the employee record  

*(Additional scenarios such as uploading files and editing info are included but commented for clarity.)*

---

## 🧠 Key Cypress Commands Used

| Command | Description |
|----------|-------------|
| `cy.visit()` | Opens the target URL |
| `cy.get()` | Locates elements using CSS selectors |
| `cy.type()` | Inputs text into fields |
| `cy.click()` | Clicks a button or element |
| `cy.should()` | Performs assertions |
| `cy.wait()` | Delays execution to ensure stability |
| `cy.clearCookies()` / `cy.clearLocalStorage()` | Cleans environment before running |

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/RakanV2/CypressNew.git

npm install
-------------------
npx cypress open
--------------
npx cypress run
----------------
cypress/videos/

CypressNew/
│
├── cypress/
│   ├── e2e/
│   │   └── orangehrm_addEmployee.cy.js
│   ├── fixtures/
│   ├── support/
│   └── videos/
│
├── cypress.config.js
├── package.json
└── README.md

Lessons Learned

Understanding of E2E automation flows

How to locate complex elements using CSS selectors

Importance of using assertions for validation

Difference between headed and headless test runs

Organizing and maintaining reusable Cypress scripts

👨‍💻 Author

Rakan Alshehri
📍 Riyadh, Saudi Arabia
💼 QA & Software Testing Enthusiast
https://www.linkedin.com/in/rakanalshehri/


Future Improvements

Parameterize test data using JSON fixtures

Replace cy.wait() with dynamic waits (cy.intercept() / .should())

Integrate with CI/CD (GitHub Actions or Jenkins)

Add detailed test reports (using Mochawesome or Allure)
