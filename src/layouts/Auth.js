// @flow
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
// const Footer = React.lazy(() => import("./Footer"));
// loading
const loading = () => <div className="text-center"></div>;

type DefaultLayoutProps = {
    children?: any,
};

class DefaultLayout extends Component<DefaultLayoutProps> {
    /**
     * On component update - update layout
     */
    componentDidMount = () => {
        if (document.body) document.body.classList.add('authentication-bg');
    };

    /**
     * On component unmount - reset layout
     */
    componentWillUnmount = () => {
        if (document.body) document.body.classList.remove('authentication-bg');
    };

    render() {
        const children = this.props.children || null;
        return <Suspense fallback={loading()}>{children}</Suspense>;
    }
}

export default connect()(DefaultLayout);
