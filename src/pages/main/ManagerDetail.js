import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { Row, Col, Card, CardBody, Button, Label, FormGroup} from 'reactstrap';
import { AvForm, AvGroup, AvInput} from 'availity-reactstrap-validation';
import LangUtils from '../../helpers/langUtils';
import PageTitle from '../../components/PageTitle';
import { Gender } from '../../helpers/constant';
import { addManager, updateManager, getAdvertisement} from '../../redux/actions';
import LoaderWidget from '../../components/Loader';
import _ from 'lodash'

// Json Rule Engine
import { validateRuleset } from '../../rule-engine/rule-validation';
const advertiseRule = require('../../rule-engine/rules/advertise.json');

class ManagerDetail extends Component {
    _isMounted = false;

    constructor(props, context) {        
        super(props, context);
        this.state = {
            manager :{
                id:-1,
                name:'',
                sex:0,
                phone_number:'',
                company_name:'',
                state:0,
                hobby:'',
            },
            select_sex:{value:0,label:LangUtils.getLanguage(this.props.user.lang, 'select.Male')}       
        }

    }

    componentDidMount() {

        this._isMounted = true;           
        const {user, selected_manager, match} = this.props

        if (match.params.type === "edit") {    
            let manager = {}        
            _.extend(manager, selected_manager)
            this.setState({
                manager : manager,
                select_sex : {value:manager.sex, label:LangUtils.getLanguage(user.lang, Gender[manager.sex].label)} 
            })
            this.decideAdvertisementContent(manager);
        } else {
            this.setState({
                manager : {
                    id:-1,
                    name : "",
                    sex:0,
                    phone_number:'',
                    company_name:'',
                    state:0,
                    hobby:''
                },
                select_sex:{value:0,label:LangUtils.getLanguage(this.props.user.lang, 'select.Male')} 
            })
        }
    }

