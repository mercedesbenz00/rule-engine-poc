// @flow
import React from 'react';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table,
} from 'reactstrap';

const Products = () => {
    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-linkarrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Export as PDF</DropdownItem>
                        <DropdownItem>Export as CSV</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-2">Top Selling Products</h4>

                <Table hover responsive className="mb-0 mt-2">
                    <tbody>
                        <tr>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">ASOS Ridley High Waist</h5>
                                <span className="text-muted font-13">07 April 2018</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$79.49</h5>
                                <span className="text-muted font-13">Price</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">82</h5>
                                <span className="text-muted font-13">Quantity</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$6,518.18</h5>
                                <span className="text-muted font-13">Amount</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">Marco Lightweight Shirt</h5>
                                <span className="text-muted font-13">25 March 2018</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$128.50</h5>
                                <span className="text-muted font-13">Price</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">37</h5>
                                <span className="text-muted font-13">Quantity</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$4,754.50</h5>
                                <span className="text-muted font-13">Amount</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">Half Sleeve Shirt</h5>
                                <span className="text-muted font-13">17 March 2018</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$39.99</h5>
                                <span className="text-muted font-13">Price</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">64</h5>
                                <span className="text-muted font-13">Quantity</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$2,559.36</h5>
                                <span className="text-muted font-13">Amount</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">Lightweight Jacket</h5>
                                <span className="text-muted font-13">12 March 2018</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$20.00</h5>
                                <span className="text-muted font-13">Price</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">184</h5>
                                <span className="text-muted font-13">Quantity</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$3,680.00</h5>
                                <span className="text-muted font-13">Amount</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">Marco Shoes</h5>
                                <span className="text-muted font-13">05 March 2018</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$28.49</h5>
                                <span className="text-muted font-13">Price</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">69</h5>
                                <span className="text-muted font-13">Quantity</span>
                            </td>
                            <td>
                                <h5 className="font-14 mb-1 font-weight-normal">$1,965.81</h5>
                                <span className="text-muted font-13">Amount</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Products;
