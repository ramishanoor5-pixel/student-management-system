function StudentForm({ onSaveStudent, onCancel, initialStudent }) {

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name: e.target.name.value.trim(),
      rollNumber: e.target.rollNumber.value.trim(),
      email: e.target.email.value.trim(),
      department: e.target.department.value,
      semester: e.target.semester.value
    };

    onSaveStudent(newStudent);
  }

  return (
    <div className="student-form">

      <h2>
        {initialStudent ? "Edit Student" : "Add New Student"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          defaultValue={initialStudent?.name || ""}
          required
        />

        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          defaultValue={initialStudent?.rollNumber || ""}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          defaultValue={initialStudent?.email || ""}
          required
        />

        <select
          name="department"
          defaultValue={initialStudent?.department || ""}
          required
        >
          <option value="" disabled>Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Information Technology">Information Technology</option>
        </select>

        <select
          name="semester"
          defaultValue={initialStudent?.semester || ""}
          required
        >
          <option value="" disabled>Select Semester</option>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <option key={number} value={String(number)}>
              Semester {number}
            </option>
          ))}
        </select>

        <div className="form-buttons">

          <button type="submit">
            {initialStudent ? "Update Student" : "Save Student"}
          </button>

          <button type="button" onClick={onCancel}>
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
}

export default StudentForm;