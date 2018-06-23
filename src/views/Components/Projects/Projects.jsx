import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import ProjectsPageStyle from "../../../assets/jss/material-kit-react/views/projectsPage.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';

class Projects extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div >
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <GridContainer style={{ marginTop: '40px' }}>
              <GridItem md={4}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      <span>
                        Project 1
                  </span>
                    </div>
                  </Card>
                </div>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 2
                </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem md={4}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 3
                </div>
                  </Card>
                </div>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 4
                </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem md={4}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 5
                </div>
                  </Card>
                </div>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 6
                </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem md={4}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 7
                </div>
                  </Card>
                </div>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 8
                </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem md={4}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 9
                </div>
                  </Card>
                </div>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 10
                </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem md={4}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 11
                </div>
                  </Card>
                </div>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      Project 12
                </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} style={{ marginTop: '20px' }}>
            <div style={{ border: '1px solid grey', width: '40%', borderRadius: '15px', position: 'relative', float: 'right', marginRight: '30px' }}>
              <input type="search" name="search Bar" placeholder='Search' id="searchbar" style={{ width: '70%', border: 'none', marginLeft: '10px' }} />
              <i class="material-icons" style={{ position: 'absolute' }}>search</i>
            </div>
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}

export default withStyles(ProjectsPageStyle)(Projects);