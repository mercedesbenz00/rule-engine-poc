// @flow
import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';

import statsImg from '../../../assets/images/email-campaign.svg';

const Statistics = () => {
    return (
        <React.Fragment>
            <Card className="tilebox-one">
                <CardBody>
                    <i className="uil uil-users-alt float-right"></i>
                    <h6 className="text-uppercase mt-0">Active Users</h6>
                    <h2 className="my-2" id="active-users-count">
                        121
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-success mr-2">
                            <span className="mdi mdi-arrow-up-bold"></span> 5.27%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                    </p>
                </CardBody>
            </Card>

            <Card className="tilebox-one">
                <CardBody>
                    <i className="uil uil-window-restore float-right"></i>
                    <h6 className="text-uppercase mt-0">Views per minute</h6>
                    <h2 className="my-2" id="active-users-count">
                        121
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-danger mr-2">
                            <span className="mdi mdi-arrow-down-bold"></span> 1.27%
                        </span>
                        <span className="text-nowrap">Since previous week</span>
                    </p>
                </CardBody>
            </Card>

            <Card className="cta-box overflow-hidden">
                <CardBody>
                    <Media className="align-items-center">
                        <Media body>
                            <h3 className="m-0 font-weight-normal cta-box-title">
                                Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i>
                            </h3>
                        </Media>
                        <img className="ml-3" src={statsImg} width="92" alt="" />
                    </Media>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Statistics;
