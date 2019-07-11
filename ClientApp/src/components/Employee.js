import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Employee extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        console.log(this.props.employee);
        const { id, name, lastname, phone, email } = this.props.employee;
        return (
            <table className="table">
                <tbody className="table-body">
                    <tr className="table-row">
                        <th className="table-header">Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    <tr className="table-body">
                        <td>{name}</td>
                        <td>{lastname}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td><button onClick={this.props.delEmployee.bind(this, id)} style={btnStyle}>x</button></td>
                    </tr>
                </tbody>
            </table>
                    //<!--<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}-->
        )
    }
}

// PropTypes
Employee.propTypes = {
    employee: PropTypes.object.isRequired,
    delEmployee: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Employee