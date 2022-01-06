import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import PageTitle from '../../components/PageTitle';

// RangeSliders
class RangeSliders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVals: { 1: { textValue: 20, percent: 20 }, 2: { textValue: 20, percent: 20 } },
            selectedRanges: { 1: '20-45', 2: '20-45' },
        };

        this.onSlide = this.onSlide.bind(this);
        this.onSlide2 = this.onSlide2.bind(this);
    }

    onSlide = (index, value, percent) => {
        let selectedVals = { ...this.state.selectedVals };
        selectedVals[index] = {
            textValue: value[0].toFixed(2),
            percent: percent[0].toFixed(2),
        };
        this.setState({ selectedVals: selectedVals });
    };

    onSlide2 = (index, value) => {
        let selectedRanges = { ...this.state.selectedRanges };
        selectedRanges[index] = value[0].toFixed(2) + '-' + value[1].toFixed(2);
        this.setState({ selectedRanges: selectedRanges });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'UI', path: '/ui/rangesliders' },
                        { label: 'Extended UI', path: '/ui/rangesliders' },
                        { label: 'Range Sliders', path: '/ui/rangesliders', active: true },
                    ]}
                    title={'Range Sliders'}
                />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title">Single</h4>
                                <p className="text-muted font-14">Slider with single selecrtor</p>

                                <Nouislider
                                    range={{ min: 0, max: 100 }}
                                    start={[20]}
                                    connect
                                    onSlide={(render, handle, value, un, percent) => this.onSlide(1, value, percent)}
                                />
                                <p className="mt-2 mb-0">
                                    Value:{' '}
                                    {this.state.selectedVals ? (
                                        <span>
                                            {this.state.selectedVals[1]['textValue']}, &nbsp;
                                            {this.state.selectedVals[1]['percent']}%
                                        </span>
                                    ) : null}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title">Range</h4>
                                <p className="text-muted font-14">Slider with range selecrtor</p>

                                <Nouislider
                                    range={{ min: 10, max: 150 }}
                                    start={[20, 45]}
                                    connect
                                    onSlide={(render, handle, value, un, percent) => this.onSlide2(1, value)}
                                />
                                <p className="mt-2 mb-0">
                                    Value:{' '}
                                    {this.state.selectedRanges ? <span>{this.state.selectedRanges[1]}</span> : null}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title">Slider Step</h4>
                                <p className="text-muted font-14">Slider with step value</p>

                                <Nouislider
                                    range={{ min: 0, max: 100 }}
                                    start={[20]}
                                    step={10}
                                    connect
                                    onSlide={(render, handle, value, un, percent) => this.onSlide(2, value, percent)}
                                />
                                <p className="mt-2 mb-0">
                                    Value:{' '}
                                    {this.state.selectedVals ? (
                                        <span>
                                            {this.state.selectedVals[2]['textValue']}, &nbsp;
                                            {this.state.selectedVals[2]['percent']}%
                                        </span>
                                    ) : null}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <CardBody>
                                <h4 className="header-title">Range Slider with Steps</h4>
                                <p className="text-muted font-14">Slider with range selecrtor with fixed step value</p>

                                <Nouislider
                                    range={{ min: 10, max: 150 }}
                                    start={[20, 45]}
                                    step={15}
                                    connect
                                    onSlide={(render, handle, value, un, percent) => this.onSlide2(2, value)}
                                />
                                <p className="mt-2 mb-0">
                                    Value:{' '}
                                    {this.state.selectedRanges ? <span>{this.state.selectedRanges[2]}</span> : null}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default RangeSliders;
