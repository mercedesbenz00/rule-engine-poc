import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { Row, Col, Card, CardBody, Button, FormGroup, Label, Input, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone,
    PaginationTotalStandalone, PaginationListStandalone, } from 'react-bootstrap-table2-paginator';
import LangUtils from '../../helpers/langUtils';
import PageTitle from '../../components/PageTitle';
import { Gender, State, SelectAll } from '../../helpers/constant';
import { getManager, selectAllManager, selectManager, deleteManager } from '../../redux/actions';
import LoaderWidget from '../../components/Loader';
import classNames from 'classnames';

const TableWithSeletable = mainProps => {    
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

    const StatusColumn = (cell, row, rowIndex, extraData) => {        
        return (
            <React.Fragment>
                <span>
                    {row.state ? LangUtils.getLanguage(user.lang,"button.Active") :  LangUtils.getLanguage(user.lang,"button.Inactive")}
                </span>
            </React.Fragment>
        );
    };

    const PhoneNumberColumn = (cell, row, rowIndex, extraData) => {        
        return (
            <React.Fragment>
                <span>
                    <a href="#"><u style={{color:'#089e74'}}>{row.phone_number}</u></a>
                </span>
            </React.Fragment>
        );
    };    

    const SexColumn = (cell, row, rowIndex, extraData) => {        
        return (
            <React.Fragment>
                <span>{LangUtils.getLanguage(user.lang, Gender[row.sex].label)}</span>
            </React.Fragment>
        )
    }

    const columns =  [        
            {
                dataField: 'name',
                text: LangUtils.getLanguage(user.lang,"label.Manager Name"),
                sort: true,
            },
            {
                dataField: 'sex',
                text: LangUtils.getLanguage(user.lang,"label.Gender"),
                sort: true,
                formatter:SexColumn,
            },
            {
                dataField: 'phone_number',
                text: LangUtils.getLanguage(user.lang,"label.Phone Number"),
                sort: true,
                formatter:PhoneNumberColumn,
            },
            {
                dataField: 'company_name',
                text: LangUtils.getLanguage(user.lang,"label.Company Name"),
                sort: true,
            },
            {
                dataField: 'state',
                text: LangUtils.getLanguage(user.lang,"label.State"),
                sort: true,
                formatter: StatusColumn,
            }, 
            {
                dataField: 'hobby',
                text: LangUtils.getLanguage(user.lang,"label.Hobby")
            },            
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

class Managers extends Component {
    _isMounted = false;

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected_manager :{},                          
            company_name :'',
            selected_managers:[]             
        }
    }

    componentWillMount() {
        this.props.getManager('')   
    }

    componentDidMount() {
        this._isMounted = true;       
             
    }

    componentWillUnmount() {
        this._isMounted = false;
    }    

    getOptions = (type) => {

        const {user} = this.props
        var options = []

        options.push({
            value:SelectAll,
            label:LangUtils.getLanguage(user.lang, "select.SelectAll")
        })
        if (type === 'state') {
            State.map(state => {
                options.push({
                    value:state.value,
                    label:LangUtils.getLanguage(user.lang, state.label)
                })
            })
        }

        return options;
    }    
    
    paginationOptions = () => {

        const {manager} = this.props
        return{
            paginationSize: 5,
            pageStartIndex: 1,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
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
                {
                    text: 'All',
                    value: manager.length,
                },
            ],
        }; 
    }

    search = () => {               
        this.props.getManager(this.state.company_name)
    }

    selectRow = (row,selected) => {    
        this.props.selectManager(row, selected) 
    }

    selectAll = (selected) => {
        this.props.selectAllManager(selected)
    }

    delete = () => {
        const{ selected_managers } = this.props   
        this.props.deleteManager(selected_managers)
    }
    
    render(){        
        const {user, manager, selected_managers, loading} = this.props    
        const { company_name } = this.state   
        return (        
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Main Management'), path: '/main/manager-info' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Manager Information'), path: '/main/manager-info', active: true },
                    ]}
                    title={LangUtils.getLanguage(user.lang, 'navigation.Manager Information')}
                />    
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            { loading && <LoaderWidget /> }
                                <Row>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label for="text" className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang,"label.Company Name")}</Label>
                                            <Input type="text" className="col-8" placeholder={LangUtils.getLanguage(user.lang,"label.Company Name")} 
                                                value={company_name} onChange={(e) => {this.setState({company_name:e.target.value})}}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label for="text" className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang,"label.State")}</Label>
                                            <Select
                                                className="react-select col-8"
                                                classNamePrefix="react-select"
                                                placeholder={LangUtils.getLanguage(user.lang, 'select.SelectAll')}
                                                options={this.getOptions('state')}>                                                  
                                            </Select>
                                        </FormGroup>
                                    </Col>                                
                                    <Col xl={1} lg={4} md={6}>                                        
                                        <Button size="md" color="success" className="mb-2 mr-1" onClick={this.search}>
                                            {LangUtils.getLanguage(user.lang, 'button.Search')}
                                        </Button>                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <div className="text-sm-left mt-sm-1">
                                            <Link to="/main/manager-detail/add">
                                                <Button size="md" color="primary" className="mb-2 mr-1">
                                                    <i className="mdi mdi-plus"></i>{LangUtils.getLanguage(user.lang,"button.Add Manager")}
                                                </Button>
                                            </Link>                         
                                            <Link to="/main/manager-detail/edit">
                                                <Button size="md" color="primary" className="mb-2 mr-1" disabled={selected_managers.length === 0}>
                                                    <i className="uil uil-edit-alt"></i>{LangUtils.getLanguage(user.lang,"button.Edit")}
                                                </Button>                       
                                            </Link> 
                                            <Button size="md" color="warning" className="mb-2 mr-1" disabled={selected_managers.length === 0} onClick = {() => this.delete()}>
                                                    {LangUtils.getLanguage(user.lang,"button.Delete")}
                                            </Button>                                       
                                            <Button size="md" color="light" className="mb-2 mr-1" disabled>
                                                {LangUtils.getLanguage(user.lang,"button.Active")}
                                            </Button>
                                            <Button size="md" color="light" className="mb-2 mr-1" disabled>
                                                <i className="mdi mdi-minus-circle-outline"></i>{LangUtils.getLanguage(user.lang,"button.Inactive")}
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>    
                                <TableWithSeletable
                                    bootstrap4
                                    selectRow={this.selectRow}
                                    selectAll={this.selectAll}
                                    data={manager}                                    
                                    wrapperClasses="table-responsive"
                                    user ={user}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

    return {
        user:state.Auth.user,
        manager:state.Main.manager,
        selected_managers:state.Main.selected_manager ,
        loading:state.Main.loading,         
    };

};

export default withRouter(
    connect(
        mapStateToProps,
        { getManager, selectAllManager, selectManager, deleteManager }
    )(Managers)
);
