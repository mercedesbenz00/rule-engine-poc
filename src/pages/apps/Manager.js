
import { Row, Col, Card, CardBody, Table,Form, FormGroup, Label, Input, Button} from 'reactstrap';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { initMenu, changeActiveMenuFromLocation } from '../../redux/actions';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import LangUtils from '../../helpers/langUtils';
import PageTitle from '../../components/PageTitle';

const managers = [
    { id: 1, name: 'manager1', sex: 0, phone_number: 136085212, company_name: 0,state:1},
    { id: 2, name: 'manager2', sex: 0, phone_number: 133085333, company_name: 1,state:1},
    { id: 3, name: 'manager3', sex: 1, phone_number: 133085444, company_name: 2,state:0},
    { id: 4, name: 'manager4', sex: 1, phone_number: 170085731, company_name: 3,state:0},
    { id: 5, name: 'manager5', sex: 0, phone_number: 180085250, company_name: 4,state:0}
];

type Props = {
    initMenu: PropTypes.func,
    changeActiveMenuFromLocation: PropTypes.func,
    menu: PropTypes.object,
    mode: string,
    history: PropTypes.object,
};
class Manager extends Component<Props> {


    render() {
        const {user} = this.props.user
        let lang = user.lang?user.lang:"ch"    
        return(
            <React.Fragment>
                <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/calendar' },
                    { label: 'Calendar', path: '/apps/calendar', active: true },
                ]}
                title={LangUtils.getLanguage(lang,"title.Manager Management")}
                />
                <Row className="mt-2">
                    <Col md={12} sm={12}>
                        <Form inline className="mb-2 float-left">
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label htmlFor="search" className   ="mr-sm-2">
                                    {LangUtils.getLanguage(lang,"label.CompanyName")}
                                </Label>                                
                                <Input type="text" className="form-control" placeholder="Search ..." />                           
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label htmlFor="status" className="mr-sm-2">
                                    {LangUtils.getLanguage(lang,"label.State")}
                                </Label>
                                <Input type="select" name="select" >
                                    <option>{LangUtils.getLanguage(lang,"label.Select")}</option>
                                    <option value="1">{LangUtils.getLanguage(lang,"label.On")}</option>
                                    <option value="2">{LangUtils.getLanguage(lang,"label.Off")}</option>                                    
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                {/* <a href="/" className="btn btn-success btn-sm ml-3">
                                    {LangUtils.getLanguage(lang,"button.search")}
                                </a> */}
                                <Button color={'success'} className="btn-rounded">
                                    {LangUtils.getLanguage(lang,"button.search")}
                                </Button>
                            </FormGroup>
                        </Form>                        
                    </Col>
                </Row>
                <Row>
                <h4 className="page-title">                    
                    <a href="/" className="btn btn-info btn-sm ml-3">
                        {LangUtils.getLanguage(lang,"button.new manager")}
                    </a>
                    <a href="/" className="btn btn-info btn-sm ml-3">
                        {LangUtils.getLanguage(lang,"button.manager edit")}
                    </a>
                    <a href="/" className="btn btn-light btn-sm ml-3">
                        {LangUtils.getLanguage(lang,"label.On")}
                    </a>
                    <a href="/" className="btn btn-light btn-sm ml-3">
                        {LangUtils.getLanguage(lang,"label.Off")}
                    </a>
                </h4>
                    <Col className="col-12">
                        <Card>
                            <CardBody>   
                                <Table className="mb-0" responsive>
                                    <thead>
                                        <tr>
                                            <th className="text-center">
                                                <input type="checkbox" disabled="" defaultValue=""/>
                                            </th>
                                            <th className="text-center">{LangUtils.getLanguage(lang,"label.Name")}</th>
                                            <th className="text-center">{LangUtils.getLanguage(lang,"label.Gender")}</th>
                                            <th className="text-center">{LangUtils.getLanguage(lang,"label.PhoneNumber")}</th>
                                            <th className="text-center">{LangUtils.getLanguage(lang,"label.CompanyName")}</th>
                                            <th className="text-center">{LangUtils.getLanguage(lang,"label.State")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {managers.map((manager, index) => {
                                            return (
                                                <tr key={index}>                                    
                                                    <td className="text-center">
                                                        <input type="checkbox" disabled="" defaultValue="" 
                                                            // checked={this.state.checkState.indexOf(i) != -1 ? "checked" : ""} onChange={this.changeCheckClass.bind(this,i)}
                                                        />
                                                    </td>
                                                    <td className="text-center">{manager.name}</td>
                                                    <td className="text-center">{manager.sex}</td>
                                                    <td className="text-center">{manager.phone_number}</td>
                                                    <td className="text-center">{manager.company_name}</td>                                                    
                                                    <td className="text-center">{manager.state}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
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
        menu: state.AppMenu,
        user:state.Auth
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        { initMenu, changeActiveMenuFromLocation }
    )(Manager)
);
