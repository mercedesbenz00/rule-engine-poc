// @flow
import React from 'react';
import AppMenu from './AppMenu';
import { Collapse } from 'reactstrap';

type NavbarProps = {
    isMenuOpened?: boolean,
};

const Navbar = (props: NavbarProps) => {
    return (
        <React.Fragment>
            <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-dark navbar-expand-lg topnav-menu">
                        <Collapse isOpen={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content">
                            <AppMenu mode={'horizontal'} />
                        </Collapse>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
