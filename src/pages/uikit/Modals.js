// @flow
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

type ModalProps = {};

type ModalState = {
    modal?: boolean,
    size?: string | null,
    className?: string | null,
};

class ModalSizesAndPosition extends Component<ModalProps, ModalState> {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }

    /**
     * Show/hide the modal
     */
    /*:: toggle: () => void */
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens large modal
     */
    /*:: openModalWithSize: () => void */
    openModalWithSize = size => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    /*:: openModalWithClass: () => void */
    openModalWithClass = className => {
        this.setState({ className: className, size: null });
        this.toggle();
    };

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <h4 className="header-title">Bootstrap Modals</h4>

                        <p className="text-muted">
                            A rendered modal with header, body, and set of actions in the footer.
                        </p>

                        <div className="button-list">
                            <Button color="primary" onClick={this.toggle}>
                                Standard Modal
                            </Button>
                            <Button color="info" onClick={() => this.openModalWithSize('lg')}>
                                Large Modal
                            </Button>
                            <Button color="success" onClick={() => this.openModalWithSize('sm')}>
                                Small Modal
                            </Button>
                            <Button color="primary" onClick={() => this.openModalWithClass('modal-full-width')}>
                                Full width Modal
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() => this.openModalWithClass('modal-dialog-scrollable')}>
                                Scrollable Modal
                            </Button>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h4 className="header-title">Modal Position</h4>

                        <p className="text-muted">
                            Specify the position for the modal. You can display modal at top, bottom, center or right of
                            page by specifying classes <code>modal-top</code>, <code>modal-bottom</code>,{' '}
                            <code>modal-dialog-centered</code> and <code>modal-right</code>
                            respectively.
                        </p>

                        <div className="button-list">
                            <Button color="info" onClick={() => this.openModalWithClass('modal-top')}>
                                Top
                            </Button>
                            <Button color="success" onClick={() => this.openModalWithClass('modal-right')}>
                                Right
                            </Button>
                            <Button color="primary" onClick={() => this.openModalWithClass('modal-bottom')}>
                                Bottom
                            </Button>
                            <Button color="secondary" onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                                Center
                            </Button>
                        </div>

                        <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                            className={this.state.className}
                            size={this.state.size}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                <h6>Text in a modal</h6>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                <hr />
                                <h6>Overflowing text to show scroll behavior</h6>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                    vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                                <p>
                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                    metus auctor fringilla.
                                </p>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                    vestibulum at eros.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>
                                    Do Something
                                </Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

type ModalColorVariantProps = {};

type ModalColorVariantState = {
    modal?: boolean,
    bodyClass?: string | null,
    headerClassName?: string | null,
};

class ModalColorVariant extends Component<ModalColorVariantProps, ModalColorVariantState> {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithHeaderClass = this.openModalWithHeaderClass.bind(this);
        this.openModalWithBodyClass = this.openModalWithBodyClass.bind(this);
    }

    /**
     * Show/hide the modal
     */
    /*:: toggle: () => void */
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens modal with custom header
     */
    /*:: openModalWithHeaderClass: () => void */
    openModalWithHeaderClass = className => {
        this.setState({ headerClassName: className });
        this.toggle();
    };

    /**
     * Opens modal with custom body
     */
    /*:: openModalWithBodyClass: () => void */
    openModalWithBodyClass = className => {
        this.setState({ headerClassName: className, bodyClass: className });
        this.toggle();
    };

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <h4 className="header-title">Colored Header Modals</h4>

                        <p className="text-muted">A rendered modal with header having contexual background color.</p>

                        <div className="button-list">
                            <Button
                                color="primary"
                                onClick={() => this.openModalWithHeaderClass('modal-colored-header bg-primary')}>
                                Primary
                            </Button>
                            <Button
                                color="success"
                                onClick={() => this.openModalWithHeaderClass('modal-colored-header bg-success')}>
                                Success
                            </Button>
                            <Button
                                color="danger"
                                onClick={() => this.openModalWithHeaderClass('modal-colored-header bg-danger')}>
                                Danger
                            </Button>
                            <Button
                                color="warning"
                                onClick={() => this.openModalWithHeaderClass('modal-colored-header bg-warning')}>
                                Warning
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() => this.openModalWithHeaderClass('modal-colored-header bg-secondary')}>
                                Secondary
                            </Button>
                            <Button
                                color="dark"
                                onClick={() => this.openModalWithHeaderClass('modal-colored-header bg-dark')}>
                                Dark
                            </Button>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h4 className="header-title">Filled Modals</h4>

                        <p className="text-muted">
                            A rendered modal with header, body and footer having contexual background color.
                        </p>

                        <div className="button-list">
                            <Button
                                color="primary"
                                onClick={() => this.openModalWithBodyClass('modal-colored-header bg-primary')}>
                                Primary
                            </Button>
                            <Button
                                color="success"
                                onClick={() => this.openModalWithBodyClass('modal-colored-header bg-success')}>
                                Success
                            </Button>
                            <Button
                                color="danger"
                                onClick={() => this.openModalWithBodyClass('modal-colored-header bg-danger')}>
                                Danger
                            </Button>
                            <Button
                                color="warning"
                                onClick={() => this.openModalWithBodyClass('modal-colored-header bg-warning')}>
                                Warning
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() => this.openModalWithBodyClass('modal-colored-header bg-secondary')}>
                                Secondary
                            </Button>
                            <Button
                                color="dark"
                                onClick={() => this.openModalWithBodyClass('modal-colored-header bg-dark')}>
                                Dark
                            </Button>
                        </div>

                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle} className={this.state.headerClassName}>
                                Modal title
                            </ModalHeader>
                            <ModalBody className={this.state.bodyClass}>
                                <h6>Text in a modal</h6>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                <hr />
                                <h6>Overflowing text to show scroll behavior</h6>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                    vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                                <p>
                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                    metus auctor fringilla.
                                </p>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                    vestibulum at eros.
                                </p>
                            </ModalBody>
                            <ModalFooter className={this.state.bodyClass}>
                                <Button color="primary" onClick={this.toggle}>
                                    Do Something
                                </Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

