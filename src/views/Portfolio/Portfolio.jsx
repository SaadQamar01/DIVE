import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

class Portfolio extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
<GridContainer >

<GridItem xs={12} sm={12} md={12} >
<NavPills
  alignCenter
  color="warning"
  tabs={[
    {
      tabButton: "Project",
      tabContent: (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} >
asdkjhasdjk
          </GridItem>
        </GridContainer>
      )
    },
    {
      tabButton: "Courses",
      tabContent: (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
          cincacasc
          </GridItem>
        </GridContainer>
      )
    },
    {
      tabButton: "Liked",
      tabContent: (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
          conection
          </GridItem>
        </GridContainer>
      )
    }
  ]}
/>
</GridItem>
</GridContainer>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(Portfolio);
