// @flow
import React from 'react';

import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, CustomInput, Progress } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { Wizard, Steps, Step } from 'react-albus';

import PageTitle from '../../components/PageTitle';

const BasicWizard = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3"> Basic Wizard</h4>

                <Wizard>
                    <Steps>
                        <Step
                            id="login"
                            render={({ next }) => (
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleEmail" md={3}>
                                            Email
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="exampleEmail"
                                                placeholder="enter email"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="examplePassword" md={3}>
                                            Password
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="password"
                                                name="password"
                                                id="examplePassword"
                                                placeholder="password placeholder"
                                                defaultValue="12345"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="examplerePassword" md={3}>
                                            Re-Password
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="password"
                                                name="repassword"
                                                id="examplerePassword"
                                                placeholder="password"
                                                defaultValue="12345"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <ul className="list-inline wizard mb-0">
                                        <li className="next list-inline-item float-right">
                                            <Button onClick={next} color="success">
                                                Next
                                            </Button>
                                        </li>
                                    </ul>
                                </Form>
                            )}
                        />
                        <Step
                            id="gandalf"
                            render={({ next, previous }) => (
                                <Form>
                                    <FormGroup row>
                                        <Label for="fname" md={3}>
                                            First Name
                                        </Label>
                                        <Col md={9}>
                                            <Input type="text" name="fname" id="fname" placeholder="Enter first name" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="lname" md={3}>
                                            Last Name
                                        </Label>
                                        <Col md={9}>
                                            <Input type="text" name="lname" id="lname" placeholder="enter last name" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="phone" md={3}>
                                            Phone Number
                                        </Label>
                                        <Col md={9}>
                                            <Input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="enter phone number"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <ul className="list-inline wizard mb-0">
                                        <li className="previous list-inline-item">
                                            <Button onClick={previous} color="info">
                                                Previous
                                            </Button>
                                        </li>
                                        <li className="next list-inline-item float-right">
                                            <Button onClick={next} color="success">
                                                Next
                                            </Button>
                                        </li>
                                    </ul>
                                </Form>
                            )}
                        />
                        <Step
                            id="dumbledore"
                            render={({ previous }) => (
                                <Row>
                                    <Col sm={12}>
                                        <div className="text-center">
                                            <h2 className="mt-0">
                                                <i className="mdi mdi-check-all"></i>
                                            </h2>
                                            <h3 className="mt-0">Thank you !</h3>

                                            <p className="w-75 mb-2 mx-auto">
                                                Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                                                aliquet.
                                            </p>

                                            <div className="mb-3">
                                                <CustomInput
                                                    type="checkbox"
                                                    id="exampleCustomCheckbox"
                                                    label="I agree with the Terms and Conditions"
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={12}>
                                        <ul className="list-inline wizard mb-0">
                                            <li className="previous list-inline-item">
                                                <Button onClick={previous} color="info">
                                                    Previous
                                                </Button>
                                            </li>

                                            <li className="next list-inline-item float-right">
                                                <Button color="success">Submit</Button>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            )}
                        />
                    </Steps>
                </Wizard>
            </CardBody>
        </Card>
    );
};

