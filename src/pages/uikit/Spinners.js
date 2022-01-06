// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/Spinner';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const BorderedSpinners = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mt-0 header-title">Border spinner</h4>
                <p className="text-muted mb-4">Use the border spinners for a lightweight loading indicator.</p>

                {colors.map((color, index) => {
                    return <Spinner key={index} className="m-2" color={color} />;
                })}
            </CardBody>
        </Card>
    );
};

const GrowingSpinners = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mt-0 header-title">Growing spinner</h4>
                <p className="text-muted mb-4">
                    You can go for growing spinner as well. While it doesn’t technically spin, it does repeatedly grow!
                </p>

                {colors.map((color, index) => {
                    return <Spinner key={index} className="m-2" type="grow" color={color} />;
                })}
            </CardBody>
        </Card>
    );
};

const SpinnersSizes = () => {
    const sizes = ['lg', 'md', 'sm'];

    return (
        <Card>
            <CardBody>
                <h4 className="mt-0 header-title">Size</h4>
                <p className="text-muted mb-4">
                    Add <code>size</code> attribute to make spinner with sizes including lg, md or sm.
                </p>
                <div className="row">
                    {sizes.map((size, index) => {
                        return (
                            <div key={index} className="col-lg-6">
                                <Spinner className="text-primary m-2" size={size} />
                                <Spinner className="text-primary m-2" type="grow" size={size} />
                            </div>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    );
};

const ButtonSpinners = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mt-0 header-title">Buttons spinner</h4>
                <p className="text-muted mb-4">
                    Use spinners within buttons to indicate an action is currently processing or taking place. You may
                    also swap the text out of the spinner element and utilize button text as needed.
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="button-list">
                            <Button color="primary" disabled>
                                <Spinner className="spinner-border-sm" tag="span" color="white" />
                                <span className="sr-only">Loading...</span>
                            </Button>

                            <Button color="primary" disabled>
                                <Spinner className="spinner-border-sm mr-1" tag="span" color="white" />
                                Loading...
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="button-list">
                            <Button color="primary" disabled>
                                <Spinner className="spinner-grow-sm" tag="span" color="white" type="grow" />
                                <span className="sr-only">Loading...</span>
                            </Button>

                            <Button color="primary" disabled>
                                <Spinner className="spinner-grow-sm mr-1" tag="span" color="white" type="grow" />
                                Loading...
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

const Spinners = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/spinners' },
                    { label: 'Base UI', path: '/ui/spinners' },
                    { label: 'Spinners', path: '/ui/spinners', active: true },
                ]}
                title={'Spinners'}
            />

            <Row>
                <Col md={6}>
                    <BorderedSpinners />
                </Col>

                <Col md={6}>
                    <GrowingSpinners />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <h4 className="mt-0 header-title">Alignment</h4>
                            <p className="text-muted mb-4">
                                Use flexbox utilities, float utilities, or text alignment utilities to place spinners
                                exactly where you need them in any situation.
                            </p>
                            <div className="d-flex justify-content-center">
                                <Spinner />
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardBody>
                            <h4 className="mt-0 header-title">Placement</h4>
                            <p className="text-muted mb-4">
                                Use <code>flexbox utilities</code>, <code>float utilities</code>, or{' '}
                                <code>text alignment</code> utilities to place spinners exactly where you need them in
                                any situation.
                            </p>
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <Spinner className="ml-auto" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <SpinnersSizes />
                </Col>

                <Col md={6}>
                    <ButtonSpinners />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Spinners;
