// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CustomInput,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    InputGroup,
    InputGroupAddon,
    UncontrolledButtonDropdown,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const BasicInputElements = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Input Types</h4>
                <p className="text-muted">
                    Most common form control, text-based input fields. Includes support for all HTML5 types:{' '}
                    <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>,{' '}
                    <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>,{' '}
                    <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                </p>

                <Row>
                    <Col lg={6}>
                        <Form>
                            <FormGroup>
                                <Label for="text">Text</Label>
                                <Input type="text" name="text" id="text" placeholder="with a placeholder" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="password placeholder"
                                    defaultValue="12345"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" rows="5" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="text1">Read only</Label>
                                <Input type="text" name="text" id="text1" placeholder="Readonly value" readOnly />
                            </FormGroup>

                            <FormGroup>
                                <Label for="text2">Disabled</Label>
                                <Input type="text" name="text" id="text2" placeholder="Disabled" disabled />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail1">Static control</Label>
                                <Input plaintext defaultValue="email@example.com" readOnly />
                            </FormGroup>

                            <FormGroup>
                                <Label for="text3">Helping text</Label>
                                <Input type="text" name="text" id="text3" placeholder="Helping text" />
                                <FormText>
                                    A block of help text that breaks onto a new line and may extend beyond one line.
                                </FormText>
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col lg={6}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelectMulti">Select Multiple</Label>
                                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleFile">Default file input</Label>
                                <Input type="file" name="file" id="exampleFile" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleDate">Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleMonth">Month</Label>
                                <Input type="month" name="month" id="exampleMonth" placeholder="date month" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleTime">Time</Label>
                                <Input type="time" name="time" id="exampleTime" placeholder="date Time" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleWeek">Week</Label>
                                <Input type="week" name="week" id="exampleWeek" placeholder="date week" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleNumber">Number</Label>
                                <Input
                                    type="number"
                                    name="number"
                                    id="exampleNumber"
                                    placeholder="number placeholder"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleColor">Color</Label>
                                <Input
                                    type="color"
                                    name="color"
                                    id="exampleColor"
                                    placeholder="color placeholder"
                                    defaultValue="#727cf5"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleRange">Range</Label>
                                <input
                                    className="custom-range"
                                    type="range"
                                    name="range"
                                    id="exampleRange"
                                    placeholder="range placeholder"
                                />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

const SelectInput = () => {
    return (
        <React.Fragment>
            <h4 className="header-title">Select menu</h4>
            <p className="text-muted">
                Custom <code>&lt;select&gt;</code> menus need only a custom class, <code>.custom-select</code> to
                trigger the custom styles.
            </p>

            <FormGroup>
                <Input type="select" name="select" id="exampleSelect2" className="custom-select mt-3">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
        </React.Fragment>
    );
};

const Switches = () => {
    return (
        <React.Fragment>
            <h4 className="header-title mt-4">Switches</h4>
            <p className="text-muted">
                A switch has the markup of a custom checkbox but uses the <code>.custom-switch</code> class to render a
                toggle switch. Switches also support the <code>disabled</code> attribute.
            </p>

            <div>
                <CustomInput
                    type="switch"
                    id="exampleCustomSwitch"
                    name="customSwitch"
                    label="Turn on this custom switch"
                />
                <CustomInput
                    type="switch"
                    id="exampleCustomSwitch4"
                    label="Can't click this label to turn on!"
                    htmlFor="exampleCustomSwitch4_X"
                    disabled
                />
            </div>
        </React.Fragment>
    );
};

const CustomCheckboxes = () => {
    return (
        <FormGroup>
            <Label for="exampleCheckbox">Checkboxes</Label>
            <div>
                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
            </div>
        </FormGroup>
    );
};

const InlineCustomCheckboxes = () => {
    return (
        <FormGroup>
            <Label for="exampleCheckbox">Inline</Label>
            <div>
                <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
                <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
            </div>
        </FormGroup>
    );
};

const CustomRadios = () => {
    return (
        <FormGroup>
            <Label for="exampleCheckbox">Radios</Label>
            <div>
                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
                <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
            </div>
        </FormGroup>
    );
};

