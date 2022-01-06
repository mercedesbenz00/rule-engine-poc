import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { forgetPassword } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import LoaderWidget from '../../components/Loader';
import logo from '../../assets/images/logo.png';

class ForgetPassword extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.props.forgetPassword(values.username);
    };

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
                                            <Link to="/">
                                                <span>
                                                    <img src={logo} alt="" height="18" />
                                                </span>
                                            </Link>
                                        </div>

                                        <CardBody className="p-4 position-relative">
                                            {/* preloader */}
                                            {this.props.loading && <LoaderWidget />}

                                            <div className="text-center w-75 m-auto">
                                                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
                                                    Reset Password
                                                </h4>
                                                <p className="text-muted mb-4">
                                                    Enter your email address and we'll send you an email with
                                                    instructions to reset your password
                                                </p>
                                            </div>

                                            {this.props.passwordResetStatus && (
                                                <Alert
                                                    color="success"
                                                    isOpen={this.props.passwordResetStatus ? true : false}>
                                                    {this.props.passwordResetStatus}
                                                </Alert>
                                            )}

                                            {this.props.error && (
                                                <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    {this.props.error}
                                                </Alert>
                                            )}

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField
                                                    type="text"
                                                    name="username"
                                                    label="Your Username"
                                                    placeholder="Enter your username"
                                                    required
                                                />

                                                <FormGroup>
                                                    <Button color="success">Submit</Button>
                                                </FormGroup>
                                            </AvForm>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col className="col-12 text-center">
                                    <p className="text-muted">
                                        Back to{' '}
                                        <Link to="/account/login" className="text-muted ml-1">
                                            <b>Sign In</b>
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { passwordResetStatus, loading, error } = state.Auth;
    return { passwordResetStatus, loading, error };
};

export default connect(
    mapStateToProps,
    { forgetPassword }
)(ForgetPassword);
