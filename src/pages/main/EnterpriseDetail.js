import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardHeader, NavLink, UncontrolledCollapse, 
    CardImg, FormGroup, Button, Input, Form, CustomInput, Label } from 'reactstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import { Wizard, Steps, Step } from 'react-albus';
import { Redirect, withRouter } from 'react-router-dom';
import LangUtils from '../../helpers/langUtils';
import PageTitle from '../../components/PageTitle';
import factory from '../../assets/images/factory.png';
import { Property, Types, State } from '../../helpers/constant';
import { addEnterprise, updateEnterprise } from '../../redux/actions';
import HyperDatepicker from '../../components/Datepicker';
import moment from 'moment'
import LoaderWidget from '../../components/Loader';
import _ from 'lodash'


const CustomAccordions = ({user, enterprise}) => {
    
    return (
        <div id="accordion" className="custom-accordion mb-4">
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group1" href="#">
                            <span>
                                <i className="mdi mdi-home-edit font-18 mr-2"></i>
                            </span>
                            {LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information Detail')}
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group1" isOpen={true}>
                    <CardBody className="none-border">
                        <Row>
                            <Col xl={9}>
                                <Row>
                                    <h4 className="m-0 mb-2">
                                        {enterprise.name}
                                    </h4>
                                </Row>
                                <Row>
                                    <Col xl={4}>
                                        <FormGroup row className="mb-2">
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, 'label.Type')} :
                                            </Label>
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, Types[enterprise.type].label)}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={4}>
                                        <FormGroup row className="mb-2">
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, 'label.Property')} :
                                            </Label>
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, Property[enterprise.property].label)}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={4}>
                                        <FormGroup row className="mb-2">
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, 'label.Town')} :
                                            </Label>
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, enterprise.town)}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup row className="mb-2">
                                    <Label className="mr-sm-2">
                                        {LangUtils.getLanguage(user.lang, 'label.Address')} :
                                    </Label>
                                    <Label className="mr-sm-2">
                                    {enterprise.address}
                                    </Label>
                                </FormGroup>
                                <Row>
                                    <Col xl={4}>
                                        <FormGroup row className="mb-2">
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, 'label.Contact')} :
                                            </Label>
                                            <Label className="mr-sm-2">
                                                {enterprise.corporation}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col xl={4}>
                                        <FormGroup row className="mb-2">
                                            <Label className="mr-sm-2">
                                                {LangUtils.getLanguage(user.lang, 'label.Telephone')} :
                                            </Label>
                                            <Label className="mr-sm-2">
                                                {enterprise.telephone}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={3}>
                                <Row>                                    
                                    <CardImg src={factory} id="img" className="img-fluid factory-img col-8" height="138" />
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                <Row>
                                    <Col className="edit-label col-6">
                                        <span className="float-right">{LangUtils.getLanguage(user.lang, 'label.Owner')}</span>
                                    </Col>
                                    <Col className="edit-value col-6">
                                        <span className="float-left">{enterprise.corporation}</span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col sm={6} className="edit-label col-6">
                                        <span className="float-right">{LangUtils.getLanguage(user.lang, 'label.Telephone')}</span>
                                    </Col>
                                    <Col sm={6} className="edit-value col-6">
                                        <span className="float-left">{enterprise.telephone}</span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col sm={6} className="edit-label col-6">
                                        <span className="float-right">{LangUtils.getLanguage(user.lang, 'label.ID Card Number')}</span>
                                    </Col>
                                    <Col sm={6} className="edit-value col-6">
                                        <span className="float-left">445*****192</span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col sm={6} className="edit-label col-6">
                                        <span className="float-right">{LangUtils.getLanguage(user.lang, 'label.Employee Count')}</span>
                                    </Col>
                                    <Col sm={6} className="edit-value col-6">
                                        <span className="float-left">100</span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col sm={6} className="edit-label col-6">
                                        <span className="float-right">{LangUtils.getLanguage(user.lang, 'label.Farm Establish Date')}</span>
                                    </Col>
                                    <Col sm={6} className="edit-value col-6">
                                        <span className="float-left">{enterprise.establish_date}</span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col sm={6} className="edit-label-last col-6 h-38">
                                        <span className="float-right">{' '}</span>
                                    </Col>
                                    <Col sm={6} className="edit-value-last col-6 h-38">
                                        <span className="float-left">{' '}</span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col sm={6} className="edit-label-last col-6">
                                        <span className="float-right">{LangUtils.getLanguage(user.lang, 'label.Note')}</span>
                                    </Col>
                                    <Col sm={6} className="edit-value-last col-6">
                                        <span className="float-left">{' '}</span> 
                                    </Col>
                                </Row>
                            </Col>
                        </Row>                        
                    </CardBody>
                </UncontrolledCollapse>
            </Card>
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group2" href="#">
                        营业执照信息
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group2">
                    <CardBody>This is second collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group3" href="#">
                        生产许可证
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group3">
                    <CardBody>This is third collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group4" href="#">
                        地块信息
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group4">
                    <CardBody>This is third collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group5" href="#">
                        加工厂信息
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group5">
                    <CardBody>This is third collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
            <Card className="mb-0">
                <CardHeader>
                    <h5 className="m-0">
                        <NavLink className="custom-accordion-title d-block pt-2 pb-2" id="group6" href="#">
                        仓库信息
                        </NavLink>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler="#group6">
                    <CardBody>This is third collapse content</CardBody>
                </UncontrolledCollapse>
            </Card>
        </div>
    );
};

