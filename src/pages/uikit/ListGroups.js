// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Badge,
} from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const Basic = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Basic example</h4>

                <p className="text-muted font-14">
                    The most basic list group is an unordered list with list items and the proper classes. Build upon it
                    with the options that follow, or with your own CSS as needed.
                </p>

                <ListGroup>
                    <ListGroupItem>
                        <i className="uil-google-drive-alt mr-1"></i> Google Drive
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-facebook-messenger mr-1"></i> Facebook Messenger
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-apple mr-1"></i> Apple Technology Company
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-intercom mr-1"></i> Intercom Support System
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-paypal mr-1"></i> Paypal Payment Gateway
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const ActiveItems = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Active items</h4>

                <p className="text-muted font-14">
                    Add <code>.active</code> to a <code>ListGroupItem</code> to indicate the current active selection.
                </p>

                <ListGroup>
                    <ListGroupItem className="active">
                        <i className="uil-google-drive-alt mr-1"></i> Google Drive
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-facebook-messenger mr-1"></i> Facebook Messenger
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-apple mr-1"></i> Apple Technology Company
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-intercom mr-1"></i> Intercom Support System
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-paypal mr-1"></i> Paypal Payment Gateway
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const DisabledItems = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Disabled items</h4>

                <p className="text-muted font-14">
                    Add <code>.disabled</code> to a <code>ListGroupItem</code> to make it <em>appear</em> disabled.
                </p>

                <ListGroup>
                    <ListGroupItem className="disabled">
                        <i className="uil-google-drive-alt mr-1"></i> Google Drive
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-facebook-messenger mr-1"></i> Facebook Messenger
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-apple mr-1"></i> Apple Technology Company
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-intercom mr-1"></i> Intercom Support System
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-paypal mr-1"></i> Paypal Payment Gateway
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const LinksButtons = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Links and Buttons</h4>

                <p className="text-muted font-14">
                    Use <code>tag</code> attribute along with <code>action</code> to create <em>actionable</em> list
                    group items with hover, disabled, and active states.
                </p>

                <ListGroup>
                    <ListGroupItem tag="a" href="#" action className="active">
                        <i className="uil-google-drive-alt mr-1"></i> Google Drive
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>
                        <i className="uil-facebook-messenger mr-1"></i> Facebook Messenger
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <i className="uil-apple mr-1"></i> Apple Technology Company
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <i className="uil-intercom mr-1"></i> Intercom Support System
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <i className="uil-paypal mr-1"></i> Paypal Payment Gateway
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const Flush = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Flush</h4>

                <p className="text-muted font-14">
                    Add <code>flush</code> attribute to remove some borders and rounded corners to render list group
                    items edge-to-edge in a parent container (e.g., cards).
                </p>

                <ListGroup flush>
                    <ListGroupItem>
                        <i className="uil-google-drive-alt mr-1"></i> Google Drive
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-facebook-messenger mr-1"></i> Facebook Messenger
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-apple mr-1"></i> Apple Technology Company
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-intercom mr-1"></i> Intercom Support System
                    </ListGroupItem>
                    <ListGroupItem>
                        <i className="uil-paypal mr-1"></i> Paypal Payment Gateway
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const Horizontal = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Horizontal</h4>

                <p className="text-muted font-14">
                    Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to
                    horizontal across all breakpoints.
                </p>

                <ListGroup className="list-group-horizontal mb-3">
                    <ListGroupItem>Google Drive</ListGroupItem>
                    <ListGroupItem>Facebook Messenger</ListGroupItem>
                    <ListGroupItem>Apple Technology Company</ListGroupItem>
                </ListGroup>

                <ListGroup className="list-group-horizontal-sm">
                    <ListGroupItem>Google Drive</ListGroupItem>
                    <ListGroupItem>Facebook Messenger</ListGroupItem>
                    <ListGroupItem>Apple Technology Company</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const Contextual = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Contextual classes</h4>

                <p className="text-muted font-14">
                    Use contextual classes to style list items with a stateful background and color.
                </p>

                <ListGroup>
                    <ListGroupItem color="link">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem color="primary">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem color="secondary">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem color="success">Cras justo odio</ListGroupItem>
                    <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
                    <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem color="dark">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem color="light">Porta ac consectetur ac</ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const ContextualLinks = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Contextual classes with Link</h4>

                <p className="text-muted font-14">
                    Use contextual classes to style list items with a stateful background and color.
                </p>

                <ListGroup>
                    <ListGroupItem color="link" tag="a" href="#" action>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem color="primary" tag="a" href="#" action>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem color="secondary" tag="a" href="#" action>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem color="success" tag="a" href="#" action>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem color="info" tag="a" href="#" action>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem color="warning" tag="a" href="#" action>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem color="danger" tag="a" href="#" action>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem color="dark" tag="a" href="#" action>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem color="light" tag="a" href="#" action>
                        Porta ac consectetur ac
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const CustomContent = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Custom content</h4>

                <p className="text-muted font-14">
                    Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox
                    utilities.
                </p>

                <ListGroup>
                    <ListGroupItem active>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const Badges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">With badges</h4>

                <p className="text-muted font-14">
                    Add badges to any list group item to show unread counts, activity, and more with the help of some
                    utilities.
                </p>

                <ListGroup>
                    <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Cras justo odio{' '}
                        <Badge color="primary" pill>
                            14
                        </Badge>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in{' '}
                        <Badge color="success" pill>
                            2
                        </Badge>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Morbi leo risus{' '}
                        <Badge color="danger" pill>
                            99+
                        </Badge>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const ListGroups = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/listgroups' },
                    { label: 'Base UI', path: '/ui/listgroups' },
                    { label: 'ListGroups', path: '/ui/listgroups', active: true },
                ]}
                title={'ListGroups'}
            />

            <Row>
                <Col xl={4}>
                    <Basic />
                </Col>

                <Col xl={4}>
                    <ActiveItems />
                </Col>

                <Col xl={4}>
                    <DisabledItems />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <LinksButtons />
                </Col>
                <Col xl={4}>
                    <Flush />
                </Col>
                <Col xl={4}>
                    <Horizontal />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <Contextual />
                </Col>
                <Col xl={4}>
                    <ContextualLinks />
                </Col>
                <Col xl={4}>
                    <CustomContent />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <Badges />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ListGroups;
