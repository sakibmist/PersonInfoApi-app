import React from 'react';
import http from 'axios';
import { NavLink } from 'react-router-dom';


class PersonIndexPage extends React.Component {
    state = {
        peoples: []
    }

    baseUrl = "http://localhost:5000/api/person";

    async componentDidMount() {

        const response = await http.get(`${this.baseUrl}`);
        //console.log(response.status);
        if (response.status === 200) {
            const peoples = response.data;
            this.setState({ peoples });
        }
    }

    render() {
        const { peoples } = this.state;
        return (
            <div className="offset-1 col-sm-10">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th width="220px">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peoples.map((people, index) => (
                            <tr key={index}>
                                <td>{people.name}</td>
                                <td>{people.age}</td>
                                <td>{people.address}</td>
                                <td>
                                    <NavLink to={`/person/edit/${people.id}`} className="btn btn-sm btn-warning ml-2">Edit</NavLink>
                                    <button className="btn btn-sm btn-danger ml-2">Delete</button>
                                    <button className="btn btn-sm ml-2">Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PersonIndexPage;