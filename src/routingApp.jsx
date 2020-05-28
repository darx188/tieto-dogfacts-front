import React, {Component} from 'react';
import factListComponent from './factListComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import factComponent from './factComponent'

class routingApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>I don't always bark at night!</h1>
                    <Switch>
                        <Route path="/" exact component={factListComponent} />
                        <Route path="/facts" exact component={factListComponent} />
                        <Route path="/facts/:id" component={factComponent} />
                        <Route path="/facts/:id:archive" component={factComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default routingApp