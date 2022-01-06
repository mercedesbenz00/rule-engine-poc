// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
    PaginationProvider,
    SizePerPageDropdownStandalone,
    PaginationTotalStandalone,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import classNames from 'classnames';

import PageTitle from '../../../components/PageTitle';
import { sellers } from './Data';

// Sellers table
const SellersTable = mainProps => {
    const customTotal = (from, to, size) => (
        <label className="react-bootstrap-table-pagination-total ml-2">
            Show {from} to {to} of {size}
        </label>
    );

    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
        <React.Fragment>
            <label className="d-inline mr-1">Display</label>
            <UncontrolledDropdown className="d-inline">
                <DropdownToggle caret tag="button" type="button" className="btn btn-outline-secondary btn-sm">
                    {currSizePerPage}
                </DropdownToggle>
                <DropdownMenu>
                    {options.map((option, idx) => (
                        <DropdownItem
                            key={idx}
                            type="button"
                            className={classNames({ active: currSizePerPage + '' === option.page + '' })}
                            onClick={() => onSizePerPageChange(option.page)}>
                            {option.text}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
            <label className="d-inline ml-1">sellers</label>
        </React.Fragment>
    );

    const { SearchBar } = Search;

    return (
        <PaginationProvider
            bootstrap4
            pagination={paginationFactory({
                ...mainProps.paginationOptions,
                paginationTotalRenderer: customTotal,
                custom: true,
                sizePerPageRenderer: sizePerPageRenderer,
            })}
            keyField="id"
            data={mainProps.data}
            columns={mainProps.columns}>
            {({ paginationProps, paginationTableProps }) => (
                <ToolkitProvider keyField="id" data={mainProps.data} columns={mainProps.columns} search>
                    {props => (
                        <React.Fragment>
                            <Row className="mt-2">
                                <Col md={6}>
                                    <SizePerPageDropdownStandalone {...paginationProps} />
                                </Col>
                                <Col md={6} className="text-sm-right mt-2 mt-sm-0">
                                    Search: <SearchBar {...props.searchProps} />
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                hover
                                classes="table-centered table-borderless"
                                headerClasses="thead-light"
                                wrapperClasses="table-responsive"
                                {...paginationTableProps}
                            />
                            <Row>
                                <Col>
                                    <PaginationTotalStandalone {...paginationProps} dataSize={sellers.length} />
                                </Col>
                                <Col className="react-bootstrap-table-pagination-list">
                                    <PaginationListStandalone {...paginationProps} />
                                </Col>
                            </Row>
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            )}
        </PaginationProvider>
    );
};

// main component
const Sellers = () => {
    // custom column render
    const NameColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <img src={row.image} alt={cell} className="mr-2 rounded-circle" />
                <Link to="/" className="text-body font-weight-semibold">
                    {cell}
                </Link>
            </React.Fragment>
        );
    };

    const ActionColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <Link to="/" className="action-icon">
                    {' '}
                    <i className="mdi mdi-square-edit-outline"></i>
                </Link>
                <Link to="/" className="action-icon">
                    {' '}
                    <i className="mdi mdi-delete"></i>
                </Link>
            </React.Fragment>
        );
    };

    const columns = [
        {
            dataField: 'name',
            text: 'Customer',
            sort: true,
            formatter: NameColumn,
            classes: 'table-user',
        },
        {
            dataField: 'store',
            text: 'Store',
            sort: false,
        },
        {
            dataField: 'products',
            text: 'Products',
            sort: false,
        },
        {
            dataField: 'balance',
            text: 'Wallet Balance',
            sort: false,
        },
        {
            dataField: 'created_on',
            text: 'Created On',
            sort: false,
        },
        {
            dataField: 'action',
            isDummyColumn: true,
            text: 'Action',
            sort: false,
            classes: 'table-action',
            formatter: ActionColumn,
        },
    ];

    const paginationOptions = {
        paginationSize: 5,
        pageStartIndex: 1,
        withFirstAndLast: false,
        showTotal: true,
        sizePerPageList: [
            {
                text: '10',
                value: 10,
            },
            {
                text: '25',
                value: 25,
            },
            {
                text: '50',
                value: 50,
            },
        ],
    };

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/sellers' },
                    { label: 'Sellers', path: '/apps/ecommerce/sellers', active: true },
                ]}
                title={'Sellers'}
            />

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col sm={4}>
                                    <Button color="danger" className="mb-2">
                                        <i className="mdi mdi-plus-circle mr-2"></i> Add Seller
                                    </Button>
                                </Col>

                                <Col sm={8}>
                                    <div className="text-sm-right">
                                        <Button color="success" className="mb-2 mr-1">
                                            <i className="mdi mdi-settings"></i>
                                        </Button>

                                        <Button color="light" className="mb-2 mr-1">
                                            Import
                                        </Button>

                                        <Button color="light" className="mb-2 mr-1">
                                            Export
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                            <SellersTable data={sellers} columns={columns} paginationOptions={paginationOptions} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Sellers;
