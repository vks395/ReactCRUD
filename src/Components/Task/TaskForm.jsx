import React from "react";
import CrudTask from "../../Services/PassangerService/CrudPassanger";
const crudserv = new CrudTask();
const TaskForm = ({
    FirstName,
    LastName,
    onChange,
    onSubmit,
    onReset,
    editingTaskId,
}) => {
    return (
        
        <form  >
            <div className="form-group">
                <label className="control-label">First Name *</label>
                <input
                    type="text"
                    name="FirstName"
                    value={FirstName}
                    className="form-control"
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label className="control-label">Last Name *</label>
                <input
                    type="text"
                    name="LastName"
                    value={LastName}
                    className="form-control"
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="button"
                    value={editingTaskId ? "Update" : "Create"}
                    className="btn btn-primary"
                    onClick={onSubmit}
                />
                 <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    onClick={onReset}
                >
                    Reset
                </button>
            </div>
           
        </form>
    );
};

export default TaskForm;
