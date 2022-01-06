import React, { Component } from 'react';
import {
    Row,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    Input,
    InputGroupButtonDropdown,
} from 'reactstrap';

import { todayTasks, upcomingTasks, otherTasks } from './Data';
import TaskSection from './Section';
import Task from './Task';

// Task List
class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todayTasks: [...todayTasks],
            upcomingTasks: [...upcomingTasks],
            otherTasks: [...otherTasks],
            isSortDropdownOpen: false,
            selectedTask: todayTasks[0],
        };

        this.toggleSortDropDown = this.toggleSortDropDown.bind(this);
        this.selectTask = this.selectTask.bind(this);
    }

    /**
     * Toggle sort
     */
    toggleSortDropDown() {
        this.setState({ isSortDropdownOpen: !this.state.isSortDropdownOpen });
    }

    /**
     * Selects the task
     * @param {*} taks
     */
    selectTask(task) {
        this.setState({ selectedTask: task });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xl={8}>
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <div className="app-search">
                                    <InputGroup>
                                        <Input placeholder="Search..." />
                                        <span className="mdi mdi-magnify search-icon"></span>
                                        <InputGroupButtonDropdown
                                            addonType="append"
                                            isOpen={this.state.isSortDropdownOpen}
                                            toggle={this.toggleSortDropDown}>
                                            <DropdownToggle caret>
                                                <i className="uil uil-sort-amount-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>Due Date</DropdownItem>
                                                <DropdownItem>Added Date</DropdownItem>
                                                <DropdownItem>Assignee</DropdownItem>
                                            </DropdownMenu>
                                        </InputGroupButtonDropdown>
                                    </InputGroup>
                                </div>
                            </div>
                            <h4 className="page-title">
                                Tasks{' '}
                                <a href="/" className="btn btn-success btn-sm ml-3">
                                    Add New
                                </a>
                            </h4>
                        </div>

                        {/* tasks */}
                        <div className="mt-2">
                            <TaskSection
                                title="Today"
                                tasks={this.state.todayTasks}
                                selectTask={this.selectTask}></TaskSection>
                        </div>
                        <div className="mt-4">
                            <TaskSection
                                title="Upcoming"
                                tasks={this.state.upcomingTasks}
                                selectTask={this.selectTask}></TaskSection>
                        </div>
                        <div className="mt-4 mb-4">
                            <TaskSection
                                title="Other"
                                tasks={this.state.otherTasks}
                                selectTask={this.selectTask}></TaskSection>
                        </div>
                    </Col>

                    <Col>
                        <Task {...this.state.selectedTask} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default TaskList;
