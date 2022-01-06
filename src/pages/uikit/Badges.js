// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Badge } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';

const colors = [
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
];

const DefaultBadges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Default</h4>
                <p className="text-muted font-14 mb-3">
                    A simple labeling component. Badges scale to match the size of the immediate parent element by using
                    relative font sizing and <code>em</code> units.
                </p>

                <h1>
                    h1.Example heading <span className="badge badge-secondary">New</span>
                </h1>
                <h2>
                    h2.Example heading <span className="badge badge-success-lighten">New</span>
                </h2>
                <h3>
                    h3.Example heading{' '}
                    <button type="button" className="btn btn-sm btn-primary">
                        Notifications <span className="badge badge-light">4</span>
                    </button>
                </h3>
                <h4>
                    h4.Example heading{' '}
                    <a href="/" className="badge badge-info-lighten">
                        Info Link
                    </a>
                </h4>
                <h5>
                    h5.Example heading <span className="badge badge-outline-warning">New</span>
                </h5>
                <h6>
                    h6.Example heading <span className="badge badge-danger">New</span>
                </h6>
            </CardBody>
        </Card>
    );
};

const ContexualBadges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Contexual Badges</h4>
                <p className="text-muted font-14 mb-3">
                    Badges scale to match the size of the immediate parent element by using relative font sizing and{' '}
                    <code>em</code> units.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color} className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h6 className="mt-4">Lighten Badges</h6>
                <p className="text-muted font-14 mb-2">
                    Use the <code>*-lighten</code> as value to color attribute to make badges lighten.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color + '-lighten'} className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h6 className="mt-4">Outline Badges</h6>
                <p className="text-muted font-14 mb-2">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            color=""
                            className={classNames('mr-1', 'badge badge-outline-' + color.color)}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const PillBadges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Pill Badges</h4>
                <p className="text-muted font-14 mb-2">
                    Use the <code>pill</code> modifier attribute to make badges more rounded.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color} pill className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h6 className="mt-4">Lighten Badges with Pill</h6>
                <p className="text-muted font-14 mb-2">
                    Use the <code>*-lighten</code> as value to color attribute to make badges lighten and{' '}
                    <code>pill</code> modifier attribute to make badges more rounded.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge color={color.color + '-lighten'} pill className="mr-1" key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h6 className="mt-4">Outline Badges</h6>
                <p className="text-muted font-14 mb-2">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            color=""
                            pill
                            className={classNames('mr-1', 'badge badge-outline-' + color.color)}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const LinkBadges = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Links Badges</h4>
                <p className="text-muted font-14 mb-2">
                    Using the contextual <code>.badge-*</code> classes on an <code>&lt;Link&gt;</code> element quickly
                    provide <em>actionable</em> badges with hover and focus states.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Link to="#" className={classNames('badge', 'mr-1', 'badge-' + color.color)} key={index}>
                            {color.name}
                        </Link>
                    );
                })}

                <h6 className="mt-4">Lighten Badges</h6>
                <p className="text-muted font-14 mb-2">
                    Use the <code>*-lighten</code> as value to color attribute to make badges lighten.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Link
                            to="#"
                            className={classNames('badge', 'mr-1', 'badge-' + color.color + '-lighten')}
                            key={index}>
                            {color.name}
                        </Link>
                    );
                })}

                <h6 className="mt-4">Outline Badges</h6>
                <p className="text-muted font-14 mb-2">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Link
                            to="#"
                            className={classNames('badge', 'mr-1', 'badge-outline-' + color.color)}
                            key={index}>
                            {color.name}
                        </Link>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const Badges = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/badges' },
                    { label: 'Base UI', path: '/ui/badges' },
                    { label: 'Badges', path: '/ui/badges', active: true },
                ]}
                title={'Badges'}
            />

            <Row>
                <Col lg={6}>
                    <DefaultBadges />
                </Col>

                <Col lg={6}>
                    <ContexualBadges />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <PillBadges />
                </Col>

                <Col lg={6}>
                    <LinkBadges />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Badges;
