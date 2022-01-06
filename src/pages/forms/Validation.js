// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Button, InputGroupAddon, Label, FormGroup, CustomInput } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import PageTitle from '../../components/PageTitle';

const FormValidation = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/validation' },
                    { label: 'Form Validation', path: '/forms/validation', active: true },
                ]}
                title={'Form Validation'}
            />

            <Row>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <AvForm>
                                <AvField name="firstname" label="First Name" type="text" required />
                                <AvField name="lastname" label="Last Name" type="text" required />

                                <AvGroup>
                                    <Label for="username">Username</Label>
                                    <div className="input-group">
                                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                        <AvInput placeholder="Username" name="username" required />
                                        <AvFeedback>Please choose a username.</AvFeedback>
                                    </div>
                                </AvGroup>

                                <AvField name="City" label="City" type="text" required />
                                <AvField name="State" label="State" type="text" required />
                                <AvField name="Zip" label="Zip" type="text" required />

                                <FormGroup>
                                    <AvInput
                                        tag={CustomInput}
                                        type="checkbox"
                                        name="customCheckbox"
                                        label="Agree to terms and conditions"
                                        required
                                    />
                                </FormGroup>

                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <h4 className="header-title mb-3">Tooltips</h4>
                            <AvForm>
                                <AvGroup className="position-relative">
                                    <Label for="firstname2">First Name</Label>
                                    <AvInput name="firstname" id="firstname2" required />
                                    <AvFeedback tooltip>This is an error!</AvFeedback>
                                </AvGroup>

                                <AvGroup className="position-relative">
                                    <Label for="lastname2">Last Name</Label>
                                    <AvInput name="lastname" id="lastname2" required />
                                    <AvFeedback tooltip>This is an error!</AvFeedback>
                                </AvGroup>

                                <AvGroup className="position-relative">
                                    <Label for="username2">Username</Label>
                                    <div className="input-group">
                                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                        <AvInput placeholder="Username" name="username2" required />
                                        <AvFeedback tooltip>Please choose a username.</AvFeedback>
                                    </div>
                                </AvGroup>

                                <AvGroup className="position-relative">
                                    <Label for="city2">City</Label>
                                    <AvInput name="city2" id="city2" required />
                                    <AvFeedback tooltip>This is an error!</AvFeedback>
                                </AvGroup>

                                <AvGroup className="position-relative">
                                    <Label for="zip2">Zip</Label>
                                    <AvInput name="zip2" id="zip2" required />
                                    <AvFeedback tooltip>This is an error!</AvFeedback>
                                </AvGroup>

                                <AvGroup className="position-relative">
                                    <Label for="state2">State</Label>
                                    <AvInput name="state2" id="state2" required />
                                    <AvFeedback tooltip>This is an error!</AvFeedback>
                                </AvGroup>

                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormValidation;
