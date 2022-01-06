import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Collapse, UncontrolledTooltip } from 'reactstrap';
import classNames from 'classnames';

const Task = props => {
    const { task, selectTask } = props;

    const [completed, setCompleted] = useState(task.stage === 'Done');
    const markCompleted = e => {
        setCompleted(e.target.checked);
        selectTask(task);
    };

    return (
        <Row className="justify-content-sm-between mt-2">
            <Col sm={6} className="mb-2 mb-sm-0">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`task-${task.id}`}
                        checked={completed}
                        onChange={markCompleted}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor={`task-${task.id}`}
                        onClick={() => selectTask(task)}>
                        {task.title}
                    </label>
                </div>
            </Col>
            <Col sm={6}>
                <div className="d-flex justify-content-between">
                    <div>
                        <img
                            src={task.assignee_avatar}
                            alt=""
                            className="avatar-xs rounded-circle mr-1"
                            id={`task-avatar-${task.id}`}
                        />
                        <UncontrolledTooltip placement="right" target={`task-avatar-${task.id}`}>
                            Assigned to {task.assigned_to}
                        </UncontrolledTooltip>
                    </div>
                    <div>
                        <ul className="list-inline font-13 text-right">
                            <li className="list-inline-item">
                                <i className="uil uil-schedule font-16 mr-1"></i> {task.due_date}
                            </li>
                            <li className="list-inline-item ml-1">
                                <i className="uil uil-align-alt font-16 mr-1"></i>{' '}
                                {task.checklists.filter(t => t.completed).length} / {task.checklists.length}
                            </li>
                            <li className="list-inline-item ml-1">
                                <i className="uil uil-comment-message font-16 mr-1"></i> {task.comments.length}
                            </li>
                            <li className="list-inline-item ml-2">
                                <span
                                    className={classNames(
                                        'badge',
                                        {
                                            'badge-danger-lighten': task.priority === 'High',
                                            'badge-info-lighten': task.priority === 'Medium',
                                            'badge-success-lighten': task.priority === 'Low',
                                        },
                                        'p-1'
                                    )}>
                                    {task.priority}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

const TaskSection = ({ title, tasks, selectTask }) => {
    const [collapse, setCollapse] = useState(true);
    const toggle = () => setCollapse(!collapse);

    return (
        <React.Fragment>
            <Link className="text-dark" to="#" onClick={toggle}>
                <h5 className="m-0 pb-2">
                    <i
                        className={classNames(
                            'uil',
                            { 'uil-angle-down': collapse, 'uil-angle-right': !collapse },
                            'font-18'
                        )}></i>
                    {title} <span className="text-muted">({tasks.length})</span>
                </h5>
            </Link>

            <Collapse isOpen={collapse}>
                <Card className="mb-0">
                    <CardBody className="pb-1 pt-2">
                        {tasks.map((task, idx) => (
                            <Task selectTask={selectTask} task={task} key={idx} />
                        ))}
                    </CardBody>
                </Card>
            </Collapse>
        </React.Fragment>
    );
};

export default TaskSection;
