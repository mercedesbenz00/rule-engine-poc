// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Toast, ToastBody, ToastHeader } from 'reactstrap';

import logo from '../../assets/images/logo_sm_dark.png';
import PageTitle from '../../components/PageTitle';

const DefaultToasts = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Bootstrap Toasts</h4>
                <p className="text-muted font-14">
                    Push notifications to your visitors with a toast, a lightweight and easily customizable alert
                    message.
                </p>

                <Row>
                    <Col md={6}>
                        <h5 className="mb-2">Basic</h5>
                        <p className="text-muted font-14">
                            Toasts are as flexible as you need and have very little required markup. At a minimum, we
                            require a single element to contain your “toasted” content and strongly encourage a dismiss
                            button.
                        </p>
                        <div className="p-3">
                            <Toast>
                                <ToastHeader>
                                    <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                    <strong className="mr-auto">Hyper</strong>
                                    <small className="ml-5">11 mins ago</small>
                                </ToastHeader>
                                <ToastBody>Hello, world! This is a toast message.</ToastBody>
                            </Toast>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h4 className="header-title">Translucent</h4>
                        <p className="text-muted font-14">
                            Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                            For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the
                            elements under a toast.
                        </p>

                        <div className="p-3 bg-secondary">
                            <Toast>
                                <ToastHeader>
                                    <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                    <strong className="mr-auto">Hyper</strong>
                                    <small className="ml-5">11 mins ago</small>
                                </ToastHeader>
                                <ToastBody>Hello, world! This is a toast message.</ToastBody>
                            </Toast>
                        </div>
                    </Col>
                </Row>

                {/* stacked */}
                <Row>
                    <Col md={6}>
                        <h5 className="mb-2">Stacking</h5>
                        <p className="text-muted font-14">
                            When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.
                        </p>
                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                style={{ position: 'relative', minHeight: '200px' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                                    <Toast>
                                        <ToastHeader>
                                            <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                            <strong className="mr-auto">Hyper</strong>
                                            <small className="ml-5">11 mins ago</small>
                                        </ToastHeader>
                                        <ToastBody>See? Just like this.</ToastBody>
                                    </Toast>

                                    <Toast>
                                        <ToastHeader>
                                            <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                            <strong className="mr-auto">Hyper</strong>
                                            <small className="ml-5">1 mins ago</small>
                                        </ToastHeader>
                                        <ToastBody>Heads up, toasts will stack automatically</ToastBody>
                                    </Toast>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h5 className="mb-2">Placement</h5>
                        <p className="text-muted font-14">
                            Place toasts with custom CSS as you need them. The top right is often used for
                            notifications, as is the top middle. If you’re only ever going to show one toast at a time,
                            put the positioning styles right on the <code>.toast</code>.
                        </p>

                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                className="d-flex justify-content-center align-items-center"
                                style={{ minHeight: '200px' }}>
                                <Toast>
                                    <ToastHeader>
                                        <img src={logo} alt="brand-logo" height="12" className="mr-1" />
                                        <strong className="mr-auto">Hyper</strong>
                                        <small className="ml-5">1 mins ago</small>
                                    </ToastHeader>
                                    <ToastBody>Heads up, toasts will stack automatically</ToastBody>
                                </Toast>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

const Toasts = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/toasts' },
                    { label: 'Base UI', path: '/ui/toasts' },
                    { label: 'Toasts', path: '/ui/toasts', active: true },
                ]}
                title={'Toasts'}
            />

            {/* toast */}
            <Row>
                <Col>
                    <DefaultToasts />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Toasts;
