import React, { Component } from 'react';
import CrudTask from '../../Services/PassangerService/CrudPassanger';

const crudserv = new CrudTask();

export default class Task extends Component {
    constructor() {
        super();
        this.state = { FirstName: '', LastName: '' };
    }

    // Generic change handler for all inputs
    onchangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    createhandler = () => {
        const { FirstName, LastName } = this.state;

        // Validate fields
        if (FirstName.trim() === '' || LastName.trim() === '') {
            console.log('First Name and Last Name should not be empty!');
            return;
        }

        console.log(this.state);

        const data = {
            id: 0,
            firstName: FirstName,
            lastName: LastName,
            dateOfBirth: '2024-12-19T07:51:15.375Z',
            height: 0,
            weight: 0,
            mobileNo: 0,
            state: '',
            country: '',
            pincode: '',
            address: '',
            gender: '',
        };

        // Call the service to create a record
        crudserv.CreateRecord(data);
    };

    render() {
        const { FirstName, LastName } = this.state;

        return (
            <>
                <h1>Create</h1>

                <h4>Task</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label className="control-label">Task Name</label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    value={FirstName}
                                    className="form-control"
                                    onChange={this.onchangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Task desc</label>
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
                                    value="Create"
                                    className="btn btn-primary"
                                    onClick={this.createhandler}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