const AddWizaard = (props) => {

    const {user, enterprise, changeSelect, changeInput, type, property, handleValidSubmit, changeDate} = props

    const getOptions = (type) => {

        var options = []

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

    return (
        <Wizard>
            <Steps>
                <Step
                    id="info"
                    render={({ next }) => (
                        <Form>
                            <FormGroup row>
                                <Label for="name" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Name')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={enterprise.name}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Name')}
                                        onChange={(e) => changeInput(e, 'name')}
                                    />
                                </Col>
                                <Label for="type" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Type')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        value={type}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Type')}
                                        options={getOptions('Type')}
                                        onChange={(e) => changeSelect(e, 'type')}>                                                    
                                    </Select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="property" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Property')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        value={property}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Property')}
                                        options={getOptions('Property')}
                                        onChange={(e) => changeSelect(e, 'property')}>                                                    
                                    </Select>
                                </Col>
                                <Label for="town" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Town')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Input
                                        type="text"
                                        name="town"
                                        id="town"
                                        value={enterprise.town}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Town')}
                                        onChange={(e) => changeInput(e, 'town')}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="address" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Address')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Input
                                        type="text"
                                        name="address"
                                        id="address"
                                        value={enterprise.address}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Address')}
                                        onChange={(e) => changeInput(e, 'address')}
                                    />
                                </Col>
                                <Label for="corporation" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Contact')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Input
                                        type="text"
                                        name="corporation"
                                        id="corporation"
                                        value={enterprise.corporation}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Contact')}
                                        onChange={(e) => changeInput(e, 'corporation')}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="telephone" md={2} className="mt-2 col-3">
                                    {LangUtils.getLanguage(user.lang, 'label.Telephone')}
                                </Label>
                                <Col md={4} className="mt-2 col-9">
                                    <Input
                                        type="text"
                                        name="telephone"
                                        id="telephone"
                                        value={enterprise.telephone}
                                        placeholder={LangUtils.getLanguage(user.lang, 'label.Telephone')}
                                        onChange={(e) => changeInput(e, 'telephone')}
                                    />
                                </Col>
                            </FormGroup>
                            <ul className="list-inline wizard mb-0">
                                <li className="next list-inline-item float-right">
                                    <Button onClick={next} color="success">
                                        Next
                                    </Button>
                                </li>
                            </ul>
                        </Form>
                    )}
                />
                <Step
                    id="gandalf"
                    render={({ next, previous }) => (
                        <Form>
                    <FormGroup row>
                        <Label for="name" md={2} className="mt-2 col-3">
                            {LangUtils.getLanguage(user.lang, 'label.Name')}
                        </Label>
                        <Col md={4} className="mt-2 col-9">
                            <HyperDatepicker hideAddon={true} dateFormat="yyyy-MM-dd"
                                selected={new Date(enterprise.establish_date)} onChange={(e) => changeDate(e)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="plant_area" md={2} className="mt-2 col-3">
                            {LangUtils.getLanguage(user.lang, 'label.Plant Area(㎡)')}
                        </Label>
                        <Col md={4} className="mt-2 col-9">
                            <Input
                                type="number"
                                name="plant_area"
                                id="plant_area"
                                value={enterprise.plant_area}
                                placeholder={LangUtils.getLanguage(user.lang, 'label.Plant Area(㎡)')}
                                onChange={(e) => changeInput(e, 'plant_area')}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="factory_area" md={2} className="mt-2 col-3">
                            {LangUtils.getLanguage(user.lang, 'label.Factory Area(㎡)')}
                        </Label>
                        <Col md={4} className="mt-2 col-9">
                            <Input
                                type="number"
                                name="factory_area"
                                id="factory_area"
                                value={enterprise.factory_area}
                                placeholder={LangUtils.getLanguage(user.lang, 'label.Factory Area(㎡)')}
                                onChange={(e) => changeInput(e, 'factory_area')}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="storage_area" md={2} className="mt-2 col-3">
                            {LangUtils.getLanguage(user.lang, 'label.Storage Area(㎡)')}
                        </Label>
                        <Col md={4} className="mt-2 col-9">
                            <Input
                                type="number"
                                name="storage_area"
                                id="storage_area"
                                value={enterprise.storage_area}
                                placeholder={LangUtils.getLanguage(user.lang, 'label.Storage Area(㎡)')}
                                onChange={(e) => changeInput(e, 'storage_area')}
                            />
                        </Col>
                    </FormGroup>
                    <Col sm={12}>
                        <ul className="list-inline wizard mb-0">
                            <li className="previous list-inline-item">
                                <Button onClick={previous} color="success">
                                    Previous
                                </Button>
                            </li>

                            <li className="next list-inline-item float-right">
                                <Button onClick={next} color="success">
                                    Next
                                </Button>
                            </li>
                        </ul>
                    </Col>
                </Form>
                    )}
                />
                <Step
                    id="dumbledore"
                    render={({ previous }) => (
                        <Row>
                            <Col sm={12}>
                                <div className="text-center">
                                    <h2 className="mt-0">
                                        <i className="mdi mdi-check-all"></i>
                                    </h2>
                                    <h3 className="mt-0">Thank you !</h3>

                                    <p className="w-75 mb-2 mx-auto">
                                        앞으로 필요한 정보들을 계속 추가한다.
                                    </p>

                                    <div className="mb-3">
                                        <CustomInput
                                            type="checkbox"
                                            id="exampleCustomCheckbox"
                                            label="I agree with the Terms and Conditions"
                                        />
                                    </div>
                                </div>
                            </Col>

                            <Col sm={12}>
                                <ul className="list-inline wizard mb-0">
                                    <li className="previous list-inline-item">
                                        <Button onClick={previous} color="success">
                                            Previous
                                        </Button>
                                    </li>

                                    <li className="next list-inline-item float-right">
                                        <Button color="success" onClick={() => handleValidSubmit()}>Submit</Button>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    )}
                />
            </Steps>
        </Wizard>
    );
};

