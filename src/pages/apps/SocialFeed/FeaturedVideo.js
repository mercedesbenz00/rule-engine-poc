import React from 'react';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const FeaturedVideo = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <UncontrolledDropdown className="float-right">
                        <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow card-drop p-0">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </DropdownToggle>

                        <DropdownMenu right>
                            <DropdownItem>Today</DropdownItem>
                            <DropdownItem>Yesterday</DropdownItem>
                            <DropdownItem>Last Week</DropdownItem>
                            <DropdownItem>Last Month</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <h4 className="header-title mb-1">Featured Video For You</h4>

                    <div className="mt-3">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="embed-responsive-item"
                                title="video"
                                src="https://www.youtube.com/embed/9_eqq0HlN9g?autohide=0&showinfo=0&controls=0"></iframe>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default FeaturedVideo;
