// @flow
import React from 'react';

import { Row, Col, Card, CardBody } from 'reactstrap';
import Select from 'react-select';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import MaskedInput from 'react-text-mask';

import HyperDatepicker from '../../components/Datepicker';
import PageTitle from '../../components/PageTitle';

const ReactSelect = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">
                    <a href="https://github.com/JedWatson/react-select">React select</a>
                </h4>
                <p className="mb-1 mt-3 font-weight-bold text-muted">Single Selection</p>
                <p className="text-muted font-14">React-Select based Select element</p>
                <Select
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>

                <p className="mb-1 mt-3 font-weight-bold text-muted">Multiple Selection</p>
                <p className="text-muted font-14">React-Select based Select (Multiple) element</p>
                <Select
                    isMulti={true}
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}
                    className="react-select"
                    classNamePrefix="react-select"></Select>
            </CardBody>
        </Card>
    );
};

const Typeaheads = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">
                    <a href="http://ericgio.github.io/react-bootstrap-typeahead/">Typeahead</a>
                </h4>
                <p className="mb-1 mt-3 font-weight-bold text-muted">Single Selection</p>
                <p className="text-muted font-14">Typeahead based Select element</p>
                <Typeahead
                    id="select2"
                    labelKey="label"
                    multiple={false}
                    options={[
                        { id: 1, value: 'chocolate', label: 'Chocolate' },
                        { id: 2, value: 'strawberry', label: 'Strawberry' },
                        { id: 3, value: 'vanilla', label: 'Vanilla' },
                    ]}
                    placeholder="Choose a state..."
                />

                <p className="mb-1 mt-3 font-weight-bold text-muted">Multiple Selection</p>
                <p className="text-muted font-14">Typeahead based Select (Multiple) element</p>
                <Typeahead
                    id="select3"
                    labelKey="label"
                    multiple={true}
                    options={[
                        { id: 1, value: 'chocolate', label: 'Chocolate' },
                        { id: 2, value: 'strawberry', label: 'Strawberry' },
                        { id: 3, value: 'vanilla', label: 'Vanilla' },
                    ]}
                    placeholder="Choose a state..."
                />
            </CardBody>
        </Card>
    );
};

const DatePickers = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Date &amp; Time Picker</h4>
                <p className="text-muted font-14">
                    A simple date picker using <a href="https://reactdatepicker.com/">ReactJS Datepicker</a>
                </p>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Single Date</label> <br />
                            <HyperDatepicker hideAddon={true} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Single Date with multiple months</label> <br />
                            <HyperDatepicker hideAddon={true} monthsShown={2} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Custom date format</label> <br />
                            <HyperDatepicker hideAddon={true} dateFormat="yyyy-MM-dd" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Specific date range</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                minDate={new Date()}
                                maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Select Time</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Time only</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={60}
                                dateFormat="h:mm aa"
                                timeCaption="Time"
                            />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

const InputMasks = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Input Masks</h4>
                <p className="text-muted font-14">
                    Input masks by{' '}
                    <a href="https://github.com/text-mask/text-mask/tree/master/react#readme">react-text-mask</a>
                </p>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Phone Number with Area Code</label> <br />
                            <MaskedInput
                                mask={[
                                    '(',
                                    /[1-9]/,
                                    /\d/,
                                    ')',
                                    ' ',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                ]}
                                placeholder="(__) ____-____"
                                className="form-control"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>US Phone Number</label> <br />
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
                                placeholder="(___) ___-____"
                                className="form-control"
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Date</label> <br />
                            <MaskedInput
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                placeholder="__/__/____"
                                className="form-control"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Time</label> <br />
                            <MaskedInput
                                mask={[/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]}
                                placeholder="__:__:__"
                                className="form-control"
                            />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

const FormAdvanced = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/advanced' },
                    { label: 'Form Advanced', path: '/forms/advanced', active: true },
                ]}
                title={'Form Advanced'}
            />

            <Row>
                <Col lg={6}>
                    <ReactSelect />
                </Col>
                <Col lg={6}>
                    <Typeaheads />
                </Col>
            </Row>

            <Row>
                <Col>
                    <DatePickers />
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputMasks />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormAdvanced;