    decideAdvertisementContent(manager) {
        // Here, fact is manager, now apply dynamic rule to fact for getting outcome.
        validateRuleset(manager, advertiseRule.decisions).then(outcomes => {
            console.log('validateRuleset', outcomes)
            // According to outcome result, get advertisement
            outcomes.map(outcome => {
                this.props.getAdvertisement(outcome.type);
            })

        }).catch((e) => {
            console.log('validateRuleset-error', e)
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }    
    
    handleValidSubmit = (event, values) => { 

        const {match} = this.props
        const {manager} = this.state

        if (match.params.type === "edit") {
            this.props.updateManager(manager)
        } else {
            this.props.addManager(manager)
        }

    };    

    changeSelect = (field, item) => {

        var selectedManager = this.state.manager;

        selectedManager[field] = item != null ? item.value : null;

        this.setState({
            manager: selectedManager,
            select_sex : item
        });
    }

    changeInput = (field, event) => {

        var selectedManager = this.state.manager;

        selectedManager[field] = event.target.value

        this.setState({
            manager: selectedManager
        });
    }

    getOptions = (type) => {

        const {user} = this.props   

        var options = []

        if (type === 'sex') {
            Gender.map(s => {
                options.push({
                    value:s.value,
                    label:LangUtils.getLanguage(user.lang, s.label)
                })
            })
        }
        return options;
    }
    
    render(){  

        const {user, loading, advertisement} = this.props       
        const {manager, select_sex} = this.state 

        return (        
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Main Management'), path: '/main/manager-info' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Manager Information'), path: '/main/manager-info' },
                        { label: LangUtils.getLanguage(user.lang, 'navigation.Manager Information Detail'), path: '/main/manager-detail', active: true },
                    ]}
                    title={LangUtils.getLanguage(user.lang, 'navigation.Manager Information Detail')}
                />    
                <Row>
                    <Col>
                        <Card>                        
                            <CardBody>  
                                {loading &&<LoaderWidget/>}
                                <Row>
                                    <Col xl={6} lg={8} md={12}>
                                        <h3 className="m-0 mb-2">
                                            <Label className="col-4 d-flex justify-content-start align-items-center pt-2 pb-2">
                                                {LangUtils.getLanguage(user.lang, 'label.Main Information')}
                                            </Label>
                                        </h3>
                                    </Col>
                                </Row>
                                <AvForm onValidSubmit={this.handleValidSubmit}>                       
                                    <Row>
                                        <Col xl={4} lg={6} md={8}>
                                            <AvGroup row>                                        
                                                <Label for="name" className="col-4 d-flex justify-content-end align-items-center pr-2"><span className="required">*</span>{LangUtils.getLanguage(user.lang,"label.Manager Name")}</Label>
                                                <AvInput type="text" className="col-8" name="name" value={manager.name} placeholder={LangUtils.getLanguage(user.lang,"label.Manager Name")} onChange={this.changeInput.bind(this,'name')}/>
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={4} lg={6} md={8}>
                                            <AvGroup row>
                                                <Label for="sex" className="col-4 d-flex justify-content-end align-items-center pr-2"><span className="required">*</span>{LangUtils.getLanguage(user.lang,"label.Gender")}</Label>
                                                <Select
                                                    name="sex"
                                                    className="react-select col-8"
                                                    classNamePrefix="react-select"
                                                    placeholder={LangUtils.getLanguage(user.lang,"label.Gender")}
                                                    value={select_sex}
                                                    options={this.getOptions('sex')}
                                                    onChange={this.changeSelect.bind(this, 'sex')}>                                                        
                                                </Select>
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={4} lg={6} md={8}>
                                            <AvGroup row>
                                                <Label for="phone_number" className="col-4 d-flex justify-content-end align-items-center pr-2"><span className="required">*</span>{LangUtils.getLanguage(user.lang,"label.Phone Number")}</Label>
                                                <AvInput type="text" className="col-8" name="phone_number" value={manager.phone_number} placeholder={LangUtils.getLanguage(user.lang,"label.Phone Number")} onChange={this.changeInput.bind(this,'phone_number')}/>
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={4} lg={6} md={8}>
                                            <AvGroup row>
                                                <Label for="company_name" className="col-4 d-flex justify-content-end align-items-center pr-2"><span className="required">*</span>{LangUtils.getLanguage(user.lang,"label.Company Name")}</Label>
                                                <AvInput type="text" className="col-8" name="company_name" value={manager.company_name} placeholder={LangUtils.getLanguage(user.lang,"label.Company Name")} onChange={this.changeInput.bind(this,'company_name')}/>                                                
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={4} lg={6} md={8}>
                                            <AvGroup row>
                                                <Label for="hobby" className="col-4 d-flex justify-content-end align-items-center pr-2">{LangUtils.getLanguage(user.lang,"label.Hobby")}</Label>
                                                <AvInput type="text" className="col-8" name="hobby" value={manager.hobby} placeholder={LangUtils.getLanguage(user.lang,"label.Hobby")} onChange={this.changeInput.bind(this,'hobby')}/>                                                
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup>
                                                <div className="text-sm-left col-12 d-flex justify-content-center">                                                    
                                                    <Button size="md" color="success" className="mb-2 mr-1">
                                                        {LangUtils.getLanguage(user.lang,"button.Submit")}
                                                    </Button>                                                                     
                                                    <Link to="/main/manager-info">
                                                        <Button size="md" color="light" className="mb-2 mr-1">
                                                            {LangUtils.getLanguage(user.lang,"button.Return")}
                                                        </Button>                     
                                                    </Link>                   
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>                               
                                </AvForm> 
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {(advertisement!=null) && <Row>
                    <Col>
                        <Card>                        
                            <CardBody>  
                                <Row>
                                    <Col xl={6} lg={8} md={12}>
                                        <h3 className="m-0 mb-2">
                                            <Label className="col-4 d-flex justify-content-start align-items-center pt-2 pb-2">
                                                {'Advertisement'}
                                            </Label>
                                        </h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={4} lg={6} md={8}>
                                        <Label className="d-flex justify-content-end align-items-center pr-2">{advertisement.content}</Label>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

    return {
        user:state.Auth.user,
        selected_manager:state.Main.selected_manager[0],
        loading:state.Main.loading,
        advertisement: state.Main.advertisement
    };

};

export default withRouter(
    connect(
        mapStateToProps,
        { addManager, updateManager, getAdvertisement }
    )(ManagerDetail)
);