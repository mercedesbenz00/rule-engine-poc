// @flow
import React from 'react';
import { Row, Col, Card, CardBody, UncontrolledTooltip, Button } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const Basic = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Examples</h4>
                <p className="text-muted font-14">Hover over the links below to see tooltips.</p>

                <p className="muted mb-0">
                    Tight pants next level keffiyeh{' '}
                    <a href="/" id="tooltip1">
                        you probably
                    </a>{' '}
                    haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
                    Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel{' '}
                    <a href="/" id="tooltip2">
                        have
                    </a>{' '}
                    a terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu
                    biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan{' '}
                    <a href="/" id="tooltip3">
                        whatever
                    </a>{' '}
                    keytar, scenester farm-to-table banksy Austin twitter handle freegan cred raw denim single-origin
                    coffee viral.
                </p>
                <UncontrolledTooltip placement="top" target="tooltip1">
                    Hello world!
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="right" target="tooltip2">
                    Another tooltip
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="bottom" target="tooltip3">
                    Another one here too
                </UncontrolledTooltip>
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
                ].map((tooltip, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Button id={`tooltip-${tooltip.placement}`} type="button" color="primary" className="mr-1">
                                Tooltip on {tooltip.text}
                            </Button>
                            <UncontrolledTooltip placement={tooltip.placement} target={`tooltip-${tooltip.placement}`}>
                                Tooltip on {tooltip.placement}
                            </UncontrolledTooltip>
                        </React.Fragment>
                    );
                })}
            </CardBody>
        </Card>
    );
};

const HtmlContent = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Html Tags</h4>
                <p className="text-muted font-14">And with custom HTML added:</p>

                <Button id="html-tag" type="button" color="primary" className="mr-1">
                    Tooltip with html tags
                </Button>
                <UncontrolledTooltip placement="bottom" target="html-tag">
                    Tooltip with <a href="/">Link</a>
                </UncontrolledTooltip>
            </CardBody>
        </Card>
    );
};

const Tooltips = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/tooltips' },
                    { label: 'Base UI', path: '/ui/tooltips' },
                    { label: 'Tooltips', path: '/ui/tooltips', active: true },
                ]}
                title={'Tooltips'}
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
                    <HtmlContent />
                </Col>
                <Col xl={6}></Col>
            </Row>
        </React.Fragment>
    );
};

export default Tooltips;
