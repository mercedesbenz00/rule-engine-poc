// flow
import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';

import { countries } from './Data';

// Billing
const Billing = props => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h4 className="mt-2">Billing information</h4>
                    <p className="text-muted mb-4">Fill the form below in order to send you the order's invoice.</p>

                    <AvForm>
                        <Row>
                            <Col md={6}>
                                <AvField
                                    name="firstname"
                                    label="First Name"
                                    type="text"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <AvField
                                    name="lastname"
                                    label="Last Name"
                                    type="text"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <AvField
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <MaskedInput
                                        mask={[
                                            '(',
                                            /[1-9]/,
                                            /\d/,
                                            /\d/,
                                            ')',
                                            ' ',
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            '-',
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                        ]}
                                        placeholder="(xxx) xxxx-xxxx"
                                        className="form-control"
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <AvField name="address" label="Address" type="text" placeholder="Enter full address" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <AvField
                                    name="city"
                                    label="Town / City"
                                    type="text"
                                    placeholder="Enter your town / city"
                                />
                            </Col>
                            <Col md={4}>
                                <AvField name="state" label="State" type="text" placeholder="Enter your state" />
                            </Col>
                            <Col md={4}>
                                <AvField
                                    name="zip"
                                    label="Zip / Postal Code"
                                    type="text"
                                    placeholder="Enter your zip"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <div className="form-group">
                                    <label>Country</label>

                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        options={countries}></Select>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <AvField
                                    name="order-notes"
                                    label="Order Notes"
                                    type="textarea"
                                    placeholder="Write some note.."
                                    rows="3"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <Link
                                    to="/"
                                    className="btn text-muted d-none d-sm-inline-block btn-link font-weight-semibold">
                                    <i className="mdi mdi-arrow-left"></i> Back to Shopping Cart{' '}
                                </Link>
                            </Col>
                            <Col sm={6} className="text-sm-right">
                                <Button color="primary" type="submit">
                                    <i className="mdi mdi-truck-fast mr-1"></i> Proceed to Shipping
                                </Button>
                            </Col>
                        </Row>
                    </AvForm>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Billing;
