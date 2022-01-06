// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { languageSet } from '../../redux/actions';
// import enFlag from './flags/us.jpg';
// import chFlag from './flags/china.jpg';

const Languages = {
    ch : '中文',
    en : 'English'
}

type LanguageDropdownProps = {};

type LanguageDropdownState = {
    dropdownOpen?: boolean,
};

class LanguageDropdown extends Component<LanguageDropdownProps, LanguageDropdownState> {
    constructor(props: LanguageDropdownProps) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false,
        };
    }

    /*:: toggleDropdown: () => void */
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {

        const {user, languageSet} = this.props
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="nav-link dropdown-toggle arrow-none btn btn-link"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    {/* <img src={enLang.flag} alt={enLang.name} className="mr-1" height="12" />{' '} */}
                    <span className="align-middle">{Languages[user.lang]}</span>
                    <i className="mdi mdi-chevron-down align-middle"></i>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated topbar-dropdown-menu">
                    <DropdownItem onClick={() => languageSet(user.username, 'ch')}>中文</DropdownItem>
                    <DropdownItem onClick={() => languageSet(user.username, 'en')}>English</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}
const mapStateToProps = state => {
    return {
        user:state.Auth.user
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        { languageSet }
    )(LanguageDropdown)
);