const WizardWithProgressbar = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Wizard with Progress bar</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
                            <Progress
                                animated
                                striped
                                color="success"
                                value={((steps.indexOf(step) + 1) / steps.length) * 100}
                                className="mb-3 progress-sm"
                            />

                            <Steps>
                                <Step
                                    id="login"
                                    render={({ next }) => (
                                        <Form>
                                            <FormGroup row>
                                                <Label for="exampleEmail1" md={3}>
                                                    Email
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        id="exampleEmail1"
                                                        placeholder="enter email"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="examplePassword1" md={3}>
                                                    Password
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="password"
                                                        name="password"
                                                        id="examplePassword1"
                                                        placeholder="password placeholder"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="examplerePassword1" md={3}>
                                                    Re-Password
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="password"
                                                        name="repassword"
                                                        id="examplerePassword1"
                                                        placeholder="password"
                                                        defaultValue="12345"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="next list-inline-item float-right">
                                                    <Button onClick={next} color="success">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                                <Step
                                    id="gandalf"
                                    render={({ next, previous }) => (
                                        <Form>
                                            <FormGroup row>
                                                <Label for="fname1" md={3}>
                                                    First Name
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="text"
                                                        name="fname"
                                                        id="fname1"
                                                        placeholder="Enter first name"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="lname1" md={3}>
                                                    Last Name
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="text"
                                                        name="lname"
                                                        id="lname1"
                                                        placeholder="enter last name"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="phone1" md={3}>
                                                    Phone Number
                                                </Label>
                                                <Col md={9}>
                                                    <Input
                                                        type="text"
                                                        name="phone"
                                                        id="phone1"
                                                        placeholder="enter phone number"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item">
                                                    <Button onClick={previous} color="info">
                                                        Previous
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-right">
                                                    <Button onClick={next} color="success">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Form>
                                    )}
                                />
                                <Step
                                    id="dumbledore"
                                    render={({ previous }) => (
                                        <Row>
                                            <Col sm={12}>
                                                <div className="text-center">
                                                    <h2 className="mt-0">
                                                        <i className="mdi mdi-check-all"></i>
                                                    </h2>
                                                    <h3 className="mt-0">Thank you !</h3>

                                                    <p className="w-75 mb-2 mx-auto">
                                                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                        dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                        mattis dictum aliquet.
                                                    </p>

                                                    <div className="mb-3">
                                                        <CustomInput
                                                            type="checkbox"
                                                            id="exampleCustomCheckbox1"
                                                            label="I agree with the Terms and Conditions"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col sm={12}>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} color="info">
                                                            Previous
                                                        </Button>
                                                    </li>

                                                    <li className="next list-inline-item float-right">
                                                        <Button color="success">Submit</Button>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Steps>
                        </React.Fragment>
                    )}
                />
            </CardBody>
        </Card>
    );
};

const WizardWithFormValidation = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Wizard with Validation</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
                            <Progress
                                animated
                                striped
                                color="success"
                                value={((steps.indexOf(step) + 1) / steps.length) * 100}
                                className="mb-3 progress-sm"
                            />

                            <Steps>
                                <Step
                                    id="login"
                                    render={({ next }) => (
                                        <AvForm
                                            onValidSubmit={(event, values) => {
                                                next();
                                            }}>
                                            <AvField name="username" label="Username/Email" type="text" required />
                                            <AvField name="password" label="Password" type="password" required />

                                            <FormGroup>
                                                <AvInput
                                                    tag={CustomInput}
                                                    type="checkbox"
                                                    name="customCheckbox"
                                                    label="Remember me"
                                                />
                                            </FormGroup>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="next list-inline-item float-right">
                                                    <Button color="success" type="submit">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </AvForm>
                                    )}
                                />
                                <Step
                                    id="gandalf"
                                    render={({ next, previous }) => (
                                        <AvForm
                                            onValidSubmit={(event, values) => {
                                                next();
                                            }}>
                                            <AvField name="firstname" label="First Name" type="text" required />
                                            <AvField name="lastname" label="Last Name" type="text" required />

                                            <FormGroup>
                                                <AvInput
                                                    tag={CustomInput}
                                                    type="checkbox"
                                                    name="customCheckbox"
                                                    label="Agree to terms and conditions"
                                                    required
                                                />
                                            </FormGroup>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item">
                                                    <Button onClick={previous} color="info">
                                                        Previous
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-right">
                                                    <Button color="success" type="submit">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </AvForm>
                                    )}
                                />
                                <Step
                                    id="dumbledore"
                                    render={({ previous }) => (
                                        <Row>
                                            <Col sm={12}>
                                                <div className="text-center">
                                                    <h2 className="mt-0">
                                                        <i className="mdi mdi-check-all"></i>
                                                    </h2>
                                                    <h3 className="mt-0">Thank you !</h3>

                                                    <p className="w-75 mb-2 mx-auto">
                                                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                        dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                        mattis dictum aliquet.
                                                    </p>

                                                    <div className="mb-3">
                                                        <CustomInput
                                                            type="checkbox"
                                                            id="exampleCustomCheckbox2"
                                                            label="I agree with the Terms and Conditions"
                                                        />
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col sm={12}>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} color="info">
                                                            Previous
                                                        </Button>
                                                    </li>

                                                    <li className="next list-inline-item float-right">
                                                        <Button color="success">Submit</Button>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Steps>
                        </React.Fragment>
                    )}
                />
            </CardBody>
        </Card>
    );
};

const FormWizard = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/wizard' },
                    { label: 'Form Wizard', path: '/forms/wizard', active: true },
                ]}
                title={'Form Wizard'}
            />

            <Row>
                <Col xl={6}>
                    <BasicWizard />
                </Col>

                <Col xl={6}>
                    <WizardWithProgressbar />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <WizardWithFormValidation />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormWizard;
