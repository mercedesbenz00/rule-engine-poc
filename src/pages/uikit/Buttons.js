// @flow
import React from 'react';
import { Row, Col, Card, CardBody, CardText, Button, ButtonGroup } from 'reactstrap';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';

const buttons = [
    {
        name: 'Primary',
        color: 'primary',
    },
    {
        name: 'Secondary',
        color: 'secondary',
    },
    {
        name: 'Success',
        color: 'success',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Dark',
        color: 'dark',
    },
    {
        name: 'Light',
        color: 'light',
    },
    {
        name: 'Link',
        color: 'link',
    },
];

const DefaultButtons = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Default Buttons</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element
                </CardText>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} color={button.color}>
                                {button.name}
                            </Button>
                        );
                    })}
                </div>

                <h4 className="header-title mt-4 pt-2">Rounded Buttons</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with color <code>btn-rounded</code>
                </CardText>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} color={button.color} className="btn-rounded">
                                {button.name}
                            </Button>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    );
};

const OutlineButtons = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Bordered (Outline) Buttons</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with attribute <code>outline</code>
                </CardText>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button outline key={index} color={button.color}>
                                {button.name}
                            </Button>
                        );
                    })}
                </div>

                <h4 className="header-title mt-4 pt-2">Bordered (Outline) &amp; Rounded Buttons</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with color <code>btn-rounded</code> and attribute{' '}
                    <code>outline</code>
                </CardText>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button outline key={index} color={button.color} className="btn-rounded">
                                {button.name}
                            </Button>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    );
};

const ButtonVariations = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Button-Sizes</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with attribute <code>size</code>
                </CardText>

                <div className="button-list">
                    <Button size="lg" color="primary">
                        Large
                    </Button>
                    <Button color="info">Normal</Button>
                    <Button size="sm" color="success">
                        Small
                    </Button>
                </div>

                <h4 className="header-title mt-4 pt-2">Button-Disabled</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with attribute <code>disabled</code>
                </CardText>

                <div className="button-list">
                    <Button disabled color="primary">
                        Primary
                    </Button>
                    <Button disabled color="success">
                        Success
                    </Button>
                    <Button disabled color="danger">
                        Danger
                    </Button>
                    <Button disabled color="warning">
                        Warning
                    </Button>
                </div>

                <h4 className="header-title mt-4 pt-2">Block Level Buttons</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with attribute <code>block</code>
                </CardText>

                <div className="button-list">
                    <Button block color="primary">
                        Primary
                    </Button>
                    <Button block color="success">
                        Success
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

const IconButtons = () => {
    const icons = [
        'mdi-heart-outline',
        'mdi-window-close',
        'mdi-music',
        'mdi-star',
        'mdi-heart',
        'mdi-rocket',
        'mdi-heart-outline',
        'mdi-star-outline',
        'mdi-heart',
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Icon Button</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;Button&gt;</code> element with color <code>.btn-icon</code>
                </CardText>

                <div className="button-list">
                    {buttons.map((button, index) => {
                        return (
                            <Button key={index} color={button.color} className="btn-icon">
                                <i className={classNames('mdi', icons[index], 'ml-1', 'mr-1')}></i>
                            </Button>
                        );
                    })}

                    <br />
                    <Button type="button" color="success">
                        <i className="uil-money-withdrawal"></i> Money
                    </Button>
                    <Button type="button" color="primary">
                        <i className="uil-paypal"></i> PayPal
                    </Button>
                    <Button type="button" color="danger">
                        <i className="uil-cog"></i> Settings
                    </Button>

                    <br />
                    <Button type="button" color="success" outline>
                        <i className="uil-money-withdrawal"></i> Money
                    </Button>
                    <Button type="button" color="primary" outline>
                        <i className="uil-paypal"></i> PayPal
                    </Button>
                    <Button type="button" color="danger" outline>
                        <i className="uil-cog"></i> Settings
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

const ButtonGroups = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Button Group</h4>
                <CardText className="text-muted font-14">
                    Use the <code>&lt;ButtonGroup&gt;</code> with <code>&lt;Button&gt;</code> elements
                </CardText>

                <Row>
                    <Col md={6}>
                        <ButtonGroup>
                            <Button color="light">Left</Button>
                            <Button color="light">Middle</Button>
                            <Button color="light">Right</Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={6}>
                        <ButtonGroup vertical>
                            <Button color="light">L</Button>
                            <Button color="light">M</Button>
                            <Button color="light">R</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

const Buttons = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/buttons' },
                    { label: 'Base UI', path: '/ui/buttons' },
                    { label: 'Buttons', path: '/ui/buttons', active: true },
                ]}
                title={'Buttons'}
            />

            <Row>
                <Col xl={6}>
                    <DefaultButtons />
                </Col>

                <Col xl={6}>
                    <OutlineButtons />
                </Col>

                <Col xl={6}>
                    <ButtonVariations />
                </Col>

                <Col xl={6}>
                    <IconButtons />

                    <ButtonGroups />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Buttons;
