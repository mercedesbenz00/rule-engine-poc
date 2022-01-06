import React, { Component } from 'react';
import { Row, Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import PageTitle from '../../../../components/PageTitle';
import productImg5 from '../../../../assets/images/products/product-5.jpg';
import productImg2 from '../../../../assets/images/products/product-1.jpg';
import productImg3 from '../../../../assets/images/products/product-3.jpg';
import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';
import Summary from './Summary';

// Checkout
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            cart: {
                items: [
                    {
                        id: 1,
                        image: productImg2,
                        name: 'Amazing Modern Chair',
                        size: 'Large',
                        color: 'Light Green',
                        price: 148.66,
                        qty: 5,
                        total: 743.3,
                    },
                    {
                        id: 2,
                        image: productImg5,
                        name: 'Biblio Plastic Armchair',
                        size: 'Small',
                        color: 'Brown',
                        price: 99,
                        qty: 2,
                        total: 198.0,
                    },
                    {
                        id: 3,
                        image: productImg3,
                        name: 'Designer Awesome Chair',
                        size: 'Medium',
                        color: 'Green',
                        price: 49.99,
                        qty: 3,
                        total: 499.9,
                    },
                ],
                sub_total: 1071.29,
                shipping: 0,
                total: 1071.29,
            },
        };
        this.updateShipping = this.updateShipping.bind(this);
    }

    /**
     * Toggle the tabe
     */
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    /**
     * Update the shipping cost
     */
    updateShipping = shippingCost => {
        var cart = { ...this.state.cart };
        cart['shipping'] = shippingCost;
        cart['total'] = cart['sub_total'] + shippingCost;
        this.setState({ cart });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'eCommerce', path: '/apps/ecommerce/checkout' },
                        { label: 'Checkout', path: '/apps/ecommerce/checkout', active: true },
                    ]}
                    title={'Checkout'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Nav tabs className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classnames('rounded-0', {
                                                active: this.state.activeTab === '1',
                                            })}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}>
                                            <i className={classnames('mdi mdi-account-circle', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Billing Info</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classnames('rounded-0', {
                                                active: this.state.activeTab === '2',
                                            })}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}>
                                            <i className={classnames('mdi mdi-truck-fast', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Shipping Info</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classnames('rounded-0', {
                                                active: this.state.activeTab === '3',
                                            })}
                                            onClick={() => {
                                                this.toggle('3');
                                            }}>
                                            <i className={classnames('mdi mdi-cash-multiple', 'font-18')}></i>
                                            <span className="d-none d-lg-block">Payment Info</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                                <Row>
                                    <Col lg={8}>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <Billing />
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Shipping updateShipping={this.updateShipping} />
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <Payment />
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                    <Col lg={4}>
                                        <Summary cart={this.state.cart} />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Checkout;
