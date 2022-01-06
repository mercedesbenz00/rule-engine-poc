// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import notFoundImg from '../../assets/images/file-searching.svg';
import PageTitle from '../../components/PageTitle';

const ErrorPageNotFound = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/error-404' },
                    { label: '404', path: '/pages/error-404', active: true },
                ]}
                title={'404 Error'}
            />

            <Row className="justify-content-center">
                <Col lg={4}>
                    <div className="text-center">
                        <img src={notFoundImg} height="90" alt="" />
                        <h1 className="text-error mt-4">404</h1>
                        <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                        <p className="text-muted mt-3">
                            It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of
                            us. Here's a little tip that might help you get back on track.
                        </p>

                        <Link className="btn btn-info mt-3" to="/">
                            <i className="mdi mdi-reply"></i> Return Home
                        </Link>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ErrorPageNotFound;
