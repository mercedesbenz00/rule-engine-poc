// @flow
import React from 'react';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table,
} from 'reactstrap';

const Tasks = () => {
    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Print</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-3">Tasks</h4>

                <p>
                    <b>107</b> Tasks completed out of 195
                </p>

                <Table responsive className="table-centered table-nowrap table-hover mb-0">
                    <tbody>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <a href="/" className="text-body">
                                        Coffee detail page - Main Page
                                    </a>
                                </h5>
                                <span className="text-muted font-13">Due in 3 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-warning-lighten">In-progress</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 font-weight-normal">Logan R. Cohn</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 font-weight-normal">3h 20min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </a>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <a href="/" className="text-body">
                                        Drinking bottle graphics
                                    </a>
                                </h5>
                                <span className="text-muted font-13">Due in 27 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-danger-lighten">Outdated</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 font-weight-normal">Jerry F. Powell</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 font-weight-normal">12h 21min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </a>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <a href="/" className="text-body">
                                        App design and development
                                    </a>
                                </h5>
                                <span className="text-muted font-13">Due in 7 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-success-lighten">Completed</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 font-weight-normal">Scot M. Smith</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 font-weight-normal">78h 05min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </a>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 my-1">
                                    <a href="/" className="text-body">
                                        Poster illustation design
                                    </a>
                                </h5>
                                <span className="text-muted font-13">Due in 5 days</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Status</span> <br />
                                <span className="badge badge-warning-lighten">In-progress</span>
                            </td>
                            <td>
                                <span className="text-muted font-13">Assigned to</span>
                                <h5 className="font-14 mt-1 font-weight-normal">John P. Ritter</h5>
                            </td>
                            <td>
                                <span className="text-muted font-13">Total time spend</span>
                                <h5 className="font-14 mt-1 font-weight-normal">26h 58min</h5>
                            </td>
                            <td className="table-action" style={{ width: '90px' }}>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-pencil"></i>
                                </a>
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-delete"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Tasks;
