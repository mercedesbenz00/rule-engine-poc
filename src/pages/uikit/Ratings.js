import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Rating from 'react-rating';

import PageTitle from '../../components/PageTitle';

const Ratings = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/ratings' },
                    { label: 'Extended UI', path: '/ui/ratings' },
                    { label: 'Ratings', path: '/ui/ratings', active: true },
                ]}
                title={'Ratings'}
            />

            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Default Rating</h4>
                            <p className="text-muted font-14"></p>

                            <Rating
                                initialRating={2}
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Readonly Rating</h4>
                            <p className="text-muted font-14"></p>

                            <Rating
                                initialRating={2.5}
                                readonly
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Different Icons</h4>

                            <Rating
                                initialRating={2}
                                emptySymbol="mdi mdi-thumb-down font-22 text-muted"
                                fullSymbol="mdi mdi-thumb-up font-22 text-success"
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Size</h4>

                            <Rating
                                initialRating={2.5}
                                emptySymbol="mdi mdi-star-outline font-16 text-muted"
                                fullSymbol="mdi mdi-star font-16 text-warning"
                            />

                            <Rating
                                initialRating={2.5}
                                className="ml-3"
                                emptySymbol="mdi mdi-star-outline font-24 text-muted"
                                fullSymbol="mdi mdi-star font-24 text-warning"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Fractional Rating</h4>

                            <Rating
                                initialRating={2}
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                                fractions={2}
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Readonly Fractional Rating</h4>
                            <p className="text-muted font-14"></p>

                            <Rating
                                initialRating={2.5}
                                readonly
                                emptySymbol="mdi mdi-star-outline font-22 text-muted"
                                fullSymbol="mdi mdi-star font-22 text-warning"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Ratings;
