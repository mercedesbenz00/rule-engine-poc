// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Progress } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const Basic = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Examples</h4>
                <p className="text-muted font-14">
                    A progress bar can be used to show a user how far along he/she is in a process.
                </p>

                <Progress />
                <Progress value="25" className="mt-2" />
                <Progress value={50} className="mt-2" />
                <Progress value={75} className="mt-2" />
                <Progress value="100" className="mt-2" />
            </CardBody>
        </Card>
    );
};

const WithLabels = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Labels</h4>
                <p className="text-muted font-14">
                    Add labels to your progress bars by placing text within the <code>Progress</code> element.
                </p>

                <Progress value={25}>25%</Progress>
            </CardBody>
        </Card>
    );
};

const MutliBars = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Multiple bars</h4>
                <p className="text-muted font-14">
                    Include multiple progress bars in a progress component if you need.
                </p>
                <Progress multi>
                    <Progress bar value="15" />
                    <Progress bar color="success" value="30" />
                    <Progress bar color="info" value="25" />
                </Progress>
            </CardBody>
        </Card>
    );
};

const Colors = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Color Variants</h4>
                <p className="text-muted font-14">
                    Use color attribite to change the appearance of individual progress bars.
                </p>

                <Progress />
                <Progress value="25" className="mt-2" color="success" />
                <Progress value={50} className="mt-2" color="info" />
                <Progress value={75} className="mt-2" color="warning" />
                <Progress value="100" className="mt-2" color="danger" />
            </CardBody>
        </Card>
    );
};

const Striped = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Striped</h4>
                <p className="text-muted font-14">
                    Add <code>striped</code> to any <code>Progress</code> to apply a stripe via CSS gradient over the
                    progress bar’s background color.
                </p>

                <Progress striped />
                <Progress value="25" className="mt-2" color="success" striped />
                <Progress value={50} className="mt-2" color="info" striped />
                <Progress value={75} className="mt-2" color="warning" striped />
                <Progress value="100" className="mt-2" color="danger" striped />
            </CardBody>
        </Card>
    );
};

const Height = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Height</h4>
                <p className="text-muted font-14">
                    We only set a <code>height</code> value on the <code>Progress</code>, so if you change that value
                    the inner <code>.progress-bar</code> will automatically resize accordingly. Use{' '}
                    <code>.progress-sm</code>,<code>.progress-md</code>,<code>.progress-lg</code>,
                    <code>.progress-xl</code> classes.
                </p>

                <Progress color="secondary" value="15" style={{ height: 1 }} />
                <Progress value="25" className="mt-2" color="danger" style={{ height: 3 }} />
                <Progress value={50} className="mt-2 progress-sm" color="info" />
                <Progress value={75} className="mt-2 progress-md" color="warning" />
                <Progress value="100" className="mt-2 progress-lg" color="success" />
                <Progress value="100" className="mt-2 progress-xl" color="primary" />
            </CardBody>
        </Card>
    );
};

const Animated = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Animated stripes</h4>
                <p className="text-muted font-14">
                    The striped gradient can also be animated. Add <code>animated</code> to <code>Progress</code> to
                    animate the stripes right to left via CSS3 animations.
                </p>

                <Progress value={55} color="primary" animated></Progress>
            </CardBody>
        </Card>
    );
};

const MaxValue = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Max Value</h4>
                <p className="text-muted font-14">
                    You can specify the max value to element as well. The progress bar width would get adjusted
                    accordingly.
                </p>

                <Progress value={1} color="primary" max={5}></Progress>
            </CardBody>
        </Card>
    );
};

const ProgressExamples = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/progress' },
                    { label: 'Base UI', path: '/ui/progress' },
                    { label: 'Progress', path: '/ui/progress', active: true },
                ]}
                title={'Progress'}
            />

            <Row>
                <Col xl={6}>
                    <Basic />
                </Col>
                <Col xl={6}>
                    <Colors />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <WithLabels />
                </Col>
                <Col xl={6}>
                    <MutliBars />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Striped />
                </Col>
                <Col xl={6}>
                    <Height />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Animated />
                </Col>
                <Col xl={6}>
                    <MaxValue />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ProgressExamples;
