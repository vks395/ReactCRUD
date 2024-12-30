import React, { Component } from "react";
import CrudTask from "../../Services/PassangerService/CrudPassanger";

const crudserv = new CrudTask();

export default class PassangerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
        };
    }

    componentDidUpdate(prevProps) {
        const { editingTaskId, tasks } = this.props;

        // Update form data only if the editingTaskId changes
        if (editingTaskId && editingTaskId !== prevProps.editingTaskId) {
           
            const task = tasks?.find((t) => t.id === editingTaskId);
            console.log(task);
            if (task) {
                this.setState({
                    FirstName: task.firstName || "",
                    LastName: task.lastName || "",
                    errors: "",
                });
            }
        }
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
            this.props.onValidationError("First Name and Last Name are required!");
            return false;
        }
        return true;
    };

    // Create or update a task
    handleSubmit = async () => {
        if (!this.validateFields()) return;

        const { FirstName, LastName } = this.state;
        const data = {
            id: this.props.editingTaskId?this.props.editingTaskId:0,
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
            if (this.props.editingTaskId) {
                await crudserv.UpdateRecord(this.props.editingTaskId, data);
                this.props.onSubmit(); // Refresh tasks after update
            } else {
                await crudserv.CreateRecord(data);
                this.props.onSubmit(); // Refresh tasks after create
            }
            this.setState({ FirstName: "", LastName: "" }); // Reset form
        } catch (error) {
            console.error("Error submitting task:", error);
        }
    };

    render() {
        const { FirstName, LastName } = this.state;
    
        return (
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="FirstName"
                        value={FirstName}
                        className="form-control"
                        onChange={this.onchangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="LastName"
                        value={LastName}
                        className="form-control"
                        onChange={this.onchangeHandler}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                    {this.props.editingTaskId ? "Update" : "Create"}
                </button>
            </form>
        );
    }
}
