// @flow
import React from 'react';
import { Row, Col, Card, CardBody, UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const Basic = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Simple Popover</h4>
                <p className="text-muted font-14">
                    Popover is a component which displays a box with a content after a click on an element - similar to
                    the tooltip but can contain more content.
                </p>

                <Button id="UncontrolledPopover" type="button" color="danger">
                    Launch Popover
                </Button>
                <UncontrolledPopover placement="right" target="UncontrolledPopover">
                    <PopoverHeader>Title goes here</PopoverHeader>
                    <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
            </CardBody>
        </Card>
    );
};

const Direction = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Four Directions</h4>
                <p className="text-muted font-14">Four options are available: top, right, bottom, and left aligned.</p>

                {[
                    {
                        placement: 'top',
                        text: 'Top',
                    },
                    {
                        placement: 'bottom',
                        text: 'Bottom',
                    },
                    {
                        placement: 'left',
                        text: 'Left',
                    },
                    {
                        placement: 'right',
                        text: 'Right',
                    },
                ].map((popover, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Button id={`popover-${popover.placement}`} type="button" color="primary" className="mr-1">
                                {popover.text}
                            </Button>
                            <UncontrolledPopover placement={popover.placement} target={`popover-${popover.placement}`}>
                                <PopoverHeader>{popover.text}</PopoverHeader>
                                <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                            </UncontrolledPopover>
                        </React.Fragment>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const DimissibleOnClick = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Dismissible popover</h4>
                <p className="text-muted font-14">
                    Use the <code>trigger</code> attribute with value <code>legacy</code> to dismiss popovers on the
                    user's next click of a different element than the toggle element.
                </p>

                <Button id="UncontrolledPopover2" type="button" color="primary">
                    Dismiss on click
                </Button>
                <UncontrolledPopover placement="right" target="UncontrolledPopover2" trigger="legacy">
                    <PopoverHeader>Title goes here</PopoverHeader>
                    <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
            </CardBody>
        </Card>
    );
};

const HoverPopover = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Hover</h4>
                <p className="text-muted font-14">
                    Use the <code>trigger</code> attribute with value <code>hover</code> to show popover on hovering the
                    element.
                </p>

                <Button id="UncontrolledPopover3" type="button" color="primary">
                    Show on hover
                </Button>
                <UncontrolledPopover placement="right" target="UncontrolledPopover3" trigger="hover">
                    <PopoverHeader>Title goes here</PopoverHeader>
                    <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                </UncontrolledPopover>
            </CardBody>
        </Card>
    );
};

const Popovers = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/popovers' },
                    { label: 'Base UI', path: '/ui/popovers' },
                    { label: 'Popovers', path: '/ui/popovers', active: true },
                ]}
                title={'Popovers'}
            />

            <Row>
                <Col xl={6}>
                    <Basic />
                </Col>
                <Col xl={6}>
                    <Direction />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <DimissibleOnClick />
                </Col>
                <Col xl={6}>
                    <HoverPopover />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Popovers;
