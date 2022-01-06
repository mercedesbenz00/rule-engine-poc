// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    hideRightSidebar,
    changeLayout,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
} from '../redux/actions';

import * as layoutConstants from '../constants/layout';

type ThemeCustomizerProps = {
    layoutType: string,
    layoutWidth: string,
    leftSideBarTheme: string,
    leftSideBarType: string,
    hideRightSidebar: PropTypes.func,
    changeLayout: PropTypes.func,
    changeLayoutWidth: PropTypes.func,
    changeSidebarType: PropTypes.func,
    changeSidebarTheme: PropTypes.func,
};

type ThemeCustomizerState = {
    isHorizontalLayout?: boolean,
    isDetachedLayout?: boolean,
    isBoxed?: boolean,
    isSidebarScrollable?: boolean,
    isCondensed?: boolean,
    isLight?: boolean,
    isDark?: boolean,
};

class ThemeCustomizer extends Component<ThemeCustomizerProps, ThemeCustomizerState> {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.changeLayout = this.changeLayout.bind(this);
        this.changeWidthMode = this.changeWidthMode.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeLeftSiderbarType = this.changeLeftSiderbarType.bind(this);

        this.state = {
            isHorizontalLayout: false,
            isDetachedLayout: false,
            isBoxed: false,
            isSidebarScrollable: false,
            isCondensed: false,
            isLight: false,
            isDark: false,
        };
    }

    /**
     *  component did mount hook
     */
    componentDidMount = () => {
        this._loadStateFromProps();
    };

    /**
     * component did update hook
     */
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            this._loadStateFromProps();
        }
    };
    /**
     * Handles the close
     */
    handleClose = e => {
        e.preventDefault();
        this.props.hideRightSidebar();
    };

    /**
     * change state based on props changes
     */
    _loadStateFromProps() {
        this.setState({
            isHorizontalLayout: this.props.layoutType === layoutConstants.LAYOUT_HORIZONTAL,
            isDetachedLayout: this.props.layoutType === layoutConstants.LAYOUT_DETACHED,
            isBoxed: this.props.layoutWidth === layoutConstants.LAYOUT_WIDTH_BOXED,
            isSidebarScrollable: this.props.leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE,
            isCondensed: this.props.leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED,
            isLight: this.props.leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT,
            isDark: this.props.leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_DARK,
        });
    }

    /**
     * On layout change
     */
    changeLayout = e => {
        var layout = e.currentTarget.value;
        switch (layout) {
            case 'horizontal':
                this.setState({
                    isHorizontalLayout: !this.state.isHorizontalLayout,
                    isCondensed: false,
                    isDetachedLayout: false,
                });
                this.props.changeLayout(layoutConstants.LAYOUT_HORIZONTAL);
                break;
            case 'detached':
                this.setState({
                    isDetachedLayout: !this.state.isDetachedLayout,
                    isHorizontalLayout: false,
                    isBoxed: false,
                });
                this.props.changeLayout(layoutConstants.LAYOUT_DETACHED);
                break;
            default:
                this.setState({
                    isHorizontalLayout: false,
                    isCondensed: false,
                    isDetachedLayout: false,
                });
                this.props.changeLayout(layoutConstants.LAYOUT_VERTICAL);
                break;
        }
    };

    /**
     * Change the width mode
     */
    changeWidthMode = e => {
        var mode = e.currentTarget.value;
        switch (mode) {
            case 'boxed':
                this.setState({ isBoxed: true });
                this.props.changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_BOXED);
                break;
            default:
                this.setState({ isBoxed: false });
                this.props.changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_FLUID);
                break;
        }
    };

    /**
     * Changes the theme
     */
    changeTheme = e => {
        var theme = e.currentTarget.value;
        switch (theme) {
            case 'light':
                this.setState({ isLight: true });
                this.props.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_LIGHT);
                break;
            case 'dark':
                this.setState({ isLight: false, isDark: true });
                this.props.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK);
                break;
            default:
                this.setState({ isLight: false, isDark: false });
                this.props.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT);
                break;
        }
    };

    /**
     * Change the type
     */
    changeLeftSiderbarType = e => {
        var type = e.currentTarget.value;
        switch (type) {
            case 'condensed':
                this.setState({ isCondensed: true, isSidebarScrollable: false, isLight: false, isDark: false });
                this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED);
                break;
            case 'scrollable':
                this.setState({ isCondensed: false, isSidebarScrollable: true });
                this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE);
                break;
            default:
                this.setState({ isCondensed: false, isSidebarScrollable: false });
                this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED);
                break;
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="mt-2 p-2">
                    <div className="alert alert-primary" role="alert">
                        <strong>Customize the layout, sidebar menu, etc</strong>
                    </div>
                </div>

                <h5 className="pl-3">Layout</h5>

                <div className="pl-3">
                    <div className="pt-2">
                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="layout"
                                value="vertical"
                                id="vertical-check"
                                onChange={this.changeLayout}
                                checked={!this.state.isHorizontalLayout && !this.state.isDetachedLayout}
                            />
                            <label className="custom-control-label" htmlFor="vertical-check">
                                Vertical Layout (Default)
                            </label>
                        </div>

                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="layout"
                                value="horizontal"
                                id="horizontal-check"
                                onChange={this.changeLayout}
                                checked={this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="horizontal-check">
                                Horizontal Layout
                            </label>
                        </div>

                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="layout"
                                value="detached"
                                id="detached-check"
                                onChange={this.changeLayout}
                                checked={this.state.isDetachedLayout}
                            />
                            <label className="custom-control-label" htmlFor="detached-check">
                                Detached Layout
                            </label>
                        </div>
                    </div>
                </div>

                <hr className="mb-0 mt-2" />
                <h5 className="pl-3">Width</h5>

                <div className="mt-2 pl-3">
                    <div className="custom-control custom-switch mb-1">
                        <input
                            type="radio"
                            className="custom-control-input"
                            name="width"
                            value="fluid"
                            id="fluid-check"
                            checked={!this.state.isBoxed}
                            onChange={this.changeWidthMode}
                            disabled={this.state.isDetachedLayout}
                        />
                        <label className="custom-control-label" htmlFor="fluid-check">
                            Fluid
                        </label>
                    </div>
                    <div className="custom-control custom-switch mb-1">
                        <input
                            type="radio"
                            className="custom-control-input"
                            name="width"
                            value="boxed"
                            id="boxed-check"
                            checked={this.state.isBoxed}
                            onChange={this.changeWidthMode}
                            disabled={this.state.isDetachedLayout}
                        />
                        <label className="custom-control-label" htmlFor="boxed-check">
                            Boxed
                        </label>
                    </div>
                </div>

                <hr className="mb-0" />
                <h5 className="pl-3">Left Sidebar</h5>

                <div className="pl-3">
                    <div className="pt-2">
                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="theme"
                                value="default"
                                id="default-theme-check"
                                checked={!this.state.isLight && !this.state.isDark}
                                onChange={this.changeTheme}
                                disabled={this.state.isDetachedLayout || this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="default-theme-check">
                                Default
                            </label>
                        </div>

                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="theme"
                                value="light"
                                id="light-theme-check"
                                onChange={this.changeTheme}
                                checked={this.state.isLight}
                                disabled={this.state.isDetachedLayout || this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="light-theme-check">
                                Light
                            </label>
                        </div>

                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="theme"
                                value="dark"
                                id="dark-theme-check"
                                onChange={this.changeTheme}
                                checked={this.state.isDark}
                                disabled={this.state.isDetachedLayout || this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="dark-theme-check">
                                Dark
                            </label>
                        </div>
                    </div>
                </div>

                <div className="pl-3">
                    <div className="pt-2">
                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="left-sidebar-width"
                                value="fixed"
                                id="left-sidebar-width-fixed"
                                checked={!this.state.isCondensed && !this.state.isSidebarScrollable}
                                onChange={this.changeLeftSiderbarType}
                                disabled={this.state.isDetachedLayout || this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="left-sidebar-width-fixed">
                                Fixed (Default)
                            </label>
                        </div>

                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="left-sidebar-width"
                                value="condensed"
                                id="left-sidebar-width-condensed"
                                onChange={this.changeLeftSiderbarType}
                                checked={this.state.isCondensed}
                                disabled={this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="left-sidebar-width-condensed">
                                Condensed
                            </label>
                        </div>

                        <div className="custom-control custom-switch mb-1">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name="left-sidebar-width"
                                value="scrollable"
                                id="left-sidebar-width-scrollable"
                                onChange={this.changeLeftSiderbarType}
                                checked={this.state.isSidebarScrollable}
                                disabled={this.state.isHorizontalLayout}
                            />
                            <label className="custom-control-label" htmlFor="left-sidebar-width-scrollable">
                                Scrollable
                            </label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        showRightSidebar: state.Layout.showRightSidebar,
        layoutType: state.Layout.layoutType,
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
    };
};
export default connect(
    mapStateToProps,
    { hideRightSidebar, changeLayout, changeLayoutWidth, changeSidebarType, changeSidebarTheme }
)(ThemeCustomizer);
