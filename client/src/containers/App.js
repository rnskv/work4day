import React, { Component } from "react";
import RouterView from '../modules/router'
import { BrowserRouter as Router } from "react-router-dom";

import routes from '../configurations/routes';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <RouterView routes={routes} />
            </Router>
        );
    }
}

export default App;