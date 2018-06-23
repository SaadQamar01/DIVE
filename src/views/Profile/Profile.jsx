import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from '@material-ui/core/Card';
class Profile extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    const image = require('../../assets/img/faces/christian.jpg')
    return (
      <div>
        <GridContainer style={{ marginTop: '40px' }}>
          <GridItem md={4}>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  <span>
                    Add a Project
                  </span>
                </div>
              </Card>
            </div>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add a Course
                </div>
              </Card>
            </div>
          </GridItem>
          <GridItem md={4}>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add a Resume
                </div>
              </Card>
            </div>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add an accomplishment
                </div>
              </Card>
            </div>
          </GridItem>
          <GridItem md={4}>
            <div className={classes.rightSider}>
              <div style={{ marginBottom: '15px' }}>
                Add an Avatar
            </div>
              <div style={{ marginBottom: '15px' }}>
                Add a cover photo
            </div>
            </div>
          </GridItem>
        </GridContainer>

      </div >
    );
  }
}

export default withStyles(profilePageStyle)(Profile);
