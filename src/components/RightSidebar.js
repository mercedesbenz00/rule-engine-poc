// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SimpleBar from 'simplebar-react';

import { hideRightSidebar } from '../redux/actions';

type RightSideBarProps = {
    hideRightSidebar: PropTypes.func,
    title?: string,
    children?: any,
};

type RightSideBarState = {};

class RightSideBar extends Component<RightSideBarProps, RightSideBarState> {
    rightBarNodeRef: any;

    static defaultProps = {
        title: 'Right Sidebar',
    };

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = {};
    }

    /**
     *
     */
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     *
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };
    /**
     * Handles the close
     */
    handleClose = (e: any) => {
        e.preventDefault();
        this.props.hideRightSidebar();
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e: any) => {
        if (this.rightBarNodeRef.contains(e.target)) return;
        // else hide the right sidebar
        this.props.hideRightSidebar();
    };

    render() {
        const title = this.props.title;
        const component = this.props.children || null;

        return (
            <React.Fragment>
                <SimpleBar style={{ maxHeight: '100%', zIndex: 10000 }} id="right_side_bar">
                    <div className="right-bar" ref={node => (this.rightBarNodeRef = node)}>
                        <div className="rightbar-title">
                            <Link to="#" className="right-bar-toggle float-right" onClick={this.handleClose}>
                                <i className="dripicons-cross noti-icon"></i>
                            </Link>
                            <h5 className="m-0">{title}</h5>
                        </div>

                        <div className="rightbar-content">{component}</div>
                    </div>
                </SimpleBar>

                <div className="rightbar-overlay"></div>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    { hideRightSidebar }
)(RightSideBar);
