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
    const resume = require('../../assets/img/icons/resume.png')
    const project = require('../../assets/img/icons/project.png')
    const course = require('../../assets/img/icons/course.png')
    const accomplishment = require('../../assets/img/icons/accomplishment.png')
    return (
      <div>
        <GridContainer style={{ marginTop: '40px' }}>
          <GridItem md={4}>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv} style={{backgroundColor:'#fff'}}>
                <img className={classes.img} src={project} />
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
              <div className={classes.roundPicDiv} style={{backgroundColor:'#fff'}}>
                <img className={classes.img} src={course} />
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
              <div className={classes.roundPicDiv} style={{backgroundColor:'#fff'}}>
                <img className={classes.img} src={resume} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add a Resume
                </div>
              </Card>
            </div>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv} style={{backgroundColor:'#fff'}}>
                <img className={classes.img} src={accomplishment} />
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
              <div style={{ marginBottom: '15px', position: 'relative' }}>
                <span style={{ display:"inline-block", marginRight: '10px' }}>Add an Avatar</span>
                <i class="material-icons" style={{ position: 'absolute' }}>check_circle_outline</i>
              </div>
              <div style={{ marginBottom: '15px', position: 'relative' }}>
                <span style={{ display:"inline-block", marginRight: '10px' }}>
                  Add a cover photo
                </span>
                <i class="material-icons" style={{ position: 'absolute' }}>check_circle_outline</i>
              </div>
            </div>
          </GridItem>
        </GridContainer>

      </div >
    );
  }
}

export default withStyles(profilePageStyle)(Profile);
