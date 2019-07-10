import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddEmployee extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        phone: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state);
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
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Name ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Lastname"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Lastname ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Email"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="email@email.com ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Phone"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="89878685 ..."
                    value={this.state.title}
                    onChange={this.onChange}
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