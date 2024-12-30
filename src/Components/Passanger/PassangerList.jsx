import React from "react";

export default function PassangerList({ tasks, onEdit, onDelete }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.firstName}</td>
                        <td>{task.lastName}</td>
                        <td>
                            <button
                                className="btn btn-secondary"
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
    );
}
