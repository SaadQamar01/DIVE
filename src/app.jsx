import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.1.0";

var hist = createBrowserHistory();
// import image from "assets/img/bg7.jpg";
// import { Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />

                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route path={prop.path} key={key} component={prop.component} />;
                        })}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default (App);
