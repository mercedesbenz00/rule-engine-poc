import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonGroup,
    Progress,
    UncontrolledTooltip,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import classNames from 'classnames';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import PageTitle from '../../../components/PageTitle';
import { emails } from './Data';

// left side panel
const LeftSide = props => {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-danger btn-block" onClick={props.toggleComposeModal}>
                Compose
            </button>

            <div className="email-menu-list mt-3">
                <Link to="/apps/email/inbox" className="text-danger font-weight-bold" onClick={props.showAllEmails}>
                    <i className="dripicons-inbox mr-2"></i>Inbox
                    <span className="badge badge-danger-lighten float-right ml-2">{props.totalUnreadEmails}</span>
                </Link>
                <Link to="/apps/email/inbox" onClick={props.showStarredEmails}>
                    <i className="dripicons-star mr-2"></i>Starred
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-clock mr-2"></i>Snoozed
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-document mr-2"></i>Draft
                    <span className="badge badge-info-lighten float-right ml-2">32</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-exit mr-2"></i>Sent Mail
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-trash mr-2"></i>Trash
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-tag mr-2"></i>Important
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-warning mr-2"></i>Spam
                </Link>
            </div>

            <div className="mt-4">
                <h6 className="text-uppercase">Labels</h6>
                <div className="email-menu-list labels-list mt-2">
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-info mr-2"></i>Updates
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-warning mr-2"></i>Friends
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-success mr-2"></i>Family
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-primary mr-2"></i>Social
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-danger mr-2"></i>Important
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-secondary mr-2"></i>Promotions
                    </Link>
                </div>
            </div>

            <div className="mt-5">
                <h4>
                    <span className="badge badge-pill p-1 px-2 badge-secondary-lighten">FREE</span>
                </h4>
                <h6 className="text-uppercase mt-3">Storage</h6>
                <Progress color="success" value={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
            </div>
        </React.Fragment>
    );
};

