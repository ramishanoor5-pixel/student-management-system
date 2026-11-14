import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

const sampleStudents = [
  {
    name: "Ali Ahmed",
    rollNumber: "CS-101",
    email: "ali@gmail.com",
    department: "Computer Science",
    semester: "3"
  },
  {
    name: "Sara Khan",
    rollNumber: "CS-102",
    email: "sara@gmail.com",
    department: "Software Engineering",
    semester: "2"
  },
  {
    name: "Ahmed Raza",
    rollNumber: "CS-103",
    email: "ahmed@gmail.com",
    department: "Computer Science",
    semester: "4"
  }
];

function Dashboard() {

  // Load saved students from localStorage
  const [students, setStudents] = useState(() => {

    const savedStudents = localStorage.getItem("students");

    if (savedStudents !== null) {
      try {
        const parsedStudents = JSON.parse(savedStudents);

        if (Array.isArray(parsedStudents)) {
          return parsedStudents;
        }
      } catch {
        console.error("Unable to read saved student records.");
      }
    }

    return sampleStudents;
  });

  const [showForm, setShowForm] = useState(false);

  const [editingStudent, setEditingStudent] = useState(null);

  const [search, setSearch] = useState("");

  const [departmentFilter, setDepartmentFilter] = useState("All");

  const [semesterFilter, setSemesterFilter] = useState("All");


  // Save students whenever records change
  useEffect(() => {

    localStorage.setItem("students", JSON.stringify(students));

  }, [students]);


  // Add or update student
  function saveStudent(student) {

    const duplicate = students.some((s) => {

      return (
        s.rollNumber.toLowerCase() ===
        student.rollNumber.toLowerCase() &&
        s.rollNumber !== editingStudent?.rollNumber
      );

    });

    if (duplicate) {
      alert("This roll number already exists!");
      return;
    }

    if (editingStudent) {

      const updatedStudents = students.map((s) => {

        if (s.rollNumber === editingStudent.rollNumber) {
          return student;
        }

        return s;

      });

      setStudents(updatedStudents);

      alert("Student updated successfully!");

    } else {

      setStudents([...students, student]);

      alert("Student added successfully!");

    }

    setShowForm(false);
    setEditingStudent(null);

  }


  // Open edit form
  function editStudent(student) {

    setEditingStudent(student);

    setShowForm(true);

  }


  // Delete student
  function deleteStudent(rollNumber) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedStudents = students.filter(
      (s) => s.rollNumber !== rollNumber
    );

    setStudents(updatedStudents);

    alert("Student deleted successfully!");

  }


  // Search and filter students
  const filteredStudents = students.filter((student) => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(searchText) ||
      student.rollNumber.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText);

    const matchesDepartment =
      departmentFilter === "All" ||
      student.department === departmentFilter;

    const matchesSemester =
      semesterFilter === "All" ||
      student.semester === semesterFilter;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesSemester
    );

  });


  // Calculate statistics
  const totalDepartments = new Set(
    students.map((s) => s.department)
  ).size;

  const totalSemesters = new Set(
    students.map((s) => s.semester)
  ).size;


  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Header />

        {/* Statistics */}

        <div className="stats">

          <div className="stat-card">
            <h3>Total Students</h3>
            <h1>{students.length}</h1>
          </div>

          <div className="stat-card">
            <h3>Departments</h3>
            <h1>{totalDepartments}</h1>
          </div>

          <div className="stat-card">
            <h3>Active Semesters</h3>
            <h1>{totalSemesters}</h1>
          </div>

        </div>


        {/* Student Management */}

        <div className="student-actions">

          <h2>Manage Students</h2>

          <button
            onClick={() => {

              setEditingStudent(null);
              setShowForm(!showForm);

            }}
          >
            + Add Student
          </button>

        </div>


        {/* Student Form */}

        {showForm && (

          <StudentForm
            key={editingStudent?.rollNumber || "new"}
            onSaveStudent={saveStudent}
            onCancel={() => {

              setShowForm(false);
              setEditingStudent(null);

            }}
            initialStudent={editingStudent}
          />

        )}


        {/* Search and Filters */}

        <div className="filters">

          <input
            type="text"
            placeholder="Search by name, roll number or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">
              Software Engineering
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
          </select>

          <select
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="All">All Semesters</option>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (

              <option key={number} value={String(number)}>
                Semester {number}
              </option>

            ))}

          </select>

        </div>


        {/* Student Table */}

        <StudentTable
          students={filteredStudents}
          onEdit={editStudent}
          onDelete={deleteStudent}
        />

      </div>

    </div>

  );

}

export default Dashboard;