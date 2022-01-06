import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Progress } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import Rating from '../../../components/Rating';

import productImg1 from '../../../assets/images/products/product-5.jpg';
import productImg2 from '../../../assets/images/products/product-1.jpg';
import productImg3 from '../../../assets/images/products/product-6.jpg';
import productImg4 from '../../../assets/images/products/product-3.jpg';

// Stock Table
const Stocks = props => {
    return (
        <React.Fragment>
            <div className="table-responsive mt-4">
                <table className="table table-bordered table-centered mb-0">
                    <thead className="thead-light">
                        <tr>
                            <th>Outlets</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ASOS Ridley Outlet - NYC</td>
                            <td>$139.58</td>
                            <td>
                                <div className="progress-w-percent mb-0">
                                    <span className="progress-value">478 </span>
                                    <Progress value={56} className="progress-sm" />
                                </div>
                            </td>
                            <td>$1,89,547</td>
                        </tr>
                        <tr>
                            <td>Marco Outlet - SRT</td>
                            <td>$149.99</td>
                            <td>
                                <div className="progress-w-percent mb-0">
                                    <span className="progress-value">73 </span>
                                    <Progress value={16} className="progress-sm" color="danger" />
                                </div>
                            </td>
                            <td>$87,245</td>
                        </tr>
                        <tr>
                            <td>Chairtest Outlet - HY</td>
                            <td>$135.87</td>
                            <td>
                                <div className="progress-w-percent mb-0">
                                    <span className="progress-value">781 </span>
                                    <Progress value={72} className="progress-sm" color="success" />
                                </div>
                            </td>
                            <td>$5,87,478</td>
                        </tr>
                        <tr>
                            <td>Nworld Group - India</td>
                            <td>$159.89</td>
                            <td>
                                <div className="progress-w-percent mb-0">
                                    <span className="progress-value">815 </span>
                                    <Progress value={89} className="progress-sm" color="success" />
                                </div>
                            </td>
                            <td>$55,781</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

type ProductDetailsProps = {};

type ProductDetailsState = {
    product?: {
        name?: string,
        addedOn?: string,
        status?: string,
        price?: string,
        description?: string,
        stock?: string,
        noOfOrders?: string,
        revenue?: string,
        rating?: number,
    },
    selectedProductImg?: any,
};

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {
    constructor(props: ProductDetailsProps) {
        super(props);

        this.handleImgChange = this.handleImgChange.bind(this);

        this.state = {
            product: {
                name: 'Amazing Modern Chair (Orange)',
                addedOn: '09/12/2018',
                status: 'Instock',
                price: '$139.58',
                description:
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                stock: '1,784',
                noOfOrders: '5,458',
                revenue: '$8,57,014',
                rating: 4.5,
            },
            selectedProductImg: productImg1,
            initialQtyToBuy: 1,
        };
    }

    /**
     * Handles the image changes
     */
    handleImgChange = (e: any, selectedImg: any) => {
        e.preventDefault();
        this.setState({ selectedProductImg: selectedImg });
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'eCommerce', path: '/apps/ecommerce/details' },
                        { label: 'Product Details', path: '/apps/ecommerce/details', active: true },
                    ]}
                    title={'Product Details'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={5}>
                                        <Link to="/" className="text-center d-block mb-4">
                                            <img
                                                src={this.state.selectedProductImg}
                                                className="img-fluid"
                                                style={{ maxWidth: '280px' }}
                                                alt="Product-img"
                                            />
                                        </Link>

                                        <div className="d-lg-flex d-none justify-content-center">
                                            <Link
                                                to="/"
                                                onMouseOver={e => {
                                                    this.handleImgChange(e, productImg1);
                                                }}
                                                onClick={e => {
                                                    this.handleImgChange(e, productImg1);
                                                }}>
                                                <img
                                                    src={productImg1}
                                                    className="img-fluid img-thumbnail p-2"
                                                    style={{ maxWidth: '75px' }}
                                                    alt="Product-img"
                                                />
                                            </Link>
                                            <Link
                                                to="/"
                                                className="ml-2"
                                                onMouseOver={e => {
                                                    this.handleImgChange(e, productImg2);
                                                }}
                                                onClick={e => {
                                                    this.handleImgChange(e, productImg2);
                                                }}>
                                                <img
                                                    src={productImg2}
                                                    className="img-fluid img-thumbnail p-2"
                                                    style={{ maxWidth: '75px' }}
                                                    alt="Product-img"
                                                />
                                            </Link>
                                            <Link
                                                to="/"
                                                className="ml-2"
                                                onMouseOver={e => {
                                                    this.handleImgChange(e, productImg3);
                                                }}
                                                onClick={e => {
                                                    this.handleImgChange(e, productImg3);
                                                }}>
                                                <img
                                                    src={productImg3}
                                                    className="img-fluid img-thumbnail p-2"
                                                    style={{ maxWidth: '75px' }}
                                                    alt="Product-img"
                                                />
                                            </Link>
                                            <Link
                                                to="/"
                                                className="ml-2"
                                                onMouseOver={e => {
                                                    this.handleImgChange(e, productImg4);
                                                }}
                                                onClick={e => {
                                                    this.handleImgChange(e, productImg4);
                                                }}>
                                                <img
                                                    src={productImg4}
                                                    className="img-fluid img-thumbnail p-2"
                                                    style={{ maxWidth: '75px' }}
                                                    alt="Product-img"
                                                />
                                            </Link>
                                        </div>
                                    </Col>

                                    <Col lg={7}>
                                        <form className="pl-lg-4">
                                            <h3 className="mt-0">
                                                {this.state.product.name}
                                                <Link to="/" className="text-muted">
                                                    <i className="mdi mdi-square-edit-outline ml-2"></i>
                                                </Link>
                                            </h3>
                                            <p className="mb-1">Added Date: {this.state.product.addedOn}</p>
                                            <Rating value={this.state.product.rating} />

                                            <div className="mt-3">
                                                <h4>
                                                    <span className="badge badge-success-lighten">
                                                        {this.state.product.status}
                                                    </span>
                                                </h4>
                                            </div>

                                            <div className="mt-4">
                                                <h6 className="font-14">Retail Price:</h6>
                                                <h3> {this.state.product.price}</h3>
                                            </div>

                                            <div className="mt-4">
                                                <h6 className="font-14">Quantity</h6>
                                                <div className="d-flex">
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={this.state.initialQtyToBuy}
                                                        className="form-control"
                                                        placeholder="Qty"
                                                        style={{ width: '90px' }}
                                                        onChange={e => {
                                                            this.setState({ initialQtyToBuy: e.target.val });
                                                        }}
                                                    />
                                                    <button type="button" className="btn btn-danger ml-2">
                                                        <i className="mdi mdi-cart mr-1"></i> Add to cart
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <h6 className="font-14">Description:</h6>
                                                <p>{this.state.product.description}</p>
                                            </div>

                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h6 className="font-14">Available Stock:</h6>
                                                        <p className="text-sm lh-150">{this.state.product.stock}</p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h6 className="font-14">Number of Orders:</h6>
                                                        <p className="text-sm lh-150">
                                                            {this.state.product.noOfOrders}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h6 className="font-14">Revenue:</h6>
                                                        <p className="text-sm lh-150">{this.state.product.revenue}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>

                                <Stocks />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ProductDetails;
