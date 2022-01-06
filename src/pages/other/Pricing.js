import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';

// Pricing component
const Pricing = () => {
    const plans = [
        {
            id: 1,
            name: 'Professional Pack',
            icon: 'dripicons-user',
            price: '$19',
            features: ['10 GB Storage', '500 GB Bandwidth', 'No Domain', '1 User', 'Email Support', '24x7 Support'],
            isRecommended: false,
        },
        {
            id: 2,
            name: 'Business Pack',
            icon: 'dripicons-briefcase',
            price: '$29',
            features: ['50 GB Storage', '900 GB Bandwidth', '2 Domain', '10 User', 'Email Support', '24x7 Support'],
            isRecommended: true,
        },
        {
            id: 3,
            name: 'Enterprise Pack',
            icon: 'dripicons-store',
            price: '$39',
            features: [
                '100 GB Storage',
                'Unlimited Bandwidth',
                '10 Domain',
                'Unlimited Users',
                'Email Support',
                '24x7 Support',
            ],
            isRecommended: false,
        },
    ];

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[{ label: 'Pages', path: '/pages/pricing' }, { label: 'Pricing', active: true }]}
                title={'Pricing'}
            />

            <Row className="justify-content-center">
                <Col xl={10}>
                    <div className="text-center">
                        <h3 className="mb-2">Our Plans and Pricing</h3>
                        <p className="text-muted w-50 m-auto">
                            We have plans and prices that fit your business perfectly. Make your client site a success
                            with our products.
                        </p>
                    </div>

                    <Row className="mt-sm-5 mt-3 mb-3">
                        {plans.map((plan, idx) => {
                            return (
                                <Col md={4} key={idx}>
                                    <Card
                                        className={classNames('card-pricing', {
                                            'card-pricing-recommended': plan.isRecommended,
                                        })}>
                                        <CardBody className="text-center">
                                            {plan.isRecommended && (
                                                <div className="card-pricing-plan-tag">Recommended</div>
                                            )}
                                            <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                                                {plan.name}
                                            </p>
                                            <i
                                                className={classNames(
                                                    'card-pricing-icon',
                                                    plan.icon,
                                                    'text-primary'
                                                )}></i>
                                            <h2 className="card-pricing-price">
                                                {plan.price} <span>/ Month</span>
                                            </h2>
                                            <ul className="card-pricing-features">
                                                {plan.features.map((feature, idx1) => {
                                                    return <li key={idx1}>{feature}</li>;
                                                })}
                                            </ul>
                                            <button className="btn btn-primary mt-4 mb-2 btn-rounded">
                                                Choose Plan
                                            </button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Pricing;
