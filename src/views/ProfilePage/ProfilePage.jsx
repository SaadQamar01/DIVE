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

import profile from "assets/img/faces/christian.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import EditableSection from '../EditableSection/EditableSection';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        {/* <Header
          color="transparent"
          brand="DIVE"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        /> */}
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
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
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem sm={12} sm={12} md={6}>
                  <Button>profile</Button>
                  <Button>profilio</Button>
                  <Button>Connections</Button>
                  <Button>Connection</Button>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem s={12} sm={12} md={4}>
                  <EditableSection />
                  {/* <div>sidebar</div> */}
                </GridItem>
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  nav warapper
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
