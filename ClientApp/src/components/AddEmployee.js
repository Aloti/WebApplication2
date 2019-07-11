import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddEmployee extends Component {
    state = {
        Name: '',
        Lastname: '',
        Email: '',
        Phone: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state);
        console.log(this.state)
        this.setState({
            Name: '',
            Lastname: '',
            Email: '',
            Phone: ''
        });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="Name"
                    placeholder="Name ..."
                    value={this.state.name}
                    onChange={this.onChange}
                    style={{ flex: '2' }}
                />
                <input
                    type="text"
                    name="Lastname"
                    placeholder="Lastname ..."
                    value={this.state.lastname}
                    onChange={this.onChange}
                    style={{ flex: '2' }}
                />
                <input
                    type="text"
                    name="Email"
                    placeholder="email@email.com ..."
                    value={this.state.email}
                    onChange={this.onChange}
                    style={{ flex: '2' }}
                />
                <input
                    type="text"
                    name="Phone"
                    placeholder="89878685 ..."
                    value={this.state.phone}
                    onChange={this.onChange}
                    style={{ flex: '2' }}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

// PropTypes
AddEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired
}

export default AddEmployee