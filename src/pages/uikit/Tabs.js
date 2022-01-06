// @flow
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import PageTitle from '../../components/PageTitle';

type TabsProps = {};

type TabsState = {
    activeTab?: string,
};
class Tabs extends Component<TabsProps, TabsState> {
    constructor(props: TabsProps) {
        super(props);
        this.state = { activeTab: '2' };
        this.toggle = this.toggle.bind(this);
    }

    /**
     * Toggle the tab
     */
    toggle = (tab: string) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        const tabContents = [
            {
                id: '1',
                title: 'Home',
                icon: 'mdi mdi-home-variant',
                text:
                    'Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
            {
                id: '2',
                title: 'Profile',
                icon: 'mdi mdi-account-circle',
                text:
                    'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
            {
                id: '3',
                title: 'Settings',
                icon: 'mdi mdi-settings-outline',
                text:
                    'Settings - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
        ];

        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'UI', path: '/ui/tabs' },
                        { label: 'Base UI', path: '/ui/tabs' },
                        { label: 'Tabs', path: '/ui/tabs', active: true },
                    ]}
                    title={'Tabs'}
                />

                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title mb-3">Default Tabs</h4>

                                <Nav tabs>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({ active: this.state.activeTab === tab.id })}
                                                    onClick={() => {
                                                        this.toggle(tab.id);
                                                    }}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-lg-none',
                                                            'd-block',
                                                            'mr-1'
                                                        )}></i>
                                                    <span className="d-none d-lg-block">{tab.title}</span>
                                                </NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <TabPane tabId={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        );
                                    })}
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* tab justified */}
                    <Col lg={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title mb-3">Tabs Justified</h4>

                                <Nav tabs className="nav-pills bg-nav-pills nav-justified">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({ active: this.state.activeTab === tab.id })}
                                                    onClick={() => {
                                                        this.toggle(tab.id);
                                                    }}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-lg-none',
                                                            'd-block',
                                                            'mr-1'
                                                        )}></i>
                                                    <span className="d-none d-lg-block">{tab.title}</span>
                                                </NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <TabPane tabId={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        );
                                    })}
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                {/* vertical tab */}
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title mb-3">Tabs Vertical Left</h4>

                                <Row>
                                    <Col sm={3} className="mb-2 mb-sm-0">
                                        <Nav tabs vertical pills className="flex-column">
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <NavItem key={index}>
                                                        <NavLink
                                                            href="#"
                                                            className={classnames({
                                                                active: this.state.activeTab === tab.id,
                                                            })}
                                                            onClick={() => {
                                                                this.toggle(tab.id);
                                                            }}>
                                                            <i
                                                                className={classnames(
                                                                    tab.icon,
                                                                    'd-lg-none',
                                                                    'd-block',
                                                                    'mr-1'
                                                                )}></i>
                                                            <span className="d-none d-lg-block">{tab.title}</span>
                                                        </NavLink>
                                                    </NavItem>
                                                );
                                            })}
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <TabContent activeTab={this.state.activeTab}>
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <TabPane tabId={tab.id} key={index}>
                                                        <Row>
                                                            <Col sm="12">
                                                                <p className="mt-3">{tab.text}</p>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                );
                                            })}
                                        </TabContent>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title mb-3">Tabs Vertical Right</h4>

                                <Row>
                                    <Col sm={9}>
                                        <TabContent activeTab={this.state.activeTab}>
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <TabPane tabId={tab.id} key={index}>
                                                        <Row>
                                                            <Col sm="12">
                                                                <p className="mt-3">{tab.text}</p>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                );
                                            })}
                                        </TabContent>
                                    </Col>

                                    <Col sm={3} className="mb-2 mb-sm-0">
                                        <Nav tabs vertical pills className="flex-column">
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <NavItem key={index}>
                                                        <NavLink
                                                            href="#"
                                                            className={classnames({
                                                                active: this.state.activeTab === tab.id,
                                                            })}
                                                            onClick={() => {
                                                                this.toggle(tab.id);
                                                            }}>
                                                            <i
                                                                className={classnames(
                                                                    tab.icon,
                                                                    'd-lg-none',
                                                                    'd-block',
                                                                    'mr-1'
                                                                )}></i>
                                                            <span className="d-none d-lg-block">{tab.title}</span>
                                                        </NavLink>
                                                    </NavItem>
                                                );
                                            })}
                                        </Nav>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                {/* Bordered Tabs */}
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title mb-3">Tabs Bordered</h4>

                                <Nav tabs className="nav-bordered">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({ active: this.state.activeTab === tab.id })}
                                                    onClick={() => {
                                                        this.toggle(tab.id);
                                                    }}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-lg-none',
                                                            'd-block',
                                                            'mr-1'
                                                        )}></i>
                                                    <span className="d-none d-lg-block">{tab.title}</span>
                                                </NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <TabPane tabId={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        );
                                    })}
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* tab justified */}
                    <Col lg={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title mb-3">Tabs Bordered Justified</h4>

                                <Nav tabs className="nav-justified nav-bordered">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({ active: this.state.activeTab === tab.id })}
                                                    onClick={() => {
                                                        this.toggle(tab.id);
                                                    }}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-lg-none',
                                                            'd-block',
                                                            'mr-1'
                                                        )}></i>
                                                    <span className="d-none d-lg-block">{tab.title}</span>
                                                </NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <TabPane tabId={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        );
                                    })}
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Tabs;
