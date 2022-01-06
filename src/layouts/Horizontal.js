// @flow
import React, { Component, Suspense } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeLayout } from '../redux/actions';
import * as layoutConstants from '../constants/layout';
import ThemeCustomizer from '../components/ThemeCustomizer';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('../components/Topbar'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const Footer = React.lazy(() => import('../components/Footer'));
const RightSidebar = React.lazy(() => import('../components/RightSidebar'));

const loading = () => <div className="text-center"></div>;

type HorizontalLayoutProps = {
    changeLayout: PropTypes.func,
    children: PropTypes.object,
    layout: PropTypes.object,
};

type HorizontalLayoutState = {
    isMenuOpened: boolean,
};

class HorizontalLayout extends Component<HorizontalLayoutProps, HorizontalLayoutState> {
    constructor(props) {
        super(props);

        this.openMenu = this.openMenu.bind(this);

        this.state = {
            isMenuOpened: false,
        };
    }

    componentDidMount = () => {
        this.props.changeLayout(layoutConstants.LAYOUT_HORIZONTAL);
    };

    /**
     * Opens the menu - mobile
     */
    openMenu = e => {
        e.preventDefault();
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    };

    render() {
        // get the child view which we would like to render
        const children = this.props.children || null;

        return (
            <div className="app">
                <div className="wrapper">
                    <div className="content-page">
                        <div className="content">
                            <Suspense fallback={loading()}>
                                <Topbar
                                    {...this.props}
                                    isMenuOpened={this.state.isMenuOpened}
                                    openLeftMenuCallBack={this.openMenu}
                                    navCssClasses="topnav-navbar"
                                />
                            </Suspense>

                            <Suspense fallback={loading()}>
                                <Navbar {...this.props} isMenuOpened={this.state.isMenuOpened} />
                            </Suspense>

                            <Container fluid>
                                <Suspense fallback={loading()}>{children}</Suspense>
                            </Container>
                        </div>

                        <Suspense fallback={loading()}>
                            <Footer {...this.props} />
                        </Suspense>

                        <Suspense fallback={loading()}>
                            <RightSidebar {...this.props}>
                                <ThemeCustomizer />
                            </RightSidebar>
                        </Suspense>
                    </div>
                </div>
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
)(HorizontalLayout);
