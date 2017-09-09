import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import App from 'containers/App';

const routes = () => (
    <Router>
        <Route component={App} />
    </Router>
)

export default routes;