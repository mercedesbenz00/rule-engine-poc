import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { registerUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import LoaderWidget from '../../components/Loader';
import logo from '../../assets/images/logo.png';

class Register extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
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
        this.props.registerUser(values.fullname, values.email, values.password);
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

    /**
     * Redirect to confirm
     */
    renderRedirectToConfirm = () => {
        return <Redirect to="/confirm" />;
    };

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>
                {this.renderRedirectToRoot()}

                {this.props.user && this.renderRedirectToConfirm()}

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
                                                    Create Your Account
                                                </h4>
                                                <p className="text-muted mb-4">
                                                    Don't have an account? Create your account, it takes less than a
                                                    minute
                                                </p>
                                            </div>

                                            {this.props.error && (
                                                <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    <div>{this.props.error}</div>
                                                </Alert>
                                            )}

                                            <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField
                                                    name="fullname"
                                                    label="Full Name"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                                <AvField
                                                    type="email"
                                                    name="email"
                                                    label="Email address"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                                <AvGroup>
                                                    <Label for="password">Password</Label>
                                                    <AvInput
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Enter your password"
                                                        required
                                                    />
                                                    <AvFeedback>This field is invalid</AvFeedback>
                                                </AvGroup>
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
                                        Already have an account?{' '}
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
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(
    mapStateToProps,
    { registerUser }
)(Register);
