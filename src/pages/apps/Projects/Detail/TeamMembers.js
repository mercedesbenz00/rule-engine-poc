// @flow
import React from 'react';

import avatar1 from '../../../../assets/images/users/avatar-6.jpg';
import avatar2 from '../../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../../assets/images/users/avatar-8.jpg';

const TeamMembers = () => {
    return (
        <div>
            <h5>Team Members:</h5>

            <a
                href="/"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Mat Helme"
                className="d-inline-block mr-1">
                <img src={avatar3} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
            </a>

            <a
                href="/"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Michael Zenaty"
                className="d-inline-block mr-1">
                <img src={avatar1} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
            </a>

            <a
                href="/"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="James Anderson"
                className="d-inline-block">
                <img src={avatar2} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
            </a>
        </div>
    );
};

export default TeamMembers;
