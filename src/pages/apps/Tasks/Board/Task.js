import React from 'react';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classNames from 'classnames';

// task item
const TaskItem = props => {
    const task = props.task || {};

    return (
        <Card className="mb-0">
            <CardBody className="p-3">
                <small className="float-right text-muted">{task.dueDate}</small>
                <span
                    className={classNames('badge', {
                        'badge-danger': task.priority === 'High',
                        'badge-secondary': task.priority === 'Medium',
                        'badge-success': task.priority === 'Low',
                    })}>
                    {task.priority}
                </span>

                <h5 className="mt-2 mb-2">
                    <a href="/" className="text-body">
                        {task.title}
                    </a>
                </h5>

                <p className="mb-0">
                    <span className="pr-2 text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-briefcase-outline text-muted"></i> {task.project}
                    </span>
                    <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted"></i> <b>{task.totalComments}</b>{' '}
                        Comments
                    </span>
                </p>

                <UncontrolledDropdown className="float-right">
                    <DropdownToggle className="text-muted arrow-none btn btn-link p-0" tag="button">
                        <i className="mdi mdi-dots-vertical font-18"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <i className="mdi mdi-pencil mr-1"></i>Edit
                        </DropdownItem>
                        <DropdownItem>
                            <i className="mdi mdi-delete mr-1"></i>Delete
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <i className="mdi mdi-plus-circle-outline mr-1"></i>Add People
                        </DropdownItem>
                        <DropdownItem>
                            <i className="mdi mdi-exit-to-app mr-1"></i>Leave
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <p className="mb-0">
                    <img src={task.userAvatar} alt={task.user} className="avatar-xs rounded-circle mr-1" />
                    <span className="align-middle">{task.user}</span>
                </p>
            </CardBody>
        </Card>
    );
};

export default TaskItem;
