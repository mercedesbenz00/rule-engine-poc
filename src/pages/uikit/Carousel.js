// @flow
import React from 'react';
import { Row, Col, Card, CardBody, UncontrolledCarousel } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const items = [
    {
        src: 'https://source.unsplash.com/800x400/?sea',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
        key: '1',
    },
    {
        src: 'https://source.unsplash.com/800x400/?nature',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2',
    },
    {
        src: 'https://source.unsplash.com/800x400/?island',
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3',
    },
];

const DefaultSlides = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Slides only</h4>
                <p className="text-muted font-14">
                    Here's a carousel with slides only. Note the presence of the <code>indicators</code> and{' '}
                    <code>controls</code> on carousel in order to hide them.
                </p>
                <UncontrolledCarousel items={items} indicators={false} controls={false} />
            </CardBody>
        </Card>
    );
};

const SlidesWithControls = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">With controls</h4>
                <p className="text-muted font-14">Adding in the previous and next controls:</p>
                <UncontrolledCarousel items={items} indicators={false} />
            </CardBody>
        </Card>
    );
};

const SlidesWithIndicators = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">With indicators</h4>
                <p className="text-muted font-14">
                    You can also add the indicators to the carousel, alongside the controls, too.
                </p>
                <UncontrolledCarousel items={items} />
            </CardBody>
        </Card>
    );
};

const Carousel = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/carousel' },
                    { label: 'Base UI', path: '/ui/carousel' },
                    { label: 'Carousel', path: '/ui/carousel', active: true },
                ]}
                title={'Carousel'}
            />

            <Row>
                <Col lg={6}>
                    <DefaultSlides />
                </Col>

                <Col lg={6}>
                    <SlidesWithControls />
                </Col>
            </Row>

            <Row>
                <Col>
                    <SlidesWithIndicators />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Carousel;
