// @flow
import React from 'react';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const AvgSales = () => {
    return (
        <Card className="bg-primary">
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link text-white arrow-none card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Sales Report</DropdownItem>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Profit</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title text-white  mb-4">Average Sale Size</h4>

                <div className="text-center">
                    <p className="mt-4 mb-2">
                        <span className="badge badge-danger">-23.47 %</span>
                    </p>
                    <h3 className="font-weight-normal text-white mb-2">$154.21</h3>
                    <p className="text-light text-uppercase font-13 font-weight-bold">Per Sale</p>
                    <a href="/" className="btn btn-outline-light btn-sm mb-1">
                        More<i className="mdi mdi-arrow-right ml-1"></i>
                    </a>
                </div>
            </CardBody>
        </Card>
    );
};

export default AvgSales;
