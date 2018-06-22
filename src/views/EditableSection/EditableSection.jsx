import React from "react";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "assets/img/faces/christian.png";
import classNames from "classnames";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        textAlign: 'center'
    },
});


class EditableSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: '3'
        }
    }

    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <GridContainer>
                <GridItem md={10}>
                    <Card>
                        <CardBody>
                            <div style={{ border: "3px solid black", borderRadius: 8, textAlign: "center" }}>
                                <div style={{ paddingTop: 5, fontSize: '15px', color: 'red', fontWeight: 'bold' }}>
                                    Overview
                                </div>
                                <div style={{ fontSize: '8' }}>
                                    Work Experience
                                </div>
                                <div style={{ fontSize: '8' }}>
                                    Country
                                </div>
                                <div >
                                    <Button justIcon link >
                                        <i className={"fab fa-instagram"} />
                                    </Button>
                                    <Button justIcon link >
                                        <i className={"fab fa-instagram"} />
                                    </Button>
                                    <Button justIcon link >
                                        <i className={"fab fa-instagram"} />
                                    </Button>
                                </div>
                                <div>
                                    <Button link style={{ width: 75 }}>
                                        Projects <span style={{ marginBottom: 7, padding: 5, fontSize: 15, color: 'red', fontWeight: 'bold' }} className="badge badge-default" >4</span>
                                    </Button>
                                    <Button link style={{ width: 90 }}>
                                        Skills <span style={{ marginBottom: 7, padding: 3, fontSize: 15, color: 'red', fontWeight: 'bold' }} className="badge badge-default" >4</span>
                                    </Button>
                                    <Button link style={{ width: 90 }}>
                                        Connections <span style={{ marginBottom: 7, padding: 3, fontSize: 15, color: 'red', fontWeight: 'bold' }} className="badge badge-default" >4</span>
                                    </Button>
                                </div>
                            </div>
                            <div className={classes.root}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Calender</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Education</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Work Experience</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Skills</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <div style={{ borderBottom: '3px solid #a9abad'}}>
                                                <span style={{ fontWeight: 'bold', fontSize: 16 }}> Skill </span>
                                                | 0 (0 is AVATAR + FULL NAME list industry of endorsers of this skill, if any  endorsers)
                                            </div>
                                            <div style={{ borderBottom: '3px solid #a9abad', paddingTop: 10, paddingBottom:10 }}>
                                                <div style={{ fontWeight: 'bold', fontSize: 16, }}>Skil</div>
                                                <div>Industry/Major</div>
                                            </div>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Referals</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ flex: 1 }}>
                                                    <img src={profile} alt="..." className={imageClasses} height={80} width={80} />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: 17 }}> Full Name </div>
                                                    <div >Position </div>
                                                    <div> Industry Position/Organization </div>
                                                    <div> Testimony </div>
                                                </div>
                                            </div>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Private: Jobs</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        )
    }
}

EditableSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditableSection);
