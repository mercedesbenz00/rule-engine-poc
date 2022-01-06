// @flow
import React from 'react';

import PageTitle from '../components/PageTitle';

const Starter = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[{ label: 'Pages', path: '/pages/starter' }, { label: 'Starter', active: true }]}
                title={'Starter'}
            />
        </React.Fragment>
    );
};

export default Starter;
