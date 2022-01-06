import React, { Component } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';

import PageTitle from '../../../components/PageTitle';
import FileUploader from '../../../components/FileUploader';

class ProjectForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        };

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.updateValues = this.updateValues.bind(this);
    }

    /**
     * Update values
     */
    updateValues = (field, fieldValue) => {
        const state = { ...this.state.state };
        state[field] = fieldValue;
        this.setState(state);
    };

    /**
     * Handle the form submission
     */
    handleValidSubmit = (e, values) => {
        console.log({ ...values, ...this.state });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'Projects', path: '/apps/projects' },
                        { label: 'Create Project', path: '/apps/projects/new', active: true },
                    ]}
                    title={'Create Project'}
                />

                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <AvForm onValidSubmit={this.handleValidSubmit}>
                                    <Row>
                                        <Col>
                                            <AvField
                                                name="name"
                                                label="Name"
                                                required
                                                placeholder="Enter project name"
                                            />

                                            <AvField
                                                name="overview"
                                                label="Overview"
                                                placeholder="Enter some brief about project.."
                                                type="textarea"
                                                rows="5"
                                            />

                                            <FormGroup>
                                                <Label>Start Date</Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    value={this.state.startDate}
                                                    onChange={date => {
                                                        this.updateValues('startDate', date);
                                                    }}
                                                />
                                            </FormGroup>

                                            <AvField
                                                name="budget"
                                                label="Budget"
                                                placeholder="Enter project budget"
                                                type="number"
                                            />

                                            <FormGroup>
                                                <Label>Team Members</Label>
                                                <Select
                                                    isMulti={true}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    onChange={members => {
                                                        this.updateValues('members', members);
                                                    }}
                                                    options={[
                                                        { value: '1', label: 'Mary Scott' },
                                                        { value: '2', label: 'Shreyu N' },
                                                        { value: '3', label: 'Greeva Y' },
                                                    ]}></Select>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label>Avatar</Label>
                                                <p className="text-muted font-14">
                                                    Recommended thumbnail size 800x400 (px).
                                                </p>
                                                <FileUploader
                                                    onFileUpload={files => {
                                                        this.updateValues('avatar', files);
                                                    }}
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label>Due Date</Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    value={this.state.endDate}
                                                    onChange={date => {
                                                        this.updateValues('endDate', date);
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="mt-2">
                                        <Col>
                                            <Button type="submit" color="success">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default ProjectForm;
