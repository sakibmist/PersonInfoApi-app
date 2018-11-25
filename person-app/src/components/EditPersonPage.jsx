import React from 'react';
import http from 'axios';

class EditPersonPage extends React.Component {
    state = {
        msg: '',
        person: {
            name: '',
            age: '',
            address: ''
        }
    };

    baseUrl = "http://localhost:5000/api/person";

    async componentDidMount() {
        const { params } = this.props.match;
        if (!params || !params.id) {
            this.props.history.goBack();
            return;
        }
        const id = params.id;
        const response = await http.get(`${this.baseUrl}/${id}`);
        if (response.status === 200) {
            const person = response.data;
            console.log(person);
            this.setState({ person });
        } else {
            this.props.history.goBack();
            return;
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            person: {
                ...this.state.person,
                [name]: value
            }
        });
    };

    render() {
        const { msg } = this.state;
        const { address, age, name } = this.state.person;
        return (
            <div className="card-body border">
                <div className="offset-2 col-sm-8">
                    {msg}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">
                                Name
                        </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="age" className="col-sm-2 col-form-label">
                                Age
                        </label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    placeholder="Age"
                                    value={age}
                                    onChange={this.handleChange}

                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="address" className="col-sm-2 col-form-label">
                                Address
                            </label>
                            <div className="col-sm-10">
                                <textarea name="address" id="address" className="form-control" value={address} onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button className="btn  btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditPersonPage;
