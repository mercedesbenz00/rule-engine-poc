import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { Row, Col, Card, CardBody, Button, FormGroup, Label, Input, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, CardHeader, } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone,
    PaginationTotalStandalone, PaginationListStandalone, } from 'react-bootstrap-table2-paginator';
import HyperDatepicker from '../../components/Datepicker';
import LangUtils from '../../helpers/langUtils';
import PageTitle from '../../components/PageTitle';
import { Property, SelectAll, State, Types } from '../../helpers/constant';
import { getEnterprise, selectAllEnterprise, selectEnterprise, 
    activeEnterprise, passiveEnterprise, deleteEnterprise } from '../../redux/actions';
import LoaderWidget from '../../components/Loader';
import classNames from 'classnames';
import moment from 'moment'

import RulesTable from './RulesTable';
import { Engine } from 'json-rules-engine';

const ACTIVE = 0
const PASSIVE = 1

const TableWithSeletableRows = mainProps => {
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

    const columns = [

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
            dataField: 'plant_area',
            text: LangUtils.getLanguage(user.lang, 'label.Plant Area(㎡)'),
            sort: true
        },
        {
            dataField: 'factory_area',
            text: LangUtils.getLanguage(user.lang, 'label.Factory Area(㎡)'),
            sort: true,
        },
        {
            dataField: 'storage_area',
            text: LangUtils.getLanguage(user.lang, 'label.Storage Area(㎡)'),
            sort: true,
        },
        {
            dataField: 'state',
            text: LangUtils.getLanguage(user.lang, 'label.State'),
            sort: true,
            formatter: StateColumn,
        },

    ];

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
        onSelect:mainProps.selectRow,
        onSelectAll:mainProps.selectAll

    };
    
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

