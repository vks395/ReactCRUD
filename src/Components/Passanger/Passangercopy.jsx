import React, { Component } from "react";
import CrudTask from "../../Services/PassangerService/CrudPassanger";
import SuccessAlert from "../../Utility/SuccessAlert";
import { Alert } from "reactstrap"; // Import Reactstrap Alert component

const crudserv = new CrudTask();

export default class Passanger extends Component {
    constructor() {
        super();
        this.state = {
            FirstName: "",
            LastName: "",
            tasks: [],
            editingTaskId: null,
            CrudType: "",
            validationMessage: "", // Message for validation alert
            showValidationAlert: false, // Toggle for validation alert visibility
        };
    }

    // Handle input changes
    onchangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // Validate inputs
    validateFields = () => {
        const { FirstName, LastName } = this.state;
        if (FirstName.trim() === "" || LastName.trim() === "") {
            this.setState({
                validationMessage: "First Name and Last Name are required!",
                showValidationAlert: true,
            });
            return false;
        }
        return true;
    };

    // Show confirmation dialog
    confirmAction = (actionName) => {
        return window.confirm(`Are you sure you want to ${actionName}?`);
    };

    // Create a new record
    createHandler = async () => {
        if (!this.validateFields()) return;
        if (!this.confirmAction("create this task")) return;

        const { FirstName, LastName } = this.state;

        const data = {
            id: 0,
            firstName: FirstName,
            lastName: LastName,
            dateOfBirth: "2024-12-19T07:51:15.375Z",
            height: 0,
            weight: 0,
            mobileNo: 0,
            state: "",
            country: "",
            pincode: "",
            address: "",
            gender: "",
        };

        try {
            await crudserv.CreateRecord(data);
            this.setState({
                FirstName: "",
                LastName: "",
                CrudType: "created",
            });
            this.fetchTasks(); // Refresh the task list
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    // Fetch all tasks
    fetchTasks = async () => {
        try {
            const response = await crudserv.GetRecords();
            this.setState({ tasks: response.data });
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    // Update a task
    updateHandler = async () => {
        if (!this.validateFields()) return;
        if (!this.confirmAction("update this task")) return;

        const { FirstName, LastName, editingTaskId } = this.state;

        if (!editingTaskId) {
            this.setState({
                validationMessage: "No task selected for updating!",
                showValidationAlert: true,
            });
            return;
        }

        const data = {
            id: editingTaskId,
            firstName: FirstName,
            lastName: LastName,
            dateOfBirth: "2024-12-19T07:51:15.375Z",
            height: 0,
            weight: 0,
            mobileNo: 0,
            state: "",
            country: "",
            pincode: "",
            address: "",
            gender: "",
        };

        try {
            await crudserv.UpdateRecord(editingTaskId, data);
            this.setState({
                FirstName: "",
                LastName: "",
                editingTaskId: null,
                CrudType: "updated",
            });
            this.fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Delete a task
    deleteHandler = async (id) => {
        if (!this.confirmAction("delete this task")) return;

        try {
            await crudserv.DeleteRecord(id);
            this.setState({ CrudType: "deleted" });
            this.fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // Select a task for editing
    editHandler = (task) => {
        this.setState({
            FirstName: task.firstName,
            LastName: task.lastName,
            editingTaskId: task.id,
        });
    };

    componentDidMount() {
        this.fetchTasks(); // Load tasks on component mount
    }

    render() {
        const {
            tasks,
            FirstName,
            LastName,
            editingTaskId,
            CrudType,
            validationMessage,
            showValidationAlert,
        } = this.state;

        return (
            <>
              
                {CrudType && <SuccessAlert message={`Task ${CrudType} successfully!`} />}

                {showValidationAlert && (
                    <Alert
                        color="danger"
                        toggle={() => this.setState({ showValidationAlert: false })}
                    >
                        {validationMessage}
                    </Alert>
                )}

                <h4>{editingTaskId ? "Update Passanger" : "Create Passanger"}</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label className="control-label">First Name</label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    value={FirstName}
                                    className="form-control"
                                    onChange={this.onchangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Last Name</label>
                                <input
                                    type="text"
                                    name="LastName"
                                    value={LastName}
                                    className="form-control"
                                    onChange={this.onchangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="button"
                                    value={editingTaskId ? "Update" : "Create"}
                                    className="btn btn-primary"
                                    onClick={editingTaskId ? this.updateHandler : this.createHandler}
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <h4>Passanger List</h4>
                <hr />
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
                                        onClick={() => this.editHandler(task)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.deleteHandler(task.id)}
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
    }
}
