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

const Performers = () => {
    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-linkarrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Export as PDF</DropdownItem>
                        <DropdownItem>Export as CSV</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-3">Top Performing</h4>

                <Table hover responsive className="table-striped table-sm table-centered mb-0 table-nowrap">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Leads</th>
                            <th>Deals</th>
                            <th>Tasks</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 font-weight-normal">Jeremy Young</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>187</td>
                            <td>154</td>
                            <td>49</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 font-weight-normal">Thomas Krueger</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>235</td>
                            <td>127</td>
                            <td>83</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 font-weight-normal">Pete Burdine</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>365</td>
                            <td>148</td>
                            <td>62</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 font-weight-normal">Mary Nelson</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>753</td>
                            <td>159</td>
                            <td>258</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Performers;
