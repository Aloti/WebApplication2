import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import About from './components/pages/About';
import ReactTable from 'react-table'
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        axios.get('https://localhost:44351/api/Employees')
            .then(res => this.setState({ employees: res.data }))
        console.log('pasa por aqui')
    }


    // Delete 
    delEmployee = (id) => {
        axios.delete(`https://localhost:44351/api/Employees/${id}`)
            .then(res => this.setState({ employees: [...this.state.employees.filter(employee => employee.id !== id)] }));
    }

    // Add 
    addEmployee = (employee) => {
        console.log(employee);
        axios.post('https://localhost:44351/api/Employees/', employee)
            .then(res => this.setState({ employees: [...this.state.employees, res.data] }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddEmployee addEmployee={this.addEmployee} />
                                <EmployeeList employees={this.state.employees} markComplete={this.markComplete} delEmployee={this.delEmployee} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;