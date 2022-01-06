// @flow
import React, { Component, Suspense } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeLayout } from '../redux/actions';
import ThemeCustomizer from '../components/ThemeCustomizer';
import * as layoutConstants from '../constants/layout';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const LeftSidebar = React.lazy(() => import('../components/LeftSidebar'));
const Topbar = React.lazy(() => import('../components/Topbar'));
const Footer = React.lazy(() => import('../components/Footer'));
const RightSidebar = React.lazy(() => import('../components/RightSidebar'));

const loading = () => <div className="text-center"></div>;

type DetachedLayoutProps = {
    changeLayout: PropTypes.func,
    children?: any,
    layout: {
        leftSideBarType?: string,
        leftSideBarTheme?: string,
    },
};

type DetachedLayoutState = {
    isMenuOpened?: boolean,
};

class DetachedLayout extends Component<DetachedLayoutProps, DetachedLayoutState> {
    constructor(props) {
        super(props);

        this.openMenu = this.openMenu.bind(this);

        this.state = {
            isMenuOpened: false,
        };
    }

    componentDidMount = () => {
        this.props.changeLayout(layoutConstants.LAYOUT_DETACHED);
    };

    /**
     * Opens the menu - mobile
     */
    openMenu = e => {
        e.preventDefault();
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
        if (document.body) document.body.classList.add('sidebar-enable');
    };

    render() {
        // get the child view which we would like to render
        const children = this.props.children || null;
        const isCondensed = this.props.layout.leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
        const isLight = this.props.layout.leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

        return (
            <div className="app">
                <Suspense fallback={loading()}>
                    <Topbar
                        {...this.props}
                        isMenuOpened={this.state.isMenuOpened}
                        openMenuCallback={this.openMenu}
                        navCssClasses="topnav-navbar topnav-navbar-dark"
                    />
                </Suspense>
                <Container fluid>
                    <div className="wrapper">
                        <Suspense fallback={loading()}>
                            <LeftSidebar
                                {...this.props}
                                isMenuOpened={this.state.isMenuOpened}
                                isCondensed={isCondensed}
                                isLight={isLight}
                                hideLogo={true}
                            />
                        </Suspense>

                        <div className="content-page">
                            <div className="content">
                                <Suspense fallback={loading()}>{children}</Suspense>
                            </div>

                            <Suspense fallback={loading()}>
                                <Footer {...this.props} />
                            </Suspense>
                        </div>
                    </div>
                </Container>
                <Suspense fallback={loading()}>
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
    { changeLayout }
)(DetachedLayout);
