// flow
import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';

import { countries } from './Data';

// Shipping
const Shipping = props => {
    const updateShippingCost = props.updateShipping || {};

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h4 className="mt-2">Saved Address</h4>
                    <p className="text-muted mb-3">Fill the form below in order to send you the order's invoice.</p>

                    <Row>
                        <Col md={6}>
                            <div className="border p-3 rounded">
                                <address className="mb-0 font-14 address-lg">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            id="customRadio1"
                                            name="customRadio"
                                            className="custom-control-input"
                                            defaultChecked
                                        />
                                        <label
                                            className="custom-control-label font-16 font-weight-bold"
                                            htmlFor="customRadio1">
                                            Home
                                        </label>
                                    </div>
                                    <br />
                                    <span className="font-weight-semibold">Stanley Jones</span> <br />
                                    795 Folsom Ave, Suite 600
                                    <br />
                                    San Francisco, CA 94107
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890 <br />
                                </address>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="border p-3 rounded">
                                <address className="mb-0 font-14 address-lg">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            id="customRadio2"
                                            name="customRadio"
                                            className="custom-control-input"
                                        />
                                        <label
                                            className="custom-control-label font-16 font-weight-bold"
                                            htmlFor="customRadio2">
                                            office
                                        </label>
                                    </div>
                                    <br />
                                    <span className="font-weight-semibold">Stanley Jones</span> <br />
                                    795 Folsom Ave, Suite 600
                                    <br />
                                    San Francisco, CA 94107
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890 <br />
                                </address>
                            </div>
                        </Col>
                    </Row>

                    <h4 className="mt-4">Add New Address</h4>
                    <p className="text-muted mb-4">Fill the form below so we can send you the order's invoice.</p>

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

                        <h4 className="mt-4">Shipping Method</h4>
                        <p className="text-muted mb-3">Fill the form below in order to send you the order's invoice.</p>

                        <Row>
                            <Col md={6}>
                                <div className="border p-3 rounded">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            id="shippingMethodRadio1"
                                            name="shippingOptions"
                                            className="custom-control-input"
                                            defaultChecked
                                            onChange={e => {
                                                updateShippingCost(0);
                                            }}
                                        />
                                        <label
                                            className="custom-control-label font-16 font-weight-bold"
                                            htmlFor="shippingMethodRadio1">
                                            Standard Delivery - FREE
                                        </label>
                                    </div>
                                    <p className="mb-0 pl-3 pt-1">
                                        Estimated 5-7 days shipping (Duties and tax may be due upon delivery)
                                    </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="border p-3 rounded">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            id="shippingMethodRadio2"
                                            name="shippingOptions"
                                            className="custom-control-input"
                                            onChange={e => {
                                                updateShippingCost(25);
                                            }}
                                        />
                                        <label
                                            className="custom-control-label font-16 font-weight-bold"
                                            htmlFor="shippingMethodRadio2">
                                            Fast Delivery - $25
                                        </label>
                                    </div>
                                    <p className="mb-0 pl-3 pt-1">
                                        Estimated 1-2 days shipping (Duties and tax may be due upon delivery)
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col sm={6}>
                                <Link
                                    to="/"
                                    className="btn text-muted d-none d-sm-inline-block btn-link font-weight-semibold">
                                    <i className="mdi mdi-arrow-left"></i> Back to Shopping Cart{' '}
                                </Link>
                            </Col>
                            <Col sm={6} className="text-sm-right">
                                <Button color="primary" type="submit">
                                    <i className="mdi mdi-cash-multiple mr-1"></i> Continue to Payment
                                </Button>
                            </Col>
                        </Row>
                    </AvForm>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Shipping;
