import React, { Component } from "react";
import CrudTask from "../../Services/PassangerService/CrudPassanger";
import SuccessAlert from "../../Utility/SuccessAlert";
import { Alert } from "reactstrap";
import PassengerForm from "./TaskForm";
import PassengerList from "./TaskList";
import './Task.css';



export default class Passenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            tasks: [],
            editingTaskId: null,
            CrudType: "",
            validationMessage: "",
            showValidationAlert: false,
        };
        this.crudserv = new CrudTask();
    }

    componentDidMount() {
        this.fetchTasks();
    }

    onchangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

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

    confirmAction = (actionName) => {
        return window.confirm(`Are you sure you want to ${actionName}?`);
    };

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
            await this.crudserv.CreateRecord(data);
            this.setState({
                FirstName: "",
                LastName: "",
                CrudType: "created",    
            });
            this.fetchTasks();
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    fetchTasks = async () => {
        try {
            const response = await this.crudserv.GetRecords();
            this.setState({ tasks: response.data });
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

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
            await this.crudserv.UpdateRecord(editingTaskId, data);
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

    deleteHandler = async (id) => {
        if (!this.confirmAction("delete this task")) return;

        try {
            await this.crudserv.DeleteRecord(id);
            this.setState({ CrudType: "deleted" });
            this.fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
     handleReset = () => {
        this.setState({
            FirstName: "",
            LastName: "",
            editingTaskId: null,
            CrudType: "",
        });
        this.fetchTasks();
    };
    editHandler = (task) => {
        this.setState({
            FirstName: task.firstName,
            LastName: task.lastName,
            editingTaskId: task.id,
        });
    };
  
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

 const UserIdTest = localStorage.getItem("userId");

   if (UserIdTest === null || UserIdTest === undefined)
    { 
         return(
            <h1> you are not authorized to visit this page --login in again </h1>
        )
    }else{
      
         return (
            <> <h1>hello , {UserIdTest}</h1>
            
                {CrudType && <SuccessAlert message={`Task ${CrudType} successfully!`} />}
                
                
                { showValidationAlert && 
                    <SuccessAlert color="danger" message={validationMessage}/>
                   
                }

                <h4>{editingTaskId ? "Update Passenger" : "Create Passenger"}</h4>
                <PassengerForm
                    FirstName={FirstName}
                    LastName={LastName}
                    onChange={this.onchangeHandler}
                    onSubmit={editingTaskId ? this.updateHandler : this.createHandler}
                    onReset={this.handleReset}
                    editingTaskId={editingTaskId}
                   
                />

                <PassengerList
                    tasks={tasks}
                    onEdit={this.editHandler}
                    onDelete={this.deleteHandler}
                />
            </>
        );
    }
  
}}
