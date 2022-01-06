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
import HyperDatepicker from '../../components/Datepicker';
import LangUtils from '../../helpers/langUtils';
import PageTitle from '../../components/PageTitle';
import { Property, SelectAll, State, Types } from '../../helpers/constant';
import { getEnterprise, selectAllEnterprise, selectEnterprise, 
    activeEnterprise, passiveEnterprise, deleteEnterprise } from '../../redux/actions';
import LoaderWidget from '../../components/Loader';
import classNames from 'classnames';
import moment from 'moment'

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
            search_storage_area_to:0
        };
    }

    componentWillMount() {
        this.props.getEnterprise('')
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

    render() {

        const {user, enterprise, selected_enterprise, loading} = this.props
        const {search_name, search_property} = this.state

        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Main Management'), path: '/main/enterprise' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information'), path: '/main/enterprise', active: true },
                    ]}
                    title={LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information')}
                />    
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                { loading && <LoaderWidget/> }
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
                                            <Label className="col-4 d-flex pl-1 align-items-center">
                                                {LangUtils.getLanguage(user.lang, 'label.Establish Date')}
                                            </Label>
                                            <Row className="col-8 m-0 p-0">
                                                <Col className="col-5 datepicker">
                                                    <HyperDatepicker hideAddon={true} dateFormat="yyyy-MM-dd"/>
                                                </Col>
                                                <Label className="col-2 d-flex justify-content-center align-items-center">-</Label>
                                                <Col className="col-5 datepicker">
                                                    <HyperDatepicker hideAddon={true} dateFormat="yyyy-MM-dd"/>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.State')}</Label>
                                            <Select
                                                className="react-select col-8"
                                                classNamePrefix="react-select"
                                                placeholder={LangUtils.getLanguage(user.lang, 'select.SelectAll')}
                                                options={this.getOptions('Status')}>                                                    
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Plant Area(㎡)')}</Label>
                                            <Row className="col-8 m-0 p-0">
                                                <Input type="text" className="col-5" placeholder="" />
                                                <Label className="col-2 d-flex justify-content-center align-items-center">-</Label>
                                                <Input type="text" className="col-5" placeholder="" />
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Factory Area(㎡)')}</Label>
                                            <Row className="col-8 m-0 p-0">
                                                <Input type="text" className="col-5" placeholder="" />
                                                <Label className="col-2 d-flex justify-content-center align-items-center">-</Label>
                                                <Input type="text" className="col-5" placeholder="" />
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={3} lg={4} md={6}>
                                        <FormGroup row>
                                            <Label className="col-4 d-flex pl-1 align-items-center">{LangUtils.getLanguage(user.lang, 'label.Storage Area(㎡)')}</Label>
                                            <Row className="col-8 m-0 p-0">
                                                <Input type="text" className="col-5" placeholder="" />
                                                <Label className="col-2 d-flex justify-content-center align-items-center">-</Label>
                                                <Input type="text" className="col-5" placeholder="" />
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={1} lg={4} md={6}>
                                        <Button size="md" color="success" className="mb-2 mr-1" onClick={this.search}>
                                            {LangUtils.getLanguage(user.lang, 'button.Search')}
                                        </Button>
                                    </Col>
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
            </React.Fragment>
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

