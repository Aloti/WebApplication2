import React, { Component } from 'react';
import Employee from './Employee';
import PropTypes from 'prop-types';

class EmployeeList extends Component {
    render() {
        return this.props.employees.map((employee) => (
            <Employee key={employee.id} employee={employee} markComplete={this.props.markComplete} delEmployee={this.props.delEmployee} />
        ));
    }
}

// PropTypes
EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    delEmployee: PropTypes.func.isRequired,
}

export default EmployeeList;