// @flow
import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

const Statistics = () => {
    return (
        <Row>
            <Col sm={4}>
                <Card className="tilebox-one">
                    <CardBody>
                        <i className="dripicons-basket float-right text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                        <h2 className="m-b-20">1,587</h2>
                        <span className="badge badge-primary"> +11% </span>{' '}
                        <span className="text-muted">From previous period</span>
                    </CardBody>
                </Card>
            </Col>

            <Col sm={4}>
                <Card className="tilebox-one">
                    <CardBody>
                        <i className="dripicons-basket float-right text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                        <h2 className="m-b-20">
                            $<span>46,782</span>
                        </h2>
                        <span className="badge badge-danger"> -29% </span>{' '}
                        <span className="text-muted">From previous period</span>
                    </CardBody>
                </Card>
            </Col>

            <Col sm={4}>
                <Card className="tilebox-one">
                    <CardBody>
                        <i className="dripicons-basket float-right text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                        <h2 className="m-b-20">1,890</h2>
                        <span className="badge badge-success"> +89% </span>{' '}
                        <span className="text-muted">From previous period</span>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Statistics;
