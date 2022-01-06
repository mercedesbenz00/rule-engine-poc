// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

// apps
import slackIcon from './icons/slack.png';
import bitbucketIcon from './icons/bitbucket.png';
import dribbbleIcon from './icons/dribbble.png';
import dropboxIcon from './icons/dropbox.png';
import githubIcon from './icons/github.png';
import gSuiteIcon from './icons/g-suite.png';

const Apps = [
    {
        name: 'Slack',
        icon: slackIcon,
        redirectTo: '/'

    },
    {
        name: 'GitHub',
        icon: githubIcon,
        redirectTo: '/'
    },
    {
        name: 'Dribbble',
        icon: dribbbleIcon,
        redirectTo: '/'
    },
    {
        name: 'Bitbucket',
        icon: bitbucketIcon,
        redirectTo: '/'
    },
    {
        name: 'Dropbox',
        icon: dropboxIcon,
        redirectTo: '/'
    },
    {
        name: 'G Suite',
        icon: gSuiteIcon,
        redirectTo: '/'
    },
];


type AppsDropdownProps = {};

type AppsDropdownState = {
    dropdownOpen?: boolean,
};

class AppsDropdown extends Component<AppsDropdownProps, AppsDropdownState> {
    constructor(props: AppsDropdownProps) {
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
        const apps = Apps || [];
        const chunk_size = 3;
        const appsChunks = Array(Math.ceil(apps.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => apps.slice(begin, begin + chunk_size));

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="btn btn-link nav-link dropdown-toggle arrow-none mr-0"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    <i className="mdi mdi-apps noti-icon"></i>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated dropdown-lg p-0">
                    <div className="p-2">
                        {appsChunks.map((chunk, idx) => (
                            <div className="row no-gutters" key={idx}>
                                {chunk.map((item, i) => (
                                    <div className="col" key={i}>
                                        <Link className="dropdown-icon-item" to={item.redirectTo}>
                                            <img src={item.icon} alt="" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default AppsDropdown;
