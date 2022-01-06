// @flow
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import FileUploader from '../../components/FileUploader';

const FileUpload = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/upload' },
                    { label: 'Form Upload', path: '/forms/upload', active: true },
                ]}
                title={'Form Upload'}
            />

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <h4 className="header-title mb-3">Dropzone File Upload</h4>

                            <p className="text-muted font-13 m-b-30">
                                DropzoneJS is an open source library that provides drag’n’drop file uploads with image
                                previews.
                            </p>

                            <FileUploader
                                onFileUpload={files => {
                                    console.log(files);
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FileUpload;
