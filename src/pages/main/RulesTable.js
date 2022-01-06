import React from 'react';
import { Row, Col, Label, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone,
    PaginationTotalStandalone, PaginationListStandalone, } from 'react-bootstrap-table2-paginator';
import LangUtils from '../../helpers/langUtils';
import classNames from 'classnames';

const RulesTable = mainProps => {    
    const {user} = mainProps
    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total ml-2">
            {LangUtils.getLanguage(user.lang,"label.Show")} {from} {LangUtils.getLanguage(user.lang,"label.To")} {to} {LangUtils.getLanguage(user.lang,"label.Of")} {size}
        </span>        
    );

    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
        <React.Fragment>
            <UncontrolledDropdown className="d-inline dropdown-sm">
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
        </React.Fragment>
    );

    const paginationOptions = {

        paginationSize: 5,
        pageStartIndex: 1,
        showTotal: true,        
        sizePerPageList: [
            {
                text: '5',
                value: 5,
            },
            {
                text: '10',
                value: 10,
            },
            {
                text: '25',
                value: 25,
            },
        ],
    };

    const columns =  [        
            {
                dataField: 'remap_name',
                text: "Field Name",
                sort: true,
            },
            {
                dataField: 'remap_src_value',
                text: "Source Value",
                sort: false,
            },
            {
                dataField: 'remap_target_value',
                text: "Target Value",
                sort: false,
            }            
        ];
    const noDataIndication = () => {        
        return(
                <Label>{LangUtils.getLanguage(user.lang, 'message.No Data')}</Label>
        );
    }

    const defaultSorted = [
        {
            dataField:'id',
            order:'asc'
        }
    ]
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: false,
        selectionRenderer: ({ checked, disabled }) => {            
            return (
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        checked={checked}
                        disabled={disabled}
                        onChange={() => {}}
                    />
                    <label
                        className="custom-control-label"
                        onClick={e => {
                            e.preventDefault();
                        }}>                            
                    </label>
                </div>
            );
        },
        selectionHeaderRenderer: ({ indeterminate, ...rest }) => {
            return (
                <div className="custom-control custom-checkbox select-header">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        ref={input => {
                            if (input) input.indeterminate = indeterminate;
                        }}
                        {...rest}
                        onChange={() => {}}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                        onClick={e => {
                            e.preventDefault();
                        }}>                            
                    </label>
                </div>
            );
        },
        onSelect: mainProps.selectRow,
        onSelectAll: mainProps.selectAll
    };

    return (
        <PaginationProvider
            bootstrap4
            pagination={paginationFactory({
                ...paginationOptions,
                paginationTotalRenderer: customTotal,
                custom: true,
                sizePerPageRenderer: sizePerPageRenderer,
            })}
            keyField="id"
            data={mainProps.data}
            columns={mainProps.columns}>
            {({ paginationProps, paginationTableProps }) => (
            <ToolkitProvider keyField="id" data={mainProps.data} columns={columns} search exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                {props => (
                    <React.Fragment>
                        <BootstrapTable
                            {...props.baseProps}
                            bordered={false}
                            headerClasses="thead-light"
                            wrapperClasses="table-responsive"
                            selectRow={selectRow}
                            defaultSorted={defaultSorted}
                            noDataIndication={noDataIndication}
                            {...paginationTableProps}
                        />
                        <Row>
                            <Col>
                                <SizePerPageDropdownStandalone {...paginationProps} />
                                <PaginationTotalStandalone {...paginationProps} dataSize={mainProps.data.length} />
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

export default RulesTable;