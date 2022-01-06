// @flow
import React from 'react';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';

const Leads = () => {
    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Sales Report</DropdownItem>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Profit</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-4">Recent Leads</h4>

                <div className="media">
                    <img className="mr-3 rounded-circle" src={avatar2} width="40" alt="Generic placeholder" />
                    <div className="media-body">
                        <span className="badge badge-warning-lighten float-right">Cold lead</span>
                        <h5 className="mt-0 mb-1">Risa Pearson</h5>
                        <span className="font-13">richard.john@mail.com</span>
                    </div>
                </div>

                <div className="media mt-3">
                    <img className="mr-3 rounded-circle" src={avatar3} width="40" alt="Generic placeholder" />
                    <div className="media-body">
                        <span className="badge badge-danger-lighten float-right">Lost lead</span>
                        <h5 className="mt-0 mb-1">Margaret D. Evans</h5>
                        <span className="font-13">margaret.evans@rhyta.com</span>
                    </div>
                </div>

                <div className="media mt-3">
                    <img className="mr-3 rounded-circle" src={avatar4} width="40" alt="Generic placeholder" />
                    <div className="media-body">
                        <span className="badge badge-success-lighten float-right">Won lead</span>
                        <h5 className="mt-0 mb-1">Bryan J. Luellen</h5>
                        <span className="font-13">bryuellen@dayrep.com</span>
                    </div>
                </div>

                <div className="media mt-3">
                    <img className="mr-3 rounded-circle" src={avatar5} width="40" alt="Generic placeholder" />
                    <div className="media-body">
                        <span className="badge badge-warning-lighten float-right">Cold lead</span>
                        <h5 className="mt-0 mb-1">Kathryn S. Collier</h5>
                        <span className="font-13">collier@jourrapide.com</span>
                    </div>
                </div>

                <div className="media mt-3">
                    <img className="mr-3 rounded-circle" src={avatar6} width="40" alt="Generic placeholder" />
                    <div className="media-body">
                        <span className="badge badge-warning-lighten float-right">Cold lead</span>
                        <h5 className="mt-0 mb-1">Timothy Kauper</h5>
                        <span className="font-13">thykauper@rhyta.com</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Leads;
