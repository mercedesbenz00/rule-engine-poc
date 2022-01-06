// @flow
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';

const Ribbon1 = ({ label, color }) => {
    return (
        <Card className="ribbon-box">
            <CardBody>
                <div className={classNames('ribbon', 'ribbon-' + color, 'float-left')}>
                    <i className="mdi mdi-access-point mr-1"></i> {label}
                </div>
                <h5 className={classNames('text-' + color, 'float-right', 'mt-0')}>{label} Header</h5>
                <div className="ribbon-content">
                    <p className="mb-0">
                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In
                        egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac,
                        commodo dapibus odio.
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};

const Ribbon2 = ({ label, color }) => {
    return (
        <Card className="ribbon-box">
            <CardBody>
                <div className={classNames('ribbon-two', 'ribbon-two-' + color)}>
                    <span>{label}</span>
                </div>
                <p className="mb-0">
                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In
                    egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                    dapibus odio.
                </p>
            </CardBody>
        </Card>
    );
};

const Ribbons = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/ribbons' },
                    { label: 'Base UI', path: '/ui/ribbons' },
                    { label: 'Ribbons', path: '/ui/ribbons', active: true },
                ]}
                title={'Ribbons'}
            />

            <Row>
                <Col xl={4}>
                    <Ribbon1 label="Primary" color="primary" />
                </Col>
                <Col xl={4}>
                    <Ribbon1 label="Success" color="success" />
                </Col>
                <Col xl={4}>
                    <Ribbon1 label="Info" color="info" />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <Ribbon1 label="Danger" color="danger" />
                </Col>
                <Col xl={4}>
                    <Ribbon1 label="Warning" color="warning" />
                </Col>
                <Col xl={4}>
                    <Ribbon1 label="Dark" color="dark" />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <Ribbon2 label="Primary" color="primary" />
                </Col>
                <Col xl={4}>
                    <Ribbon2 label="Success" color="success" />
                </Col>
                <Col xl={4}>
                    <Ribbon2 label="Info" color="info" />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <Ribbon2 label="Danger" color="danger" />
                </Col>
                <Col xl={4}>
                    <Ribbon2 label="Warning" color="warning" />
                </Col>
                <Col xl={4}>
                    <Ribbon2 label="Dark" color="dark" />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Ribbons;
