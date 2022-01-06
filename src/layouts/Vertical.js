// @flow
import React, { Component, Suspense } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeSidebarTheme, changeSidebarType } from '../redux/actions';
import * as layoutConstants from '../constants/layout';
import ThemeCustomizer from '../components/ThemeCustomizer';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const LeftSidebar = React.lazy(() => import('../components/LeftSidebar'));
const Topbar = React.lazy(() => import('../components/Topbar'));
const Footer = React.lazy(() => import('../components/Footer'));
const RightSidebar = React.lazy(() => import('../components/RightSidebar'));

type VerticalLayoutProps = {
    changeLayout: PropTypes.func,
    changeSidebarTheme: PropTypes.func,
    changeSidebarType: PropTypes.func,
    children?: any,
    layout: {
        leftSideBarType?: string,
        leftSideBarTheme?: string,
    },
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};

// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

class VerticalLayout extends Component<VerticalLayoutProps, VerticalLayoutState> {
    constructor(props) {
        super(props);
        this.openLeftMenu = this.openLeftMenu.bind(this);
    }

    /**
     * Opens the left menu - mobile
     */
    openLeftMenu = () => {
        if (document.body) document.body.classList.add('sidebar-enable');
    };

    /**
     * Handles the menu on window resizes
     */
    updateDimensions = () => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED);
        } else if(window.innerWidth > 1028) {
            this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED);
        }
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions.bind(this));

        this.props.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK);

        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED);
        }
    };

    /**
     * Removes the listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }


    render() {
        // get the child view which we would like to render
        const children = this.props.children || null;

        const isCondensed = this.props.layout.leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
        const isLight = this.props.layout.leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

        return (
            <div className="app">
                <div className="wrapper">
                    <Suspense fallback={emptyLoading()}>
                        <LeftSidebar
                            {...this.props}
                            isCondensed={isCondensed}
                            isLight={isLight}
                            hideUserProfile={true}
                        />
                    </Suspense>

                    <div className="content-page">
                        <div className="content">
                            <Suspense fallback={emptyLoading()}>
                                <Topbar {...this.props} openLeftMenuCallBack={this.openLeftMenu} hideLogo={true} />
                            </Suspense>

                            <Container fluid>
                                <Suspense fallback={loading()}>{children}</Suspense>
                            </Container>
                        </div>

                        <Suspense fallback={emptyLoading()}>
                            <Footer {...this.props} />
                        </Suspense>
                    </div>
                </div>

                <Suspense fallback={emptyLoading()}>
                    <RightSidebar {...this.props}>
                        <ThemeCustomizer />
                    </RightSidebar>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.Layout,
    };
};
export default connect(
    mapStateToProps,
    { changeSidebarTheme, changeSidebarType }
)(VerticalLayout);
