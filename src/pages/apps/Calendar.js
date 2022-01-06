// @flow
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';

import PageTitle from '../../components/PageTitle';

const CalendarApp = () => {
    const events = [
        {
            id: 1,
            title: 'Hey!',
            start: new Date().setDate(new Date().getDate() + 1),
            className: 'bg-warning text-white',
        },
        {
            id: 2,
            title: 'See John Deo',
            start: new Date(),
            end: new Date(),
            className: 'bg-success text-white',
        },
        {
            id: 3,
            title: 'Meet John Deo',
            start: new Date().setDate(new Date().getDate() + 2),
            className: 'bg-info text-white',
        },
        {
            id: 4,
            title: 'Buy a Theme',
            start: new Date().setDate(new Date().getDate() + 1),
            className: 'bg-primary text-white',
        },
        {
            id: 4,
            title: 'Discussion on Sprint 1',
            start: new Date().setDate(new Date().getDate() + 2),
            className: 'bg-danger text-white',
        },
    ];

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/calendar' },
                    { label: 'Calendar', path: '/apps/calendar', active: true },
                ]}
                title={'Calendar'}
            />

            <Row>
                <Col className="col-12">
                    <Card>
                        <CardBody>
                            <Row>
                                <Col lg={12}>
                                    {/* fullcalendar control */}
                                    <FullCalendar
                                        defaultView="dayGridMonth"
                                        plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                                        handleWindowResize={true}
                                        events={events}
                                        id="calendar"
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CalendarApp;