type ModalWithFormProps = {};

type ModalWithFormState = {
    modal?: boolean,
};

class ModalWithForm extends React.Component<ModalWithFormProps, ModalWithFormState> {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    /*:: toggle: () => void */
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <h4 className="header-title">Modal with Pages</h4>

                    <p className="text-muted">Examples of custom modals.</p>

                    <Button color="primary" onClick={this.toggle}>
                        Sign Up
                    </Button>

                    {/* Sign up Modal */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
                        <ModalBody>
                            <form className="pl-3 pr-3" action="#">
                                <div className="form-group">
                                    <label htmlFor="username">Name</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="username"
                                        required=""
                                        placeholder="Michael Zenaty"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="emailaddress">Email address</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="emailaddress"
                                        required=""
                                        placeholder="john@deo.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required=""
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">
                                            I accept <a href="/">Terms and Conditions</a>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group text-center">
                                    <button className="btn btn-primary" type="submit">
                                        Sign Up Free
                                    </button>
                                </div>
                            </form>
                        </ModalBody>
                    </Modal>
                </CardBody>
            </Card>
        );
    }
}

type NestedModalProps = {};

type NestedModalState = {
    toggleMultiple?: boolean,
    nestedModal?: boolean,
    closeAll?: boolean,
};

class NestedModal extends React.Component<NestedModalProps, NestedModalState> {
    constructor(props) {
        super(props);
        this.state = {
            toggleMultiple: false,
            nestedModal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
    }

    /**
     * Show/hide the modal
     */
    /*:: toggle: () => void */
    toggle() {
        this.setState(prevState => ({
            toggleMultiple: !prevState.toggleMultiple,
        }));
    }

    /**
     * show/hide nested modal
     */
    /*:: toggle: () => void */
    toggleNested = () => {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false,
        });
    };

    render() {
        return (
            <Card>
                <CardBody>
                    <h4 className="header-title">Multiple Modals</h4>

                    <p className="text-muted">
                        Display a series of modals one by one to guide your users on multiple aspects or take step wise
                        input.
                    </p>

                    <Button color="primary" onClick={this.toggle}>
                        Open
                    </Button>

                    <Modal isOpen={this.state.toggleMultiple} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <Button color="success" onClick={this.toggleNested}>
                                Show Nested Modal
                            </Button>
                            <Modal
                                isOpen={this.state.nestedModal}
                                toggle={this.toggleNested}
                                onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Nested Modal title</ModalHeader>
                                <ModalBody>Stuff and things</ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleNested}>
                                        Done
                                    </Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>
                                Do Something
                            </Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
        );
    }
}

const Modals = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/modals' },
                    { label: 'Base UI', path: '/ui/modals' },
                    { label: 'Modals', path: '/ui/modals', active: true },
                ]}
                title={'Modals'}
            />

            <Row>
                <Col md={6}>
                    <ModalSizesAndPosition />
                </Col>

                <Col md={6}>
                    <ModalColorVariant />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <ModalWithForm />
                </Col>

                <Col md={6}>
                    <NestedModal />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Modals;
