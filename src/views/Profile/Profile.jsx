import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";

// import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

// import EditableSection from '../EditableSection/EditableSection';

class Profile extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    return (
      <div>
        Profile
      </div>
    );
  }
}

// export default withStyles(profilePageStyle)(Profile);
export default Profile;
