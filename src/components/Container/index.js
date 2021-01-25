import React, { Component } from "react";
import employees from "../../employees.json";
import Navbar from "../Navbar";
import Card from "../Card";

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
        const styleInfo = {
            paddingRight: '10px',

        }

        const elementStyle = {
            border: 'solid',
            borderRadius: '10px',
            position: 'relative',
            left: '10px',
            height: '30px',
            width: '200px',
            marginTop: '5px',
            marginBottom: '10px'
        }

        const employeeDetail = employees.filter((data) => {
            if (this.state.search == null) {
                return data
            } else if (data.department.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map(data => {
            return (
                <div>
                    <ul>
                        <li style={{ position: 'relative', left: '10px' }}>
                            <span style={styleInfo}>{data.firstName}</span>
                            <span style={styleInfo}>{data.lastName}</span>
                            <span style={styleInfo}>{data.role}</span>
                            <span style={styleInfo}>{data.department}</span>
                        </li>
                    </ul>
                </div>
            )
        })

        return (
            <div>
                <Navbar>
                    <input className="form-control mr-sm-2" type="text" placeholder="Enter department name" onChange={(e) => this.searchSpace(e)} />
                </Navbar>
                <Card>
                    {employeeDetail};
                </Card>
            </div>
        )
    }
};


export default Container