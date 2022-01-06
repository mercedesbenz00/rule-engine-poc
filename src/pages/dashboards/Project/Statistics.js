// @flow
import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

const Statistics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card className="widget-inline">
                        <CardBody className="p-0">
                            <Row className="no-gutters">
                                <Col sm={6} xl={3}>
                                    <Card className="shadow-none m-0">
                                        <CardBody className="text-center">
                                            <i className="dripicons-briefcase text-muted font-24"></i>
                                            <h3>
                                                <span>29</span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">Total Projects</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} xl={3}>
                                    <Card className="card shadow-none m-0 border-left">
                                        <CardBody className="text-center">
                                            <i className="dripicons-checklist text-muted font-24"></i>
                                            <h3>
                                                <span>715</span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">Total Tasks</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} xl={3}>
                                    <Card className="card shadow-none m-0 border-left">
                                        <CardBody className="text-center">
                                            <i className="dripicons-user-group text-muted font-24"></i>
                                            <h3>
                                                <span>31</span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">Members</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} xl={3}>
                                    <Card className="card shadow-none m-0 border-left">
                                        <CardBody className="text-center">
                                            <i className="dripicons-graph-line text-muted font-24"></i>
                                            <h3>
                                                <span>93%</span> <i className="mdi mdi-arrow-up text-success"></i>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">Productivity</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
