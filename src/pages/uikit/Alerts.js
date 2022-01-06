// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Alert, UncontrolledAlert } from 'reactstrap';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const DefaultAlerts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Default Alert</h4>
                <p className="text-muted font-14">
                    Alerts are available for any length of text, as well as an optional dismiss button. Just use{' '}
                    <code>Alert</code>
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert color={color} key={index}>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const DismissibleAlerts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Dismissing Alert</h4>
                <p className="text-muted font-14">
                    Alerts are available for any length of text, as well as an optional dismiss button. Just use{' '}
                    <code>UncontrolledAlert</code>
                </p>

                {colors.map((color, index) => {
                    return (
                        <UncontrolledAlert color={color} key={index}>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </UncontrolledAlert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const AlertsWithIcon = () => {
    const icons = [
        'dripicons-checkmark',
        'dripicons-checkmark',
        'dripicons-checkmark',
        'dripicons-wrong',
        'dripicons-warning',
        'dripicons-information',
        'dripicons-checkmark',
        'dripicons-checkmark',
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Alerts with Icon</h4>
                <p className="text-muted font-14">Display alert with icon on left.</p>

                {colors.map((color, index) => {
                    return (
                        <UncontrolledAlert color={color} key={index}>
                            <i className={classNames(icons[index], 'mr-2')}></i> <strong>{color} - </strong> A simple{' '}
                            {color} alert—check it out!
                        </UncontrolledAlert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const AlertsWithRichContent = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Additional content</h4>
                <p className="text-muted font-14">
                    Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
                </p>

                <Alert color="success">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run
                        a bit longer so that you can see how spacing within an alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </Alert>
            </CardBody>
        </Card>
    );
};

const CustomAlerts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Custom Alert</h4>
                <p className="text-muted font-14">
                    Display alert with transparent background and with contextual text color. Use classes{' '}
                    <code>.bg-white</code>, and <code>.text-*</code>. E.g. <code>bg-white text-primary</code>.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert color={color} className={classNames('bg-white', 'text-' + color)} key={index}>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const AlertsWithLink = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Link Color</h4>
                <p className="text-muted font-14">
                    Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any
                    alert.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert color={color} key={index}>
                            <strong>{color} - </strong> A simple {color} alert with{' '}
                            <a href="/" className="alert-link">
                                an example link
                            </a>
                            !
                        </Alert>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const Alerts = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/alerts' },
                    { label: 'Base UI', path: '/ui/alerts' },
                    { label: 'Alerts', path: '/ui/alerts', active: true },
                ]}
                title={'Alerts'}
            />

            <Row>
                <Col lg={6}>
                    <DefaultAlerts />
                </Col>

                <Col lg={6}>
                    <DismissibleAlerts />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <CustomAlerts />
                </Col>
                <Col lg={6}>
                    <AlertsWithLink />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AlertsWithIcon />
                </Col>
                <Col>
                    <AlertsWithRichContent />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Alerts;
