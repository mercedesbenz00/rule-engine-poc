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

import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';

const Activity = () => {
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

                <h4 className="header-title mb-3">Recent Activities</h4>

                <Table hover responsive className="table-centered table-nowrap table-hover mb-0">
                    <tbody>
                        <tr>
                            <td>
                                <div className="media">
                                    <img className="mr-2 rounded-circle" src={avatar2} width="40" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">
                                            Soren Drouin
                                            <small className="font-weight-normal ml-3">18 Jan 2019 11:28 pm</small>
                                        </h5>
                                        <span className="font-13">Completed "Design new idea"...</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-muted font-13">Project</span> <br />
                                <p className="mb-0">Hyper Mockup</p>
                            </td>
                            <td className="table-action" style={{ width: '50px' }}>
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                                        <i className="mdi mdi-dots-horizontal"></i>
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem>Settings</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="media">
                                    <img className="mr-2 rounded-circle" src={avatar6} width="40" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">
                                            Anne Simard
                                            <small className="font-weight-normal ml-3">18 Jan 2019 11:09 pm</small>
                                        </h5>
                                        <span className="font-13">Assigned task "Poster illustation design"...</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-muted font-13">Project</span> <br />
                                <p className="mb-0">Hyper Mockup</p>
                            </td>
                            <td className="table-action" style={{ width: '50px' }}>
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                                        <i className="mdi mdi-dots-horizontal"></i>
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem>Settings</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="media">
                                    <img className="mr-2 rounded-circle" src={avatar3} width="40" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">
                                            Nicolas Chartier
                                            <small className="font-weight-normal ml-3">15 Jan 2019 09:29 pm</small>
                                        </h5>
                                        <span className="font-13">Completed "Drinking bottle graphics"...</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-muted font-13">Project</span> <br />
                                <p className="mb-0">Web UI Design</p>
                            </td>
                            <td className="table-action" style={{ width: '50px' }}>
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                                        <i className="mdi mdi-dots-horizontal"></i>
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem>Settings</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="media">
                                    <img className="mr-2 rounded-circle" src={avatar4} width="40" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">
                                            Gano Cloutier
                                            <small className="font-weight-normal ml-3">10 Jan 2019 08:36 pm</small>
                                        </h5>
                                        <span className="font-13">Completed "Design new idea"...</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-muted font-13">Project</span> <br />
                                <p className="mb-0">UBold Admin</p>
                            </td>
                            <td className="table-action" style={{ width: '50px' }}>
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                                        <i className="mdi mdi-dots-horizontal"></i>
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem>Settings</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="media">
                                    <img className="mr-2 rounded-circle" src={avatar5} width="40" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">
                                            Francis Achin
                                            <small className="font-weight-normal ml-3">08 Jan 2019 12:28 pm</small>
                                        </h5>
                                        <span className="font-13">Assigned task "Hyper app design"...</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-muted font-13">Project</span> <br />
                                <p className="mb-0">Website Mockup</p>
                            </td>
                            <td className="table-action" style={{ width: '50px' }}>
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                                        <i className="mdi mdi-dots-horizontal"></i>
                                    </DropdownToggle>

                                    <DropdownMenu right>
                                        <DropdownItem>Settings</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Activity;
