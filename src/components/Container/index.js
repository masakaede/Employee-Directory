import React, { Component, useState } from "react";
import employees from "../../employees.json";
import Navbar from "../Navbar";
import Card from "../Card";
import "./style.css"




class Container extends Component {

    constructor() {
        super();
        this.state = {
            search: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {

        const employeeDetail = employees.filter((data) => {
            if (this.state.search == null) {
                return data
            } else if (data.department.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map(data => {
            return (
                <tr>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.role}</td>
                    <td>{data.department}</td>
                </tr>
            )
        })

        return (
            <div>
                <Navbar>
                    <input className="form-control mr-sm-2" type="text" placeholder="Enter department name" onChange={(e) => this.searchSpace(e)} />
                </Navbar>
                <Card>
                    <table id="table">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Department</th>
                        </tr>
                        <tbody id="employees">
                            {employeeDetail}
                        </tbody>
                    </table>
                </Card>
            </div>
        )
    }
};


export default Container