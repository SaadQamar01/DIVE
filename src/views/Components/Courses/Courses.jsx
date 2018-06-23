import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import CoursePageStyle from "../../../assets/jss/material-kit-react/views/coursePage.jsx";


class Courses extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
         Courses
      </div>
    );
  }
}

export default withStyles(CoursePageStyle)(Courses);