class Enterprises extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        
        this.state = {
            search_name:'',
            search_property:SelectAll,
            search_type:SelectAll,
            search_town:'',
            search_corporation:'',
            search_establish_date_from:new Date(),
            search_establish_date_to:new Date(),
            search_state:SelectAll,
            search_plant_area_from:0,
            search_plant_area_to:0,
            search_factory_area_from:0,
            search_factory_area_to:0,
            search_storage_area_from:0,
            search_storage_area_to:0,

            remap_name:'',
            remap_src_value: '',
            remap_target_value: '',
            itemsRule: [],
        };
    }

    componentWillMount() {
        this.props.getEnterprise('')
    }

    componentDidMount() {
        this._isMounted = true;
        this.initJsonRule();
    }

    componentWillUnmount() {
        this._isMounted = false;        
    }

    initJsonRule() {
        this.engine = new Engine()

        this.engine.addOperator('customCompare', (factValue, ruleValue) => {
            let checkValue = factValue+"";
            let strRuleValue = ruleValue+"";
            return checkValue.toLowerCase() === strRuleValue.toLowerCase()
        })

        this.engine
        .on('success', async (event, almanac, ruleResult) => {
            console.log('----', event, almanac, ruleResult)
            // const srcValue = await almanac.factValue('remap_src_value')
            const accountId = await almanac.factValue('id')

            const { enterprise } = this.props;
            let newEnterprise = [...enterprise];
            newEnterprise[accountId-1][event.type] = event.params.target_value;

            this.setState({enterprise:newEnterprise})
            console.log(`${accountId} meet conditions for the ${event.type.underline} rule.`)
          })
        .on('failure', event => {
        
        })
    }

    getOptions = (type) => {

        const {user} = this.props
        var options = []

        options.push({
            value:SelectAll,
            label:LangUtils.getLanguage(user.lang, "select.SelectAll")
        })

        if(type === "Type") {
            Types.map(type => {
                options.push({
                    value:type.value,
                    label:LangUtils.getLanguage(user.lang, type.label)
                })
            })
        } 
        else if(type === "Property") {
            Property.map(property => {
                options.push({
                    value:property.value,
                    label:LangUtils.getLanguage(user.lang, property.label)
                })
            })
        } 
        else if(type === "Status") {
            State.map(state => {
                options.push({
                    value:state.value,
                    label:LangUtils.getLanguage(user.lang, state.label)
                })
            })
        }

        return options;
    }

    search = () => {
        this.props.getEnterprise(this.state.search_name)
    }

    selectRow = (row, selected) => {
        this.props.selectEnterprise(row, selected)
    }

    selectAll = (selected) => {
        this.props.selectAllEnterprise(selected)
    }

    delete = () => {
        const{ selected_enterprise } = this.props   
        this.props.deleteEnterprise(selected_enterprise)
    }

    addRule = () => {
        const{ remap_name, remap_src_value, remap_target_value, itemsRule } = this.state
        let newItemsRule = [...itemsRule];
        newItemsRule.push({remap_name, remap_src_value, remap_target_value, id: itemsRule.length })

        let newRule = {
            conditions: {
              all: [{
                fact: remap_name,
                operator: 'customCompare',
                value: remap_src_value
              }]
            },
            event: { // define the event to fire when the conditions evaluate truthy
              type: remap_name,
              params: {
                message: 'Need to remap',
                target_value:remap_target_value
              }
            },
            name: remap_name
          }
        this.engine.addRule(newRule)
    
        this.setState({itemsRule: newItemsRule});
        this.setState({remap_name:'', remap_src_value: '', remap_target_value: ''})

        this.validateEngine();
    }

    validateEngine = async () => {
        const { enterprise } = this.props
        await Promise.all([
            enterprise.map(fact => {
                return this.engine.run(fact)
            })
        ])
    }

    renderRulefragmet = () => {
        const {user} = this.props    
        const{ remap_name, remap_src_value, remap_target_value, itemsRule } = this.state  
        return (
            <Card>
                <CardHeader>
                    <h5 className="ml-3">Dynamic rules</h5>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xl={3} lg={4} md={6}>
                            <FormGroup row>
                                <Label className="col-4 d-flex pl-1 align-items-center">Field Name</Label>
                                <Input type="text" className="col-8" placeholder={"Field Name"} 
                                    value={remap_name} onChange={(e) => {this.setState({remap_name:e.target.value})}}/>
                            </FormGroup>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <FormGroup row>
                                <Label className="col-4 d-flex pl-1 align-items-center">Source Value</Label>
                                <Input type="text" className="col-8" placeholder={"Source Value"} 
                                    value={remap_src_value} onChange={(e) => {this.setState({remap_src_value:e.target.value})}}/>
                            </FormGroup>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <FormGroup row>
                                <Label className="col-4 d-flex pl-1 align-items-center">Target Value</Label>
                                <Input className="col-8" placeholder={"Target Value"} 
                                    value={remap_target_value} onChange={(e) => {this.setState({remap_target_value:e.target.value})}}/>
                            </FormGroup>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <Button size="md" color="primary" className="mb-2 mr-1" onClick = {() => this.addRule()}>
                                <i className="mdi mdi-plus"></i> {"Add Rule"}
                            </Button>
                        </Col>
                    </Row>
                    <RulesTable
                        bootstrap4
                        data={itemsRule}
                        wrapperClasses="table-responsive"
                        user ={user}
                    />
                </CardBody>
            </Card>
        )
    }

    renderDataFragment = () => {        
        const {user, enterprise, selected_enterprise, loading} = this.props
        return (
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h5 className="ml-3">Data</h5>
                        </CardHeader>
                        <CardBody>
                            { loading && <LoaderWidget/> }
                            <Row>
                                
                            </Row>
                            <Row>
                                <Col sm={8}>
                                    <div className="text-sm-left">
                                        <Link to="/main/enterprise-detail/add">
                                            <Button size="md" color="primary" className="mb-2 mr-1">
                                                <i className="mdi mdi-plus"></i> {LangUtils.getLanguage(user.lang, 'button.Add Enterprise')}
                                            </Button>
                                        </Link>
                                        <Link to="/main/enterprise-detail/edit">
                                            <Button size="md" color="primary" className="mb-2 mr-1" disabled={selected_enterprise.length === 0}>
                                                {LangUtils.getLanguage(user.lang, 'button.Add Enterprise')}
                                            </Button>
                                        </Link>
                                        <Button size="md" color="warning" className="mb-2 mr-1" disabled={selected_enterprise.length === 0} onClick = {() => this.delete()}>
                                            {LangUtils.getLanguage(user.lang,"button.Delete")}
                                        </Button>
                                        <Button size="md" color="light" className="mb-2 mr-1" disabled={selected_enterprise.length === 0}
                                            onClick={() => this.props.activeEnterprise(selected_enterprise, ACTIVE)} >
                                            {LangUtils.getLanguage(user.lang, 'button.Active')}
                                        </Button>
                                        <Button size="md" color="light" className="mb-2 mr-1" disabled={selected_enterprise.length === 0} 
                                            onClick={() => this.props.passiveEnterprise(selected_enterprise, PASSIVE)}>
                                            <i className="mdi mdi-minus-circle-outline"></i> {LangUtils.getLanguage(user.lang, 'button.Inactive')}
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <TableWithSeletableRows
                                bootstrap4
                                selectRow={this.selectRow}
                                selectAll={this.selectAll}
                                data={enterprise}
                                user={user}
                                wrapperClasses="table-responsive"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }

    renderPageContent() {
        const {user} = this.props
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Main Management'), path: '/main/enterprise' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information'), path: '/main/enterprise', active: true },
                    ]}
                    title={LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information')}
                />
                {this.renderRulefragmet()}
                {this.renderDataFragment()}                
            </React.Fragment>
        )
    }

    render() {
        // const {search_name, search_property} = this.state
        return (
            <>
            {this.renderPageContent()}
            </>
        )
    }
};

const mapStateToProps = state => {

    return {
        user:state.Auth.user,
        loading:state.Main.loading,
        enterprise:state.Main.enterprise,
        selected_enterprise:state.Main.selected_enterprise,
    };

};

export default withRouter(
    connect(
        mapStateToProps,
        { getEnterprise, selectEnterprise, selectAllEnterprise, activeEnterprise, passiveEnterprise, deleteEnterprise }
    )(Enterprises)
);

