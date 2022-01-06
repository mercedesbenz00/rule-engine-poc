// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';

import logoSm from '../assets/images/logo_sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoDarkSm from '../assets/images/logo_sm_dark.png';
import logo from '../assets/images/logo.png';
import com_logo from '../assets/images/img/com-logo.png';
import profileImg from '../assets/images/users/avatar-1.jpg';

import AppMenu from './AppMenu';
import LangUtils from '../helpers/langUtils';

type SideBarContentProps = {
    menuClickHandler?: {},
    isLight: boolean,
    hideUserProfile: boolean,
};

const SideBarContent = ({ hideUserProfile, isLight, menuClickHandler }: SideBarContentProps) => {
    return (
        <React.Fragment>

            {!hideUserProfile && (
                <div className="leftbar-user">
                    <Link to="/">
                        <img src={profileImg} alt="" height="42" className="rounded-circle shadow-sm" />
                        <span className="leftbar-user-name">Dominic Keller</span>
                    </Link>
                </div>
            )}

            <AppMenu menuClickHandler={menuClickHandler} />

            {/* <div className="help-box text-white text-center">
                <Link to="/" className="float-right close-btn text-white">
                    <i className="mdi mdi-close" />
                </Link>

                <img src={helpBoxImage} height="90" alt="Helper Icon" />
                <h5 className="mt-3">Unlimited Access</h5>
                <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
                <button className="btn btn-outline-light btn-sm">Upgrade</button>
            </div>
            <div className="clearfix" /> */}
        </React.Fragment>
    );
};

type LeftSidebarProps = {
    menuClickHandler?: {},
    hideLogo?: boolean,
    hideUserProfile?: boolean,
    isLight?: boolean,
    isCondensed: boolean,
};

class LeftSidebar extends Component<LeftSidebarProps> {
    menuNodeRef: any;

    constructor(props: LeftSidebarProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    /**
     * Bind event
     */
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e: any) => {
        if (this.menuNodeRef.contains(e.target)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    /**
     * Handle click
     * @param {*} e
     * @param {*} item
     */
    /*:: handleClick: () => void */
    handleClick(e: {}) {
        console.log(e);
    }

    render() {
        const isCondensed = this.props.isCondensed || false;
        const isLight = this.props.isLight || false;
        const hideLogo = this.props.hideLogo || false;
        const hideUserProfile = this.props.hideUserProfile || false;

        return (
            <React.Fragment>
                <div className="left-side-menu" ref={node => (this.menuNodeRef = node)}>
                    {!hideLogo && (<React.Fragment>
                        <Link to="/" className="logo text-center logo-light">
                            <span className="logo-lg">
                                {/* <img src={com_logo} alt="logo" height="36" style={{paddingBottom:'7px', paddingRight:'5px'}}/> */}
                                <b style={{fontSize:'20px', color:'white'}}>
                                    {LangUtils.getLanguage(/*this.props.user.lang*/"ch", 'title.Rune Engine PoC')}
                                </b>
                            </span>
                        </Link>

                        {/* <Link to="/" className="logo text-center logo-dark">
                            <span className="logo-lg">
                                <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                            </span>
                            <span className="logo-sm">
                                <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                            </span>
                        </Link> */}
                    </React.Fragment>
                    )}

                    {!isCondensed && (
                        <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                            <SideBarContent
                                menuClickHandler={this.handleClick}
                                isLight={isLight}
                                hideUserProfile={hideUserProfile}
                            />
                        </SimpleBar>
                    )}
                    {isCondensed && (
                        <SideBarContent isLight={isLight} hideUserProfile={hideUserProfile} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default LeftSidebar;
