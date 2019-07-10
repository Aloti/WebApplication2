import React, { Component } from 'react';
import Employee from './Employee';
import PropTypes from 'prop-types';

class EmployeeList extends Component {
    render() {
        return this.props.employeeList.map((employee) => (
            <TodoItem key={employee.id} employee={employee} markComplete={this.props.markComplete} delEmployee={this.props.delEmployee} />
        ));
    }
}

// PropTypes
EmployeeList.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default EmployeeList;