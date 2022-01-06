import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';

import { isUserAuthenticated } from '../../helpers/authUtils';
import logo from '../../assets/images/logo.png';
import emailImg from '../../assets/images/mail_sent.svg';

class Confirm extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to="/" />;
        }
    };

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>
                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && (
                    <div className="account-pages mt-5 mb-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={5}>
                                    <Card>
                                        <div className="card-header pt-4 pb-4 text-center bg-primary">
                                            <a href="/">
                                                <span>
                                                    <img src={logo} alt="" height="18" />
                                                </span>
                                            </a>
                                        </div>

                                        <CardBody className="p-4 position-relative">
                                            <div className="text-center m-auto">
                                                <img src={emailImg} alt="" height="64" />

                                                <h4 className="text-dark-50 text-center mt-4 font-weight-bold">
                                                    Please check your email
                                                </h4>
                                                <p className="text-muted mb-4">
                                                    A email has been send to <b>youremail@domain.com</b>. Please check
                                                    for an email from company and click on the included link to reset
                                                    your password.
                                                </p>

                                                <p className="text-center">
                                                    <Link className="btn btn-primary" to="/account/login">
                                                        Back to Login
                                                    </Link>
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default connect()(Confirm);
