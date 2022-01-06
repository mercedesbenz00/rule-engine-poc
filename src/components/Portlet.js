// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardBody, CardTitle, Collapse, Button } from 'reactstrap';

type PortletProps = {
    className?: string,
    children?: PropTypes.object,
};

type PortletState = {
    collapse?: boolean,
    loading?: boolean,
    hidden?: boolean,
};

/**
 * Portlet
 */
class Portlet extends Component<PortletProps, PortletState> {
    constructor(props: PortletProps) {
        super(props);
        this.toggleContent = this.toggleContent.bind(this);
        this.reloadContent = this.reloadContent.bind(this);
        this.remove = this.remove.bind(this);

        this.state = { collapse: true, loading: false, hidden: false };
    }

    /**
     * Toggle the body
     */
    /*:: toggleContent: () => void */
    toggleContent() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    /**
     * Reload the content
     */
    /*:: reloadContent: () => void */
    reloadContent() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 500 + 300 * (Math.random() * 5));
    }

    /**
     * remove the portlet
     */
    /*:: remove: () => void */
    remove() {
        this.setState({ hidden: true });
    }

    render() {
        const children = this.props.children || null;

        return !this.state.hidden ? (
            <Card className={classNames(this.props.className)}>
                {this.state.loading && (
                    <div className="card-disabled">
                        <div className="card-portlets-loader"></div>
                    </div>
                )}

                <CardBody>
                    <div className="card-widgets">
                        <Button color="link" className="card-action p-0" onClick={this.reloadContent}>
                            <i className="mdi mdi-refresh"></i>
                        </Button>
                        <Button color="link" className="card-action p-0" onClick={this.toggleContent}>
                            <i
                                className={classNames('mdi', {
                                    'mdi-minus': this.state.collapse,
                                    'mdi-plus': !this.state.collapse,
                                })}></i>
                        </Button>
                        <Button color="link" className="card-action p-0" onClick={this.remove}>
                            <i className="mdi mdi-close"></i>
                        </Button>
                    </div>

                    <CardTitle tag="h5" className="mb-0">
                        Card title
                    </CardTitle>

                    <Collapse isOpen={this.state.collapse} className="pt-3">
                        {children}
                    </Collapse>
                </CardBody>
            </Card>
        ) : null;
    }
}

export default Portlet;
