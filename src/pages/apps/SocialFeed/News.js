import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Media } from 'reactstrap';

const News = () => {
    const news = [
        {
            id: 1,
            title: 'Golden Globes',
            description: 'The 27 Best moments from the Golden Globe Awards',
        },
        {
            id: 2,
            title: 'World Cricket',
            description: 'India has won ICC T20 World Cup Yesterday',
        },
        {
            id: 3,
            title: 'Antartica',
            description: 'Metling of Totten Glacier could cause high risk to areas near by sea',
        },
    ];

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <UncontrolledDropdown className="float-right">
                        <DropdownToggle tag="button" className="btn btn-sm btn-link no-arrow card-drop p-0">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </DropdownToggle>

                        <DropdownMenu right>
                            <DropdownItem>Today</DropdownItem>
                            <DropdownItem>Yesterday</DropdownItem>
                            <DropdownItem>Last Week</DropdownItem>
                            <DropdownItem>Last Month</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <h4 className="header-title mb-1">Trending</h4>

                    {news.map((item, index) => {
                        return (
                            <Media key={index} className="mt-3">
                                <i className="uil uil-arrow-growth mr-2 font-18 text-primary"></i>
                                <Media body>
                                    <Link className="mt-1 font-14" to="#">
                                        <strong>{item.title}:</strong>
                                        <span className="text-muted">{item.description}</span>
                                    </Link>
                                </Media>
                            </Media>
                        );
                    })}
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default News;
