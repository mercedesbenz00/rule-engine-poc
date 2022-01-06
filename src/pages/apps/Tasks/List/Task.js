import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    UncontrolledTooltip,
} from 'reactstrap';
import classNames from 'classnames';

const createMarkup = text => {
    return { __html: text };
};

const Task = task => {
    const [completed, setCompleted] = useState(task.stage === 'Done');
    const markCompleted = e => setCompleted(e.target.checked);

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <UncontrolledDropdown className="card-widgets">
                        <DropdownToggle className="arrow-none btn btn-link p-0" tag="button">
                            <i className="uil uil-ellipsis-h"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <i className="uil uil-file-upload mr-1"></i>Attachment
                            </DropdownItem>
                            <DropdownItem>
                                <i className="uil uil-edit mr-1"></i>Edit
                            </DropdownItem>
                            <DropdownItem>
                                <i className="uil uil-file-copy-alt mr-1"></i>Mark as Duplicate
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="text-danger">
                                <i className="uil uil-trash-alt mr-1"></i>Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <div className="custom-control custom-checkbox float-left">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="completedCheck"
                            checked={completed}
                            onChange={markCompleted}
                        />
                        <label className="custom-control-label" htmlFor="completedCheck">
                            Mark as completed
                        </label>
                    </div>

                    <hr className="mt-4 mb-2" />

                    <Row>
                        <Col>
                            <h4>{task.title}</h4>

                            <Row>
                                <Col>
                                    <p className="mt-2 mb-1 text-muted">Assigned To</p>
                                    <Media>
                                        <img
                                            src={task.assignee_avatar}
                                            alt={task.assigned_to}
                                            className="rounded-circle mr-2"
                                            height="24"
                                        />
                                        <Media body>
                                            <h5 className="mt-1 font-14">{task.assigned_to}</h5>
                                        </Media>
                                    </Media>
                                </Col>

                                <Col>
                                    <p className="mt-2 mb-1 text-muted">Due Date</p>
                                    <Media>
                                        <i className="uil uil-schedule font-18 text-success mr-1"></i>
                                        <Media body>
                                            <h5 className="mt-1 font-14">{task.due_date}</h5>
                                        </Media>
                                    </Media>
                                </Col>
                            </Row>

                            <div className="row mt-3">
                                <div className="col">
                                    <div id="taskDesk" dangerouslySetInnerHTML={createMarkup(task.description)}></div>
                                </div>
                            </div>

                            <h5 className="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>

                            {task.checklists.map((checklist, index) => (
                                <div className="custom-control custom-checkbox mt-1" key={index}>
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={`checklist-${checklist.id}`}
                                        defaultChecked={checklist.completed}
                                    />
                                    <label
                                        className={classNames('custom-control-label', {
                                            strikethrough: checklist.completed,
                                        })}
                                        htmlFor={`checklist-${checklist.id}`}>
                                        {checklist.title}
                                    </label>
                                </div>
                            ))}

                            <h5 className="mt-4 mb-2 font-16">Attachments</h5>

                            {task.attachments.map((f, index) => {
                                const ext = f.filename.substr(f.filename.lastIndexOf('.') + 1);
                                return (
                                    <Card key={index} className="mb-2 shadow-none border">
                                        <div className="p-1">
                                            <Row className="align-items-center">
                                                <Col className="col-auto">
                                                    <div className="avatar-sm">
                                                        <span className="avatar-title rounded">.{ext}</span>
                                                    </div>
                                                </Col>
                                                <Col className="pl-0">
                                                    <Link to="#" className="text-muted font-weight-bold">
                                                        {f.filename}
                                                    </Link>
                                                    <p className="mb-0">{f.size}</p>
                                                </Col>
                                                <Col className="col-auto">
                                                    <Link
                                                        to="#"
                                                        id="btn-download"
                                                        className="btn btn-link text-muted btn-lg p-0 mr-1">
                                                        <i className="uil uil-cloud-download"></i>
                                                    </Link>
                                                    <UncontrolledTooltip placement="right" target="btn-download">
                                                        Download
                                                    </UncontrolledTooltip>

                                                    <Link
                                                        to="#"
                                                        id="btn-Delete"
                                                        className="btn btn-link text-danger btn-lg p-0">
                                                        <i className="uil uil-multiply"></i>
                                                    </Link>
                                                    <UncontrolledTooltip placement="right" target="btn-Delete">
                                                        Delete
                                                    </UncontrolledTooltip>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                );
                            })}

                            <div className="row mt-3">
                                <div className="col">
                                    <h5 className="mb-2 font-16">Comments</h5>

                                    {task.comments.map((comment, idx) => (
                                        <React.Fragment key={idx}>
                                            <Media key={idx} className="mt-3 p-1">
                                                <img
                                                    src={comment.author_avatar}
                                                    className="mr-2 rounded-circle"
                                                    height="36"
                                                    alt={comment.author}
                                                />
                                                <Media body>
                                                    <h5 className="mt-0 mb-0">
                                                        <span className="float-right text-muted font-12">
                                                            {comment.posted_on}
                                                        </span>
                                                        {comment.author}
                                                    </h5>
                                                    <p className="mt-1 mb-0 text-muted">{comment.text}</p>
                                                </Media>
                                            </Media>
                                            <hr />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <Row className="mt-2">
                                <Col>
                                    <div className="border rounded">
                                        <form action="#" className="comment-area-box">
                                            <textarea
                                                rows="3"
                                                className="form-control border-0 resize-none"
                                                placeholder="Your comment..."></textarea>
                                            <div className="p-2 bg-light">
                                                <div className="float-right">
                                                    <button type="submit" className="btn btn-sm btn-success">
                                                        <i className="uil uil-message mr-1"></i>Submit
                                                    </button>
                                                </div>
                                                <div>
                                                    <Link to="#" className="btn btn-sm px-1 btn-light">
                                                        <i className="uil uil-cloud-upload"></i>
                                                    </Link>
                                                    <Link to="#" className="btn btn-sm px-1 btn-light">
                                                        <i className="uil uil-at"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Task;
