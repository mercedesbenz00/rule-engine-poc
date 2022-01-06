// @flow
import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';


type SearchDropdownProps = {};

type SearchDropdownState = {
    dropdownOpen?: boolean,
};

class SearchDropdown extends Component<SearchDropdownProps, SearchDropdownState> {
    constructor(props: SearchDropdownProps) {
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

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="a"
                    className="nav-link dropdown-toggle arrow-none mr-0"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    <i className="mdi mdi-magnify noti-icon"></i>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated topbar-dropdown-menu dropdown-lg">
                    <form className="p-3">
                        <input type="text" className="form-control" placeholder="Search ..." />
                    </form>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default SearchDropdown;
