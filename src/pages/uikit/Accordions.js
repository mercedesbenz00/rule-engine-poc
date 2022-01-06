// @flow
import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, NavLink, UncontrolledCollapse, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';

const SimpleAccordions = () => {
    return (
        <div id="accordion" className="mb-4">
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="groups1" href="#">
                            Collapsible Group Item #1{' '}
                            <span className="float-right">
                                <i className="mdi mdi-chevron-right font-18 accordion-arrow"></i>
                            </span>
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#groups1">
                    <CardBody>This is first collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>

            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="groups2" href="#">
                            Collapsible Group Item #2{' '}
                            <span className="float-right">
                                <i className="mdi mdi-chevron-right font-18 accordion-arrow"></i>
                            </span>
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#groups2">
                    <CardBody>This is second collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>

            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="groups3" href="#">
                            Collapsible Group Item #3{' '}
                            <span className="float-right">
                                <i className="mdi mdi-chevron-right font-18 accordion-arrow"></i>
                            </span>
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#groups3">
                    <CardBody>This is third collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
        </div>
    );
};

const CustomAccordions = () => {
    return (
        <div id="accordion" className="custom-accordion mb-4">
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group1" href="#">
                            Collapsible Group Item #1{' '}
                            <span className="float-right">
                                <i className="mdi mdi-chevron-right font-18 accordion-arrow"></i>
                            </span>
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group1">
                    <CardBody>This is first collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>

            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group2" href="#">
                            Collapsible Group Item #2{' '}
                            <span className="float-right">
                                <i className="mdi mdi-chevron-right font-18 accordion-arrow"></i>
                            </span>
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group2">
                    <CardBody>This is second collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>

            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group3" href="#">
                            Collapsible Group Item #3{' '}
                            <span className="float-right">
                                <i className="mdi mdi-chevron-right font-18 accordion-arrow"></i>
                            </span>
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group3">
                    <CardBody>This is third collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
        </div>
    );
};

const Accordions = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/accordions' },
                    { label: 'Base UI', path: '/ui/accordions' },
                    { label: 'Accordions', path: '/ui/accordions', active: true },
                ]}
                title={'Accordions'}
            />

            <Row>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Simple Accordions</h4>
                            <p className="text-muted font-14 mb-3">
                                Use <code>Collapse</code> component to create accordions. The details documentation is
                                available <a href="https://reactstrap.github.io/components/collapse/">here</a>.
                            </p>

                            <SimpleAccordions />
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Custom Accordions</h4>
                            <p className="text-muted font-14 mb-3">
                                You can have custom look and feel for accorion as well. Just use class{' '}
                                <code>.custom-accordion</code> along with
                                <code>.accordion</code> as a wrapper.
                            </p>

                            <CustomAccordions />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title">Collapse</h4>
                            <p className="text-muted font-14 mb-3">
                                Collapse provides the way to toggle the visibility of any content or element.
                            </p>
                            <p>
                                <Link to="#" className="btn btn-primary" onClick={toggle}>
                                    Link with href
                                </Link>

                                <Button color="primary" className="ml-1" type="button" onClick={toggle}>
                                    Button with data-target
                                </Button>
                            </p>
                            <Collapse isOpen={isOpen}>
                                <div className="card card-body mb-0">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                    cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Accordions;