class EnterpriseDetail extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        
        this.state = {
            enterprise:this.props.selected_enterprise
        };
    }

    componentWillMount() {

        this._isMounted = true;           
        const { selected_enterprise, match, user } = this.props

        if (match.params.type === "edit") {
            this.setState({
                enterprise : selected_enterprise,
            })
        } else {
            this.setState({
                enterprise : {
                    id: -1,
                    name: '',
                    property: 0,
                    type: 0,
                    town: '',
                    establish_date: moment(new Date()).format('YYYY-MM-DD HH:mm'),
                    corporation: '',
                    plant_area: 0,
                    factory_area: 0,
                    storage_area: 0,
                    state: 0,
                },
                property : {value:0, label:LangUtils.getLanguage(user.lang, Property[0].label)},
                type : {value:0, label:LangUtils.getLanguage(user.lang, Types[0].label)},
            })
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    
    changeSelect = (item, field) => {

        var enterprise = this.state.enterprise;

        enterprise[field] = item != null ? item.value : null;
        var state = _.set({...this.state}, field, item);
        this.setState({
            ...state,
            enterprise,
        });
    }

    changeInput = (event, field) => {

        var enterprise = this.state.enterprise;

        enterprise[field] = event.target.value

        this.setState({
            manager: enterprise
        });
    }

    changeDate = (date) => {

        var enterprise = this.state.enterprise;
        enterprise.establish_date = moment(date).format('YYYY-MM-DD HH:mm');
        this.setState({
            enterprise
        });
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = () => { 

        const {match} = this.props
        const {enterprise} = this.state

        if (match.params.type === "edit") {
            this.props.updateEnterprise(enterprise)
        } else {
            this.props.addEnterprise(enterprise)
        }

    };  

    renderRedirectToRoot = () => {
        const {enterprise} = this.state
        if (enterprise === undefined) {
            return <Redirect to="/" />;
        }
    };

    render() {
        
        const {user, match, loading} = this.props
        const {enterprise, property, type} = this.state

        return (
            <React.Fragment>
                {this.renderRedirectToRoot()}
                <PageTitle
                    breadCrumbItems={[
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Main Management'), path: '/main/enterprise' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information'), path: '/main/enterprise' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information Detail'), path: '/main/enterprise-detail', active: true },
                    ]}
                    title={LangUtils.getLanguage(user.lang, 'navigation.Enterprise Information Detail')}/>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <CardBody>
                            {loading &&<LoaderWidget/>}
                            {match.params.type === 'edit'&&<CustomAccordions user={user} enterprise={enterprise} />}
                            {match.params.type !== 'edit'&&<AddWizaard user={user} enterprise={enterprise} changeSelect={this.changeSelect} changeInput={this.changeInput}
                                property={property} type={type} changeDate={this.changeDate} handleValidSubmit={this.handleValidSubmit} />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        user:state.Auth.user,
        selected_enterprise:state.Main.selected_enterprise[0],
        loading:state.Main.loading
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { addEnterprise, updateEnterprise }
    )(EnterpriseDetail)
);
