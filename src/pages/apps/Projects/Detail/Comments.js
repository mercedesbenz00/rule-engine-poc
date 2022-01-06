// @flow
import React from 'react';
import { Card, CardBody } from 'reactstrap';

import avatar2 from '../../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../../assets/images/users/avatar-8.jpg';

const Comments = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="mt-0 mb-3">Comments (258)</h4>
                <textarea
                    className="form-control form-control-light mb-2"
                    placeholder="Write message"
                    id="example-textarea"
                    rows="3"></textarea>
                <div className="text-right">
                    <div className="btn-group mb-2">
                        <button type="button" className="btn btn-link btn-sm text-muted font-18">
                            <i className="dripicons-paperclip"></i>
                        </button>
                    </div>

                    <div className="btn-group mb-2 ml-2">
                        <button type="button" className="btn btn-primary btn-sm">
                            Submit
                        </button>
                    </div>
                </div>

                <div className="media mt-2">
                    <img className="mr-3 avatar-sm rounded-circle" src={avatar3} alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">Jeremy Tomlinson</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                        <div className="media mt-3">
                            <a className="pr-3" href="/">
                                <img src={avatar2} className="avatar-sm rounded-circle" alt="" />
                            </a>
                            <div className="media-body">
                                <h5 className="mt-0">Kathleen Thomas</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-2">
                    <a href="/" className="text-danger">
                        Load more{' '}
                    </a>
                </div>
            </CardBody>
        </Card>
    );
};

export default Comments;
