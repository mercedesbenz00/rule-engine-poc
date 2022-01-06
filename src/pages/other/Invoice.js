import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import PageTitle from '../../components/PageTitle';
import logoImg from '../../assets/images/logo-light.png';
import orderBarcodeImg from '../../assets/images/barcode.png';

// invoice component

class Invoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: 'Cooper Hobson',
            notes:
                'Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.',
            order_date: 'Jan 17, 2018',
            order_status: 'Paid',
            order_id: '123456',
            order_barcode: orderBarcodeImg,
            billing_address: {
                line_1: 'Lynne K. Higby',
                line_2: '795 Folsom Ave, Suite 600',
                city: 'San Francisco',
                state: 'CA',
                zip: 94107,
                phone: '(123) 456-7890',
            },
            shipping_address: {
                line_1: 'Cooper Hobson',
                line_2: '795 Folsom Ave, Suite 600',
                city: 'San Francisco',
                state: 'CA',
                zip: 94107,
                phone: '(123) 456-7890',
            },
            items: [
                {
                    id: 1,
                    name: 'Laptop',
                    description: 'Brand Model VGN-TXN27N/B 11.1" Notebook PC',
                    qty: 1,
                    unit_cost: '$1799.00',
                    total: '$1799.00',
                },
                {
                    id: 2,
                    name: 'Warranty',
                    description: 'Two Year Extended Warranty - Parts and Labor',
                    qty: 3,
                    unit_cost: '$499.00',
                    total: '$1497.00',
                },
                {
                    id: 3,
                    name: 'LED',
                    description: '80cm (32) HD Ready LED TV',
                    qty: 2,
                    unit_cost: '$412.00',
                    total: '$824.00',
                },
            ],
            sub_total: '$4120.00',
            vat: '$515.00',
            total: '$4635.00',
        };
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[{ label: 'Pages', path: '/pages/invoice' }, { label: 'Invoice', active: true }]}
                    title={'Invoice'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-left mb-3">
                                        <img src={logoImg} alt="logo" height="18" />
                                    </div>
                                    <div className="float-right">
                                        <h4 className="m-0 d-print-none">Invoice</h4>
                                    </div>
                                </div>

                                <Row>
                                    <Col sm={6}>
                                        <div className="float-left mt-3">
                                            <p>
                                                <b>Hello, {this.state.customer}</b>
                                            </p>
                                            <p className="text-muted font-13">{this.state.notes}</p>
                                        </div>
                                    </Col>

                                    <Col sm={6}>
                                        <div className="mt-3 float-sm-right">
                                            <p className="font-13">
                                                <strong>Order Date: </strong> &nbsp;&nbsp;&nbsp; {this.state.order_date}
                                            </p>
                                            <p className="font-13">
                                                <strong>Order Status: </strong>{' '}
                                                <span className="badge badge-success float-right">
                                                    {this.state.order_status}
                                                </span>
                                            </p>
                                            <p className="font-13">
                                                <strong>Order ID: </strong>{' '}
                                                <span className="float-right">#{this.state.order_id}</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-4">
                                    <Col sm={4}>
                                        <h6>Billing Address</h6>
                                        <address>
                                            {this.state.billing_address.line_1}
                                            <br />
                                            {this.state.billing_address.line_2}
                                            <br />
                                            {this.state.billing_address.city}, {this.state.billing_address.state}{' '}
                                            {this.state.billing_address.zip}
                                            <br />
                                            <abbr title="Phone">P:</abbr> {this.state.billing_address.phone}
                                        </address>
                                    </Col>
                                    <Col sm={4}>
                                        <h6>Shipping Address</h6>
                                        <address>
                                            {this.state.shipping_address.line_1}
                                            <br />
                                            {this.state.shipping_address.line_2}
                                            <br />
                                            {this.state.shipping_address.city}, {this.state.shipping_address.state}{' '}
                                            {this.state.shipping_address.zip}
                                            <br />
                                            <abbr title="Phone">P:</abbr> {this.state.shipping_address.phone}
                                        </address>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="text-sm-right">
                                            <img src={this.state.order_barcode} alt="" className="img-fluid mr-2" />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className="table-responsive">
                                            <table className="table mt-4">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Item</th>
                                                        <th>Quantity</th>
                                                        <th>Unit Cost</th>
                                                        <th className="text-right">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.items.map((item, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>{idx + 1}</td>
                                                                <td>
                                                                    <b>{item.name}</b> <br />
                                                                    {item.description}
                                                                </td>
                                                                <td>{item.qty}</td>
                                                                <td>{item.unit_cost}</td>
                                                                <td className="text-right">{item.total}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={6}>
                                        <div className="clearfix pt-3">
                                            <h6 className="text-muted">Notes:</h6>
                                            <small>
                                                All accounts are to be paid within 7 days from receipt of invoice. To be
                                                paid by cheque or credit card or direct payment online. If account is
                                                not paid within 7 days the credits details supplied as confirmation of
                                                work undertaken will be charged the agreed quoted fee noted above.
                                            </small>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="float-right mt-3 mt-sm-0">
                                            <p>
                                                <b>Sub-total:</b>{' '}
                                                <span className="float-right">{this.state.sub_total}</span>
                                            </p>
                                            <p>
                                                <b>VAT (12.5):</b> <span className="float-right">{this.state.vat}</span>
                                            </p>
                                            <h3>{this.state.total} USD</h3>
                                        </div>
                                        <div className="clearfix"></div>
                                    </Col>
                                </Row>

                                <div className="d-print-none mt-4">
                                    <div className="text-right">
                                        <button
                                            className="btn btn-primary"
                                            onClick={e => {
                                                window.print();
                                            }}>
                                            <i className="mdi mdi-printer"></i> Print
                                        </button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Invoice;
