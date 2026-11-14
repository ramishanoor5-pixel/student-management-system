function StudentTable({ students, onEdit, onDelete }) {

  return (
    <div className="table-container">

      <h2>Student Records</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Email</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.length === 0 ? (

            <tr>
              <td colSpan="6" className="empty-message">
                No students found.
              </td>
            </tr>

          ) : (

            students.map((student) => (

              <tr key={student.rollNumber}>

                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.semester}</td>

                <td className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(student.rollNumber)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;