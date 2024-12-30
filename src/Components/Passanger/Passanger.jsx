import React, { Component } from "react";
import CrudTask from "../../Services/PassangerService/CrudPassanger";
import SuccessAlert from "../../Utility/SuccessAlert";
import PassangerForm from "./PassangerForm"; // Import the form component
import PassangerList from "./PassangerList"; // Import the list component
import ValidationAlert from "./ValidationAlert"; // Import the validation alert component

const crudserv = new CrudTask();

export default class Passanger extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            editingTaskId: null,
            CrudType: "",
            validationMessage: "",
            showValidationAlert: false,
        };
    }

    // Fetch all tasks
    fetchTasks = async () => {
        try {
            const response = await crudserv.GetRecords();
            this.setState({ tasks: response.data });
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    componentDidMount() {
        this.fetchTasks(); // Load tasks on component mount
    }

    render() {
        const { tasks, editingTaskId, CrudType, validationMessage, showValidationAlert } = this.state;

        return (
            <>
                {CrudType && <SuccessAlert message={`Task ${CrudType} successfully!`} />}

                <ValidationAlert
                    show={showValidationAlert}
                    message={validationMessage}
                    onClose={() => this.setState({ showValidationAlert: false })}
                />

                <h4>{editingTaskId ? "Update Passanger" : "Create Passanger"}</h4>
                <hr />
                <PassangerForm
                    editingTaskId={editingTaskId}
                    onSubmit={this.fetchTasks} // Fetch tasks after creation/updation
                    onValidationError={(message) =>
                        this.setState({
                            validationMessage: message,
                            showValidationAlert: true,
                        })
                    }
                />

                <h4>Passanger List</h4>
                <hr />
                <PassangerList
                    tasks={tasks}
                    onEdit={(task) => this.setState({ editingTaskId: task.id })}
                    onDelete={this.fetchTasks}
                />
            </>
        );
    }
}
