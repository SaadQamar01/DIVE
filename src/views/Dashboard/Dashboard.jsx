import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import profile from "assets/img/faces/christian.png";
import mainRoutes from "routes/mainRoutes.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import EditableSection from '../EditableSection/EditableSection';
import Portfolio from "./../Portfolio/Portfolio.jsx";
import Profile from "./../Profile/Profile.jsx";
import Discover from "./../Discover/Discover.jsx";
import Connections from "./../Connections/Connections.jsx";
var hist = createBrowserHistory();

class Dashboard extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <div>
                <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Name</h3>
                                        <h5>Designation</h5>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-twitter"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-facebook"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-pinterest"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-youtube"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-linkedin"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-google-plus"} />
                                        </Button>
                                    </div>
                                    <Button style={{ backgroundColor: '#fff', color: '#000' }} onClick={()=> this.props.history.push('/dashboard/profile')}>Profile</Button>
                                    <Link to={"/dashboard/portfolio"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Portfolio</Button></Link>
                                    <Link to={"/dashboard/connections"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Connections</Button></Link>
                                    <Link to={"/dashboard/discover"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Discover</Button></Link>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem style={{ width: '30%' }}>
                                <EditableSection />
                            </GridItem>
                            <GridItem style={{ width: '70%' }}>
                                {/* <Router history={hist}>
                                    <Switch> */}
                                {/* <Route path="dashboard/profile" component={Profile} />
                                        <Route path="dashboard/connections" component={Connections} />
                                        <Route path="dashboard/portfolio" component={Portfolio} />
                                        <Route path="dashboard/discover" component={Discover} /> */}
                                {/* </Switch>
                                </Router> */}
                                <Router history={hist}>
                                    <Switch>
                                        {mainRoutes.map((prop, key) => {
                                            return <Route path={prop.path} key={key} component={prop.component} />;
                                        })}
                                    </Switch>
                                </Router>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(Dashboard);
