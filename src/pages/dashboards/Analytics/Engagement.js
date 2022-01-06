// @flow
import React from 'react';
import { Card, CardBody, Button, Table } from 'reactstrap';

const Engagement = () => {
    return (
        <Card>
            <CardBody>
                <Button color="link" className="p-0 float-right mb-3">
                    Export <i className="mdi mdi-download ml-1"></i>
                </Button>
                <h4 className="header-title mb-2">Engagement Overview</h4>

                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                            <th>Duration (Secs)</th>
                            <th style={{ width: '30%' }}>Sessions</th>
                            <th style={{ width: '3    0%' }}>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0-30</td>
                            <td>2,250</td>
                            <td>4,250</td>
                        </tr>
                        <tr>
                            <td>31-60</td>
                            <td>1,501</td>
                            <td>2,050</td>
                        </tr>
                        <tr>
                            <td>61-120</td>
                            <td>750</td>
                            <td>1,600</td>
                        </tr>
                        <tr>
                            <td>121-240</td>
                            <td>540</td>
                            <td>1,040</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Engagement;
