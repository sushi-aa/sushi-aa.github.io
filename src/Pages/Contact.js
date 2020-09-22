import React from 'react';
//import {Box, Button, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../Components/Header";
import { MDBContainer, MDBFooter } from "mdbreact";

const useStyles = makeStyles({
  copyright:
  {
    textAlign: "center",
    marginTop: "20%",
    color: "white"
  },
});


export default function Contact() {
	const classes = useStyles();
  
  return (
    <>
      <Header/>

      <MDBFooter color="purple" className={classes.copyright}>
      <div className={classes.copyright}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Arushi Arora
        </MDBContainer>
      </div>
    </MDBFooter>
      
	</>
	);
	
}