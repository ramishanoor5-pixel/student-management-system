# Student Management System

A simple and responsive Student Management System built with React and Vite. This project allows users to manage student records through an interactive dashboard with CRUD operations and search/filter functionality.

## 🚀 Features

- **Dashboard:** Displays total students, departments, and active semesters.
- **Add Students:** Add new student records with all required details.
- **Edit Students:** Update existing student information.
- **Delete Students:** Remove student records with confirmation.
- **Search:** Search students by name, roll number, or email.
- **Filter:** Filter records by department and semester.
- **Data Persistence:** Saves student records in browser Local Storage, so data remains available after refreshing the page.
- **Responsive Design:** User-friendly layout for different screen sizes.

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Browser Local Storage

## 📋 Student Information

Each student record includes:

- Student Name
- Roll Number
- Email Address
- Department
- Semester

## 💾 Data Storage

This project uses browser Local Storage to save student records.

- Records remain saved after refreshing the browser.
- Updated and deleted records are reflected in storage.
- Data is stored locally in the user's browser.
- Records are not synchronized across different devices or browsers.

## 📁 Project Structure

```text
student-management-system/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── Dashboard.jsx
│   │   ├── StudentTable.jsx
│   │   └── StudentForm.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## 🎯 Project Objective

The objective of this project is to build a functional student management interface using React, practice component-based development, manage application state, implement CRUD operations, and understand data persistence using Local Storage.

## 👩‍💻 Developer

**Hafiza Ramisha Noor**

---

*Developed as Task 7 for the ELITE.Org Web Development Internship.*
