// @flow
import React, { Component } from 'react';
import Routes from './routes/Routes';

// setup fake backend
import { 
    configureFakeBackend,
    configureFakeMainBackend,
} from './helpers';

// Themes
import './assets/scss/Saas.scss';

// For Dark import Saas-Dark.scss
// import './assets/scss/Saas-Dark.scss';

// For Modern import Modern.scss
// import './assets/scss/Modern.scss';
// For modern dakr import Modern-Dark.scss
// import './assets/scss/Modern-Dark.scss';

// For Creative demo import Modern.scss
// import './assets/scss/Creative.scss';
// For Creative dark demo import Modern.scss
// import './assets/scss/Creative-Dark.scss';

// configure fake backend
configureFakeBackend();
configureFakeMainBackend();

type AppProps = {};

/**
 * Main app component
 */
class App extends Component<AppProps> {
    render() {
        return <Routes></Routes>;
    }
}

export default App;
