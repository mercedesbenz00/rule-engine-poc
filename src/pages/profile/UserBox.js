// @flow
import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

import profileImg from '../../assets/images/users/avatar-2.jpg';

const UserBox = () => {
    return (
        <Card className="">
            <CardBody className="profile-user-box">
                <Row>
                    <Col sm={8}>
                        <div className="media">
                            <span className="float-left m-2 mr-4">
                                <img
                                    src={profileImg}
                                    style={{ height: '100px' }}
                                    alt=""
                                    className="rounded-circle img-thumbnail"
                                />
                            </span>
                            <div className="media-body">
                                <h4 className="mt-1 mb-1">Michael Franklin</h4>
                                <p className="font-13 text-dark-50"> Authorised Brand Seller</p>

                                <ul className="mb-0 list-inline">
                                    <li className="list-inline-item mr-3">
                                        <h5 className="mb-1">$ 25,184</h5>
                                        <p className="mb-0 font-13 text-dark-50">Total Revenue</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-1">5482</h5>
                                        <p className="mb-0 font-13 text-dark-50">Number of Orders</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className="text-center mt-sm-0 mt-3 text-sm-right">
                            <button type="button" className="btn btn-primary">
                                <i className="mdi mdi-account-edit mr-1"></i> Edit Profile
                            </button>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default UserBox;
