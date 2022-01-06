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
import { Property, SelectAll, State, Types } from '../../helpers/constant';
import { getAudit, selectAllAudit, selectAudit } from '../../redux/actions';
import LoaderWidget from '../../components/Loader';
import classNames from 'classnames';
import moment from 'moment'

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

    const AppCodeColumn = (cell, row, rowIndex, extraData) => {        
        return (
            <React.Fragment>
                <span>
                    <a href="#"><u style={{color:'#089e74'}}>{row.code}</u></a>
                </span>
            </React.Fragment>
        );
    };    

    const PropertyColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <span>{LangUtils.getLanguage(user.lang, Property[row.property].label)}</span>
            </React.Fragment>
        )
    }
    
    const TypeColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <span>{LangUtils.getLanguage(user.lang, Types[row.type].label)}</span>
            </React.Fragment>
        )
    }
    
    const StateColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <span>{LangUtils.getLanguage(user.lang, State[row.state].label)}</span>
            </React.Fragment>
        )
    }

    const EstablishDateColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <span>{moment(row.establish_date).format('YYYY-MM-DD')}</span>
            </React.Fragment>
        )
    }

    const StartDateTimeColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <span>{moment(row.start_date).format('YYYY-MM-DD hh:mm')}</span>
            </React.Fragment>
        )
    }

    const ReviewDateTimeColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <span>{moment(row.review_date).format('YYYY-MM-DD hh:mm')}</span>
            </React.Fragment>
        )
    }

    const columns =  [   
            {
                dataField: 'code',
                text: LangUtils.getLanguage(user.lang,"label.Application Code"),
                sort: true,
                formatter: AppCodeColumn
            },
            {
                dataField: 'source',
                text: LangUtils.getLanguage(user.lang,"label.Application Source"),
                sort: true,
            },     
            {
                dataField: 'name',
                text: LangUtils.getLanguage(user.lang, 'label.Name'),
                sort: true,
            },
            {
                dataField: 'property',
                text: LangUtils.getLanguage(user.lang, 'label.Property'),
                sort: true,
                formatter: PropertyColumn,
            },
            {
                dataField: 'type',
                text: LangUtils.getLanguage(user.lang, 'label.Type'),
                sort: true,
                formatter: TypeColumn,
            },
            {
                dataField: 'town',
                text: LangUtils.getLanguage(user.lang, 'label.Town'),
                sort: true,
            },
            {
                dataField: 'establish_date',
                text: LangUtils.getLanguage(user.lang, 'label.Establish Date'),
                sort: true,
                formatter:EstablishDateColumn
            },
            {
                dataField: 'corporation',
                text: LangUtils.getLanguage(user.lang, 'label.Corporation'),
                sort: true,
            },
            {
                dataField: 'state',
                text: LangUtils.getLanguage(user.lang, 'label.State'),
                sort: true,
                formatter: StateColumn,
            },
            {
                dataField: 'sponsor',
                text: LangUtils.getLanguage(user.lang, 'label.Sponsor'),
                sort: true,
            },
            {
                dataField: 'start_time',
                text: LangUtils.getLanguage(user.lang, 'label.Start Time'),
                sort: true,
                formatter: StartDateTimeColumn,
            },
            {
                dataField: 'review_time',
                text: LangUtils.getLanguage(user.lang, 'label.Review Time'),
                sort: true,
                formatter: ReviewDateTimeColumn,
            },
            {
                dataField: 'audit_opinion',
                text: LangUtils.getLanguage(user.lang, 'label.Opinion'),
                sort: true,
                //formatter: AuditOpinionColumn,
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

class Audit extends Component {
    _isMounted = false;

    constructor(props, context) {
        super(props, context);
        this.state = {
            // selected_audit :{},                          
            // selected_audits:[],
            code :'',
            search_name:'',
            search_property:SelectAll,
            search_type:SelectAll,
            search_town:'',
            search_corporation:'',
            search_establish_date_from:new Date(),
            search_establish_date_to:new Date(),
            search_state:SelectAll,        
        }
    }

    componentWillMount() {
        this.props.getAudit('')   
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

        const {audit} = this.props
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
                    value: audit.length,
                },
            ],
        }; 
    }

    search = () => {               
        this.props.getAudit(this.state.search_name)
    }

    selectRow = (row,selected) => {    
        this.props.selectAudit(row, selected) 
    }

    selectAll = (selected) => {
        this.props.selectAllAudit(selected)
    }

    
    render(){        
        const {user, audit, selected_audit, loading} = this.props    
        const {search_name, search_property} = this.state
        return (        
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Main Management'), path: '/main/audit' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Audit Information'), path: '/main/audit', active: true },
                    ]}
                    title={LangUtils.getLanguage(user.lang, 'navigation.Audit Information')}
                />    
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            { loading && <LoaderWidget /> }
                                <Row>
                                <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Name')}</Label>
                                            <Input type="text" className="col-8" placeholder={LangUtils.getLanguage(user.lang, 'label.Name')} 
                                                value={search_name} onChange={(e) => {this.setState({search_name:e.target.value})}}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Property')}</Label>
                                            <Select
                                                className="react-select col-8"
                                                classNamePrefix="react-select"
                                                value={search_property}
                                                onChange={(e) => {this.setState({search_property:e})}}
                                                placeholder={LangUtils.getLanguage(user.lang, 'label.Property')}
                                                options={this.getOptions('Property')}>                                                    
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Type')}</Label>
                                            <Select
                                                className="react-select col-8"
                                                classNamePrefix="react-select"
                                                placeholder={LangUtils.getLanguage(user.lang, 'label.Type')}
                                                options={this.getOptions('Type')}>                                                    
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Town')}</Label>
                                            <Input type="text" className="col-8" placeholder={LangUtils.getLanguage(user.lang, 'label.Town')} />
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">
                                                {LangUtils.getLanguage(user.lang, 'label.Corporation')}
                                            </Label>
                                            <Input type="text" className="col-8" placeholder={LangUtils.getLanguage(user.lang, 'label.Corporation')} />
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
                                            <Link 
                                                // to="/main/audit-detail/add"
                                                to="#"
                                            >
                                                <Button size="md" color="primary" className="mb-2 mr-1" 
                                                    disabled={true}  
                                                    // disabled={selected_audit.length === 0} 
                                                    // onClick = {() => this.delete()}
                                                >
                                                    {LangUtils.getLanguage(user.lang,"button.Review")}
                                                </Button>
                                            </Link>                         
                                        </div>
                                    </Col>
                                </Row>    
                                <TableWithSeletable
                                    bootstrap4
                                    selectRow={this.selectRow}
                                    selectAll={this.selectAll}
                                    data={audit}                                    
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
        audit:state.Main.audit,
        selected_audit:state.Main.selected_audit ,
        loading:state.Main.loading,         
    };

};

export default withRouter(
    connect(
        mapStateToProps,
        { getAudit, selectAllAudit, selectAudit }
    )(Audit)
);