// emails list
const EmailsList = props => {
    const emails = props.emails || [];

    return (
        <React.Fragment>
            <ul className="email-list">
                {emails.map((email, idx) => {
                    return (
                        <li className={classNames({ unread: !email.is_read })} key={idx}>
                            <div className="email-sender-info">
                                <div className="checkbox-wrapper-mail">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id={'mail' + email.id}
                                        />
                                        <label className="custom-control-label" htmlFor={'mail' + email.id}></label>
                                    </div>
                                </div>
                                <span
                                    className={classNames('star-toggle', 'mdi', 'mdi-star-outline', {
                                        'text-warning': email.is_important,
                                    })}></span>
                                <Link to="/apps/email/details" className="email-title">
                                    {email.from_name}
                                    {email.number_of_reply > 1 && <span> ({email.number_of_reply})</span>}
                                </Link>
                            </div>
                            <div className="email-content">
                                <Link to="/apps/email/details" className="email-subject">
                                    {email.subject}
                                </Link>
                                <div className="email-date">{email.time}</div>
                            </div>
                            <div className="email-action-icons">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <i className="mdi mdi-archive email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <i className="mdi mdi-delete email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <i className="mdi mdi-email-open email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <i className="mdi mdi-clock email-action-icons-item"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

// Inbox
class Inbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emails: emails.slice(0, 20),
            totalEmails: emails.length,
            pageSize: 20,
            page: 1,
            startIndex: 1,
            endIndex: 20,
            totalPages: emails.length / 20,
            totalUnreadEmails: emails.filter(e => e.is_read === false).length,
            composeModal: false,
            editorState: EditorState.createEmpty(),
        };
        this.getNextPage = this.getNextPage.bind(this);
        this.getPrevPage = this.getPrevPage.bind(this);
        this.showAllEmails = this.showAllEmails.bind(this);
        this.showStarredEmails = this.showStarredEmails.bind(this);
        this.toggleComposeModal = this.toggleComposeModal.bind(this);
        this.handleEmailSave = this.handleEmailSave.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    /**
     * Toggles the compose modal
     */
    toggleComposeModal = () => {
        this.setState(prevState => ({
            composeModal: !prevState.composeModal,
        }));
    };

    /**
     * Gets the next page
     */
    getNextPage = () => {
        var nextPage = this.state.page + 1;
        if (nextPage > this.state.totalEmails / this.state.pageSize) {
            nextPage = this.state.totalEmails / this.state.pageSize;
        }
        var startIdx = nextPage * this.state.pageSize - this.state.pageSize + 1;
        var endIdx = nextPage * this.state.pageSize;
        this.setState({
            page: nextPage,
            startIndex: startIdx,
            endIndex: endIdx,
            emails: emails.slice(startIdx, endIdx),
        });
    };

    /**
     * Gets the prev page
     */
    getPrevPage = () => {
        var page = this.state.page - 1;
        if (page === 0) page = 1;
        var startIdx = page * this.state.pageSize - this.state.pageSize + 1;
        var endIdx = page * this.state.pageSize;
        this.setState({ page: page, startIndex: startIdx, endIndex: endIdx, emails: emails.slice(startIdx, endIdx) });
    };

    /**
     * Shows the starred emails only
     */
    showAllEmails = () => {
        this.setState({ emails: emails.slice(0, 20) });
    };

    /**
     * Shows the starred emails only
     */
    showStarredEmails = () => {
        this.setState({ emails: emails.filter(e => e.is_important).slice(0, 20) });
    };

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    handleEmailSave(event, values) {
        const body = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        console.log({ ...values, body });
        this.toggleComposeModal();
    }

    /**
     * On editor body change
     */
    onEditorStateChange = editorState => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'Email', path: '/apps/email/inbox' },
                        { label: 'Inbox', path: '/apps/email/inbox', active: true },
                    ]}
                    title={'Inbox'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="page-aside-left">
                                    <LeftSide
                                        totalUnreadEmails={this.state.totalUnreadEmails}
                                        showAllEmails={this.showAllEmails}
                                        showStarredEmails={this.showStarredEmails}
                                        toggleComposeModal={this.toggleComposeModal}
                                    />
                                </div>

                                <div className="page-aside-right">
                                    <ButtonGroup className="mr-1 my-1">
                                        <Button id="archive">
                                            <i className="mdi mdi-archive font-16"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="archive">
                                            Archived
                                        </UncontrolledTooltip>
                                        <Button id="spam">
                                            <i className="mdi mdi-alert-octagon font-16"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="spam">
                                            Spam
                                        </UncontrolledTooltip>
                                        <Button id="delete">
                                            <i className="mdi mdi-delete-variant font-16"></i>
                                        </Button>
                                        <UncontrolledTooltip placement="bottom" target="delete">
                                            Delete
                                        </UncontrolledTooltip>
                                    </ButtonGroup>

                                    <UncontrolledDropdown className="d-inline-block mr-1 my-1">
                                        <DropdownToggle>
                                            <i className="mdi mdi-folder font-16"></i>
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <span className="dropdown-header">Move to:</span>
                                            <DropdownItem>Social</DropdownItem>
                                            <DropdownItem>Promotions</DropdownItem>
                                            <DropdownItem>Updates</DropdownItem>
                                            <DropdownItem>Forums</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown className="d-inline-block mr-1 my-1">
                                        <DropdownToggle>
                                            <i className="mdi mdi-label font-16"></i>
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <span className="dropdown-header">Label as:</span>
                                            <DropdownItem>Social</DropdownItem>
                                            <DropdownItem>Promotions</DropdownItem>
                                            <DropdownItem>Updates</DropdownItem>
                                            <DropdownItem>Forums</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown className="d-inline-block mr-1 my-1">
                                        <DropdownToggle>
                                            <i className="mdi mdi-dots-horizontal font-16"></i> More
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <span className="dropdown-header">More Options :</span>
                                            <DropdownItem>Mark as Unread</DropdownItem>
                                            <DropdownItem>Add to Tasks</DropdownItem>
                                            <DropdownItem>Add Star</DropdownItem>
                                            <DropdownItem>Mute</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <div className="mt-3">
                                        <EmailsList emails={this.state.emails} />
                                    </div>

                                    <Row>
                                        <Col sm={7} className="mt-1">
                                            Show {this.state.startIndex} - {this.state.endIndex} of{' '}
                                            {this.state.totalEmails}
                                        </Col>
                                        <Col sm={5}>
                                            <ButtonGroup className="float-right">
                                                {this.state.page === 1 ? (
                                                    <Button color="light" className="btn-sm" disabled>
                                                        <i className="mdi mdi-chevron-left"></i>
                                                    </Button>
                                                ) : (
                                                    <Button color="info" className="btn-sm" onClick={this.getPrevPage}>
                                                        <i className="mdi mdi-chevron-left"></i>
                                                    </Button>
                                                )}

                                                {this.state.page < this.state.totalPages ? (
                                                    <Button color="info" className="btn-sm" onClick={this.getNextPage}>
                                                        <i className="mdi mdi-chevron-right"></i>
                                                    </Button>
                                                ) : (
                                                    <Button color="light" className="btn-sm" disabled>
                                                        <i className="mdi mdi-chevron-right"></i>
                                                    </Button>
                                                )}
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal isOpen={this.state.composeModal} toggle={this.toggleComposeModal}>
                    <ModalHeader toggle={this.toggleComposeModal} className="modal-colored-header bg-primary">
                        New Message
                    </ModalHeader>
                    <ModalBody>
                        <AvForm onValidSubmit={this.handleEmailSave}>
                            <AvField
                                type="email"
                                name="to"
                                label="To"
                                placeholder="example@email.com"
                                validate={{
                                    required: { value: true, errorMessage: 'Please specify to email' },
                                }}></AvField>
                            <AvField
                                type="text"
                                name="subject"
                                label="Subject"
                                placeholder="your subject"
                                validate={{
                                    required: { value: true, errorMessage: 'Please specify subject' },
                                }}></AvField>

                            <Row className="mb-2">
                                <Col>
                                    <label>Message</label>
                                    <Editor
                                        editorState={this.state.editorState}
                                        wrapperClassName="rich-editor-wrapper"
                                        editorClassName="rich-editor"
                                        onEditorStateChange={this.onEditorStateChange}
                                        toolbar={{
                                            options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link'],
                                            inline: { inDropdown: true },
                                            list: { inDropdown: true },
                                            textAlign: { inDropdown: true },
                                            link: { inDropdown: true },
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Button color="primary" type="submit">
                                <i className="mdi mdi-send mr-1"></i> Send Message
                            </Button>
                        </AvForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Inbox;
