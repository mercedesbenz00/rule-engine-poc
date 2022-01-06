// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';

type PageTitleProps = {
    breadCrumbItems: PropTypes.object,
    title: string,
};

/**
 * PageTitle
 */
const PageTitle = (props: PageTitleProps) => {
    return (
        <Row>
            <Col>
                <div className="page-title-box">
                    <div className="page-title-right">
                        <Breadcrumb>
                            {props.breadCrumbItems.map((item, index) => {
                                return item.active ? (
                                    <BreadcrumbItem active key={index}>
                                        {item.label}
                                    </BreadcrumbItem>
                                ) : (
                                    <BreadcrumbItem key={index}>
                                        <Link to={item.path}>{item.label}</Link>
                                    </BreadcrumbItem>
                                );
                            })}
                        </Breadcrumb>
                    </div>
                    <h4 className="page-title">{props.title}</h4>
                </div>
            </Col>
        </Row>
    );
};

export default PageTitle;
