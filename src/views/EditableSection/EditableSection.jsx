import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components

import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { DialogContent } from "@material-ui/core";


import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';


class EditableSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: '3'
        }
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <GridContainer>
                <GridItem>
                    <Card>
                        <CardBody>
<div style={{border:"3px solid black",borderRadius:8}}>
                            <div style={{ paddingTop:5, fontSize: '20px', color: 'red', fontWeight: 'bold' }}>
                                Overview
                    </div>
                            <div style={{ fontSize: '10' }}>
                                Work Experience
                    </div>
                            <div style={{ fontSize: '10' }}>
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
                                    Projects <span style={{ marginBottom: 7, padding: 5, fontSize: 15, color: 'red', fontWeight: 'bold' }} class="badge badge-default" >4</span>
                                </Button>
                                <Button link style={{ width: 90 }}>
                                    Skills <span style={{ marginBottom: 7, padding: 3, fontSize: 15, color: 'red', fontWeight: 'bold' }} class="badge badge-default" >4</span>
                                </Button>
                                <Button link style={{ width: 90 }}>
                                    Connections <span style={{ marginBottom: 7, padding: 3, fontSize: 15, color: 'red', fontWeight: 'bold' }} class="badge badge-default" >4</span>
                                </Button>
                            </div>
                            </div>

                            <button type='button' data-container="body" data-toggle="popover" data-placement='dsjkhfjksdhfjk' color="primary" style={{fontWeight:'bold',width:'100%',backgroundColor:'white',color:'orange',border:"3px solid black"}} size='regular' >Calender</button>
                            <Button color="primary" style={{fontWeight:'bold',width:'100%',backgroundColor:'white',color:'orange',border:"3px solid black"}} size='large' >Education</Button>
                            <Button color="primary"style={{fontWeight:'bold',width:'100%',backgroundColor:'white',color:'orange',border:"3px solid black"}} size='large' >Work Experience</Button>
                            <Button color="primary" style={{fontWeight:'bold',width:'100%',backgroundColor:'white',color:'orange',border:"3px solid black"}}size='large' >Skills</Button>
                            <Button color="primary"  style={{fontWeight:'bold',width:'100%',backgroundColor:'white',color:'orange',border:"3px solid black"}}size='large' >Referals</Button>
                            <Button color="primary" style={{fontWeight:'bold',width:'100%',backgroundColor:'white',color:'orange',border:"3px solid black"}}size='large' >Private: Jobs</Button>
                        </CardBody>
                         </Card>


                </GridItem>

            </GridContainer>
        )
    }
}

export default EditableSection;
