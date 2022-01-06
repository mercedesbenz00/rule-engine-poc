// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown,
    Button,
} from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const colors = [
    {
        name: 'Primary',
        color: 'primary',
    },
    {
        name: 'Secondary',
        color: 'secondary',
    },
    {
        name: 'Success',
        color: 'success',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Dark',
        color: 'dark',
    },
];

const SingleButtonDropdown = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Single button dropdowns</h4>
                <p className="text-muted font-14">
                    You can use <code>UncontrolledButtonDropdown</code> to create a simple dropdown
                </p>

                {/* simple */}
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="light" caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                {/* animated */}
                <UncontrolledButtonDropdown className="ml-5">
                    <DropdownToggle color="secondary" caret>
                        Animated Dropdown
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-animated">
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </CardBody>
        </Card>
    );
};

const ColorVariantButtonDropdown = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="header-title">Variant</h4>
                    <p className="text-muted font-14 mb-3">
                        The best part is you can do this with any button variant, too:
                    </p>

                    {colors.map((color, index) => {
                        return (
                            <UncontrolledButtonDropdown key={index} className="mr-1">
                                <DropdownToggle caret color={color.color}>
                                    {color.name}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        );
                    })}
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

const SplitColorVariantButtonDropdown = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="header-title">Split button dropdowns</h4>
                    <p className="text-muted font-14 mb-3">
                        You can split button dropdowns by adding <code>toggle</code> and <code>Button</code> together.
                    </p>

                    {colors.map((color, index) => {
                        return (
                            <UncontrolledButtonDropdown direction="down" key={index} className="mr-1 mb-1">
                                <Button color={color.color}>{color.name}</Button>
                                <DropdownToggle caret color={color.color}></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        );
                    })}
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

const ButtonDropdownSizes = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="header-title">Sizing</h4>
                    <p className="text-muted font-14">
                        Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
                    </p>

                    <UncontrolledButtonDropdown size="lg" className="mr-2">
                        <DropdownToggle color="light" caret>
                            Large
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown size="sm">
                        <DropdownToggle color="light" caret>
                            Small
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

const VariantButtonDropdowns = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="header-title">Drop varient</h4>

                    <p className="text-muted font-14">
                        Trigger dropdown menus at the different direction of the elements by adding{' '}
                        <code>direction</code> attribute.
                    </p>

                    <UncontrolledButtonDropdown direction="right">
                        <DropdownToggle caret>Drop right</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    {'  '}

                    <UncontrolledButtonDropdown direction="up">
                        <DropdownToggle caret>Dropup</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    {'  '}

                    <UncontrolledButtonDropdown direction="left">
                        <DropdownToggle caret>Drop left</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

const ModifiersButtonDropdowns = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="header-title">Modifiers</h4>

                    <p className="text-muted font-14">
                        You can modify the menu rendering by overriding <code>modifiers</code>
                    </p>

                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret>Modified Dropdown Menu</DropdownToggle>
                        <DropdownMenu
                            modifiers={{
                                setMaxHeight: {
                                    enabled: true,
                                    order: 890,
                                    fn: data => {
                                        return {
                                            ...data,
                                            styles: {
                                                ...data.styles,
                                                overflow: 'auto',
                                                maxHeight: '100px',
                                            },
                                        };
                                    },
                                },
                            }}>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

const Dropdowns = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'UI', path: '/ui/dropdowns' },
                    { label: 'Base UI', path: '/ui/dropdowns' },
                    { label: 'Dropdowns', path: '/ui/dropdowns', active: true },
                ]}
                title={'Dropdowns'}
            />

            <Row>
                <Col lg={6}>
                    <SingleButtonDropdown />
                </Col>

                <Col lg={6}>
                    <ColorVariantButtonDropdown />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <SplitColorVariantButtonDropdown />
                </Col>
                <Col lg={6}>
                    <ButtonDropdownSizes />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <VariantButtonDropdowns />
                </Col>
                <Col lg={6}>
                    <ModifiersButtonDropdowns />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Dropdowns;
