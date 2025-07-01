import React, { useState } from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  // Handle individual checkbox toggle
  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle "select all" checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(tasks.map((task) => task.id));
    } else {
      setSelectedIds([]);
    }
  };

  // Handle bulk delete
  const handleBulkDelete = () => {
    selectedIds.forEach((id) => onDelete(id));
    setSelectedIds([]); // Clear selection
  };

  const allChecked = tasks.length > 0 && selectedIds.length === tasks.length;

  return (
    <>
      <h4>Passenger List ({tasks.length})</h4>
      <button
        className="btn btn-danger mb-2"
        onClick={handleBulkDelete}
        disabled={selectedIds.length === 0}
      >
        Delete Selected
      </button>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="allCheck"
                checked={allChecked}
                onChange={handleSelectAll}
              />
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(task.id)}
                  onChange={() => handleCheckboxChange(task.id)}
                />
              </td>
              <td>{task.firstName}</td>
              <td>{task.lastName}</td>
              <td>
                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
