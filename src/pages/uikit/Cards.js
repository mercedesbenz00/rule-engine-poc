// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardGroup,
    CardBody,
    CardHeader,
    CardFooter,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardDeck,
} from 'reactstrap';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';
import Portlet from '../../components/Portlet';

import cardImg from '../../assets/images/small/small-1.jpg';
import cardImg2 from '../../assets/images/small/small-4.jpg';
import cardImg3 from '../../assets/images/small/small-2.jpg';

const CardWithImage = () => {
    return (
        <Card>
            <CardImg src={cardImg} />
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some
                    quick example text to build on the card title and make up.
                </CardText>
                <button className="btn btn-primary">Button</button>
            </CardBody>
        </Card>
    );
};

const CardWithImage2 = () => {
    return (
        <Card>
            <CardImg src={cardImg3} />
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some
                    quick example text to build on the card title and make up.
                </CardText>
                <CardText className="mt-4">
                    <a href="/" className="card-link text-custom">
                        Card link
                    </a>
                    <a href="/" className="card-link text-custom">
                        Another link
                    </a>
                </CardText>
            </CardBody>
        </Card>
    );
};

const CardWithTitleAndImage = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6">Support card subtitle</CardSubtitle>
            </CardBody>
            <CardImg src={cardImg2} className="img-fluid" />
            <CardBody>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <button className="btn btn-primary">Button</button>
            </CardBody>
        </Card>
    );
};

const CardWithSpecialTitle = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">Special title treatment</CardTitle>
                <CardSubtitle className="mt-2">
                    With supporting text below as a natural lead-in to additional content.
                </CardSubtitle>
                <button className="btn btn-primary mt-4">Go somewhere</button>
            </CardBody>
        </Card>
    );
};

const CardWithHeader = () => {
    return (
        <Card>
            <CardHeader tag="h6">Featured</CardHeader>
            <CardBody>
                <CardTitle tag="h5">Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <button className="btn btn-primary mt-1">Go somewhere</button>
            </CardBody>
        </Card>
    );
};

const CardWithHeaderAndQuote = () => {
    return (
        <Card>
            <CardHeader>Quote</CardHeader>
            <CardBody>
                <blockquote className="card-bodyquote mt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </CardBody>
            <CardFooter>
                Someone famous in <cite title="Source Title">Source Title</cite>
            </CardFooter>
        </Card>
    );
};

const ColoredCards = () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'info', 'warning'];

    return (
        <Row>
            {colors.map((color, index) => {
                return (
                    <Col md={4} key={index}>
                        <Card className={classNames('text-white', [`bg-${color}`])}>
                            <CardBody>
                                <CardTitle tag="h5">Special title treatment</CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

const CardsGroup = () => {
    return (
        <CardGroup>
            <CardWithImage2 />
            <CardWithImage2 />
            <CardWithImage2 />
        </CardGroup>
    );
};

const CardsDeck = () => {
    return (
        <div className="card-deck-wrapper">
            <CardDeck>
                <CardWithImage2 />
                <CardWithImage2 />
                <CardWithImage2 />
            </CardDeck>
        </div>
    );
};

const Cards = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/cards' },
                    { label: 'Base UI', path: '/ui/cards' },
                    { label: 'Cards', path: '/ui/cards', active: true },
                ]}
                title={'Cards'}
            />

            <Row>
                <Col md={6} lg={3}>
                    <CardWithImage />
                </Col>

                <Col md={6} lg={3}>
                    <CardWithImage2 />
                </Col>

                <Col md={6} lg={3}>
                    <CardWithTitleAndImage />
                </Col>

                <Col md={6} lg={3}>
                    <CardWithSpecialTitle />
                    <CardWithSpecialTitle />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <CardWithHeader />
                </Col>

                <Col md={6}>
                    <CardWithHeaderAndQuote />
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <h4 className="mb-4">Card Colored</h4>
                </Col>
                <Col sm={12}>
                    <ColoredCards />
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <h4 className="mb-4">Card Group</h4>
                </Col>
                <Col sm={12}>
                    <CardsGroup />
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <h4 className="mb-4 mt-4">Card Decks</h4>
                </Col>
                <Col sm={12}>
                    <CardsDeck />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h4 className="mb-4 mt-4">Custom Card Portlets</h4>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Portlet>
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </Portlet>
                </Col>

                <Col md={6}>
                    <Portlet className="bg-primary text-white">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </Portlet>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Cards;
