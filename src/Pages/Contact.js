import React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../Components/Header";
import { MDBContainer, MDBFooter } from "mdbreact";
import { useHistory } from "react-router-dom";
import "./Contact.css"


const useStyles = makeStyles({
  copyright:
  {
    textAlign: "center",
    marginTop: "20%",
    color: "white"
  },
  comingsoon:
  {
    color: "purple",
    fontSize: 20,
    textAlign: "center",
    marginTop: "20%"
  },
  btn:
  {
    '&:hover':
    {
      color: "gold"
    }

  }
});


export default function Contact() {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (url) => {
    history.push('/');
    history.push(url);
  };

  
  return (
      <>
      <Header/>

      <div class="contact-form">
        <h1>Contact Me!</h1>
        <div class="txt">
          <label>FULL NAME: </label>
          <input type="text" name="" placeholder="Full Name" />
        </div>
      
        <div class="txt">
          <label>EMAIL: </label>
          <input type="text" name="" placeholder="Email Address"/>
        </div>

        <div class="txt">
          <label>MESSAGE: </label>
          <textarea></textarea>
        </div>
        <Button onClick={() => handleClick("contacted")} class="btn">SEND</Button>
      </div>

      <MDBFooter color="white" className={classes.copyright}>
      <div className={classes.copyright}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Arushi Arora
        </MDBContainer>
      </div>
    </MDBFooter>
      
    </>
	
	);
	
}