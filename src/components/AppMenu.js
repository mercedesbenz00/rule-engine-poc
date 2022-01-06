// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MetisMenu from 'metismenujs/dist/metismenujs';

import { initMenu, changeActiveMenuFromLocation } from '../redux/actions';
import LangUtils from '../helpers/langUtils';

const MenuItemWithChildren = ({ item, linkClassNames, subMenuClassNames, activatedMenuItemIds, lang }) => {
    return (
        <li
            className={classNames('side-nav-item', {
                'mm-active': activatedMenuItemIds.indexOf(item.id) >= 0,
                active: activatedMenuItemIds.indexOf(item.id) >= 0,
            })}>
            <Link
                to="#"
                className={classNames('has-arrow', 'side-sub-nav-link', linkClassNames)}
                aria-expanded={activatedMenuItemIds.indexOf(item.id) >= 0}>
                {item.icon && <i className={item.icon}></i>}
                {item.badge && (
                    <span className={`badge badge-${item.badge.variant} float-right`}>{item.badge.text}</span>
                )}
                <span>{LangUtils.getLanguage(lang, item.name)}</span>
            </Link>

            <ul
                className={classNames(subMenuClassNames, 'mm-collapse', {
                    'mm-collapsed mm-show': activatedMenuItemIds.indexOf(item.id) >= 0,
                })}
                aria-expanded={activatedMenuItemIds.indexOf(item.id) >= 0}>
                {item.children.map((child, i) => {
                    return (
                        <React.Fragment key={i}>
                            {child.children ? (
                                <MenuItemWithChildren
                                    item={child}
                                    linkClassNames=""
                                    activatedMenuItemIds={activatedMenuItemIds}
                                    subMenuClassNames="side-nav-third-level"
                                    lang={lang}
                                />
                            ) : (
                                child.show&&<MenuItem
                                    item={child}
                                    className={classNames({ 'mm-active': activatedMenuItemIds.indexOf(child.id) >= 0 })}
                                    linkClassName=""
                                    lang={lang}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </li>
    );
};

const MenuItem = ({ item, className, linkClassName, lang }) => {
    return (
        <li className={classNames('side-nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} lang={lang} />
        </li>
    );
};

const MenuItemLink = ({ item, className, lang }) => {
    return (
        <Link to={item.path} className={classNames('side-nav-link-ref', 'side-sub-nav-link', className)}>
            {item.icon && <i className={item.icon}></i>}
            {item.badge && <span className={`badge badge-${item.badge.variant} float-right`}>{item.badge.text}</span>}
            <span> {LangUtils.getLanguage(lang, item.name)} </span>
        </Link>
    );
};

/**
 * Renders the application menu
 */
type Props = {
    initMenu: PropTypes.func,
    changeActiveMenuFromLocation: PropTypes.func,
    menu: PropTypes.object,
    mode: string,
    history: PropTypes.object,
};
class AppMenu extends Component<Props> {
    menuRef = null;
    openedMenuItems = [];

    static defaultProps = {
        mode: 'vertical',
    };

    componentDidMount = () => {
        if (!this.props.menu.menuItems) this.props.initMenu();
        else this.initMenu();

        this.props.history.listen((location, action) => {
            // hide menus in mobile
            if (document.body) {
                document.body.classList.remove('sidebar-enable');
            }

            if (this.menuRef && this.openedMenuItems && this.openedMenuItems.length) {
                for (const el of this.openedMenuItems) {
                    this.menuRef.hide(el);
                }
                this.openedMenuItems = [];
            }
            this.props.changeActiveMenuFromLocation();
        });
    };

    componentDidUpdate = prevProps => {
        if (
            !prevProps.menu.menuItems ||
            (prevProps.menu.menuItems && prevProps.menu.menuItems !== this.props.menu.menuItems)
        ) {
            this.initMenu();
        }

        if (!this.props.menu.activatedMenuItemIds) {
            this.props.changeActiveMenuFromLocation();
        }
    };

    initMenu() {
        if (this.props.mode === 'horizontal') {
            const menuRef = new MetisMenu('#menu-bar').on('shown.metisMenu', event => {
                this.openedMenuItems.push(event.detail.shownElement);
                const menuClick = e => {
                    if (!event.target.contains(e.target)) {
                        menuRef.hide(event.detail.shownElement);
                        window.removeEventListener('click', menuClick);
                    }
                };
                window.addEventListener('click', menuClick);
            });
            this.menuRef = menuRef;
        } else {
            this.menuRef = new MetisMenu('#menu-bar');
        }
    }

    render() {
        const isHorizontal = this.props.mode === 'horizontal';
        var activatedKeys = isHorizontal
            ? []
            : this.props.menu
            ? this.props.menu.activatedMenuItemIds
                ? this.props.menu.activatedMenuItemIds
                : []
            : [] || [];

        /**
         * Horizontal layout - We are controlling how many menu items can be displayed in it
         */
        let menuItems = this.props.menu && this.props.menu.menuItems ? this.props.menu.menuItems : [];
        const defaultDisplayedItems = window.screen.width > 1366 ? 7 : 5;

        if (isHorizontal && menuItems.length > defaultDisplayedItems) {
            const displayedItems = menuItems.slice(0, defaultDisplayedItems);
            const otherItems = {
                id: menuItems.length + 1,
                path: '/',
                name: 'More',
                icon: 'uil-ellipsis-h',
                children: menuItems.slice(7, menuItems.length),
            };
            menuItems = [...displayedItems, otherItems];
        }

        const {user} = this.props.user
        return (
            <React.Fragment>
                <div className={classNames({ 'topbar-nav': isHorizontal })}>
                    {this.props.menu && menuItems && menuItems.length ? (
                        <ul className="metismenu side-nav" id="menu-bar">
                            {menuItems.map((item, i) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <React.Fragment>
                                            {item.header && !isHorizontal && (
                                                <li className="side-nav-title side-nav-item" key={i + '-el'}>
                                                    {item.header}
                                                </li>
                                            )}

                                            {item.children ? (
                                                <MenuItemWithChildren
                                                    item={item}
                                                    subMenuClassNames="side-nav-second-level"
                                                    activatedMenuItemIds={activatedKeys}
                                                    linkClassNames="side-nav-link"
                                                    lang={user.lang||'ch'}
                                                />
                                            ) : (
                                                <MenuItem
                                                    item={item}
                                                    className={classNames({
                                                        'mm-active': activatedKeys.indexOf(item.id) >= 0,
                                                    })}
                                                    linkClassName="side-nav-link"
                                                    lang={user.lang||'ch'}
                                                />
                                            )}
                                        </React.Fragment>
                                    </React.Fragment>
                                );
                            })}
                        </ul>
                    ) : null}
                </div>
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
    )(AppMenu)
);
