// @flow
import React from 'react';
import { Card, CardBody, Button, Table, Progress } from 'reactstrap';

const Channels = () => {
    return (
        <Card>
            <CardBody>
                <Button color="link" className="p-0 float-right mb-3">
                    Export <i className="mdi mdi-download ml-1"></i>
                </Button>
                <h4 className="header-title mb-2">Channels</h4>

                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                            <th>Channel</th>
                            <th>Visits</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Direct</td>
                            <td>2,050</td>
                            <td>
                                <Progress value={65} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Organic Search</td>
                            <td>1,405</td>
                            <td>
                                <Progress value={45} style={{ height: '3px' }} color="info" />
                            </td>
                        </tr>
                        <tr>
                            <td>Refferal</td>
                            <td>750</td>
                            <td>
                                <Progress value={30} style={{ height: '3px' }} color="warning" />
                            </td>
                        </tr>
                        <tr>
                            <td>Social</td>
                            <td>540</td>
                            <td>
                                <Progress value={25} style={{ height: '3px' }} color="danger" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Channels;