const InputSizes = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Input Sizes</h4>
                <p className="text-muted">
                    Set height using <code>bsSize</code> attribute. You can specify value <code>sm</code> to have small
                    input or <code>lg</code> to have large size input element. &nbsp;&nbsp;&nbsp;&nbsp;
                </p>

                <Form>
                    <FormGroup>
                        <Label for="small">Small</Label>
                        <Input type="text" name="small" id="small" placeholder="Small" bsSize="sm" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Normal">Normal</Label>
                        <Input type="text" name="Normal" id="Normal" placeholder="Normal" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Large">Large</Label>
                        <Input type="text" name="Large" id="Large" placeholder="Small" bsSize="lg" />
                    </FormGroup>

                    <FormGroup className="mb-0">
                        <Label for="grid">Grid Sizes</Label>
                        <Row>
                            <Col sm={4}>
                                <Input type="text" name="grid" id="grid" placeholder=".col-sm-4" />
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
};

const InputGroups = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Input Group</h4>
                <p className="text-muted">
                    Easily extend form conrols by adding text, buttons, or button groups on either side of textual
                    inputs, custom selects, and custom file inputs
                </p>

                <Form>
                    <FormGroup>
                        <Label for="Static">Static</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="username" />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <Label for="Dropdown">Dropdown</Label>
                        <InputGroup>
                            <UncontrolledButtonDropdown addonType="append">
                                <DropdownToggle caret color="primary">
                                    Button Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>

                            <Input />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <Label for="Button">Button</Label>
                        <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append">
                                <Button color="dark">Button</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="mb-0">
                        <Label for="cfile">Custom file input</Label>
                        <InputGroup>
                            <div className="custom-file">
                                <Input type="file" name="file" id="exampleFile2" className="custom-file-input" />
                                <InputGroupAddon addonType="append">
                                    <label className="custom-file-label" htmlFor="custom-file">
                                        Choose file
                                    </label>
                                </InputGroupAddon>
                            </div>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
};

const DefaultForm = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mb-3 header-title">Basic Example</h4>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail2">Email</Label>
                        <Input type="email" name="email" id="exampleEmail2" placeholder="Enter your email" />
                        <FormText>We'll never share your email with anyone else.</FormText>
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword2">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword2"
                            placeholder="password placeholder"
                            defaultValue="12345"
                        />
                    </FormGroup>

                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const HorizontalForm = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mb-3 header-title">Horizontal Form</h4>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail3" sm={3}>
                            Email
                        </Label>
                        <Col sm={9}>
                            <Input type="email" name="email" id="exampleEmail3" placeholder="Enter your email" />
                            <FormText>We'll never share your email with anyone else.</FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword3" sm={3}>
                            Password
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword3"
                                placeholder="password placeholder"
                                defaultValue="12345"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword4" sm={3}>
                            Re-Password
                        </Label>
                        <Col sm={9}>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword4"
                                placeholder="password placeholder"
                                defaultValue="12345"
                            />
                        </Col>
                    </FormGroup>

                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const InlineForm = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mb-3 header-title">Inline Form Example</h4>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail4" className="mr-sm-2">
                            Email
                        </Label>
                        <Input type="email" name="email" id="exampleEmail4" placeholder="Enter your email" />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword5" className="mr-sm-2">
                            Password
                        </Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword5"
                            placeholder="password placeholder"
                            defaultValue="12345"
                        />
                    </FormGroup>

                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/basic' },
                    { label: 'Form Elements', path: '/forms/basic', active: true },
                ]}
                title={'Form Elements'}
            />

            <Row>
                <Col>
                    <BasicInputElements />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col lg={6}>
                                    <SelectInput />
                                    <Switches />
                                </Col>

                                <Col lg={6}>
                                    <h4 className="header-title mt-5 mt-sm-0">Checkboxes and radios</h4>
                                    <div className="mt-3">
                                        <CustomCheckboxes />
                                        <CustomRadios />
                                        <InlineCustomCheckboxes />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <InputSizes />
                </Col>

                <Col lg={6}>
                    <InputGroups />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <DefaultForm />
                </Col>

                <Col lg={6}>
                    <HorizontalForm />
                </Col>
            </Row>

            <Row>
                <Col>
                    <InlineForm />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
