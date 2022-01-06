// @flow
import React from 'react';
import { Card, CardBody, Button, Table, Progress } from 'reactstrap';

const Social = () => {
    return (
        <Card>
            <CardBody>
                <Button color="link" className="p-0 float-right mb-3">
                    Export <i className="mdi mdi-download ml-1"></i>
                </Button>
                <h4 className="header-title mb-2">Social Media Traffic</h4>

                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                            <th>Network</th>
                            <th>Visits</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Facebook</td>
                            <td>2,250</td>
                            <td>
                                <Progress value={65} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Instagram</td>
                            <td>1,501</td>
                            <td>
                                <Progress value={45} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Twitter</td>
                            <td>750</td>
                            <td>
                                <Progress value={30} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td>540</td>
                            <td>
                                <Progress value={25} style={{ height: '3px' }} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Social;
