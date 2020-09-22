/*
useful links for publishing to gh pages:
https://stackoverflow.com/questions/16316311/github-pages-and-relative-paths
https://maximorlov.com/deploying-to-github-pages-dont-forget-to-fix-your-links/
*/

import React from 'react';
//import {Box, Button, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../Components/Header";
import Typical from 'react-typical';
import Typography from '@material-ui/core/Typography';
import { MDBContainer, MDBFooter } from "mdbreact";
//import {AnimatedText} from "../AnimatedText";

const useStyles = makeStyles({
  copyright:
  {
    textAlign: "center",
    marginTop: "20%",
    color: "white"
  },
  
  myName:
  {
    fontSize: 75,
    textAlign: "center",
    marginTop: "17%",
    fontFamily: 'Graduate',
    '&:hover': {
      color: "purple",
      fontSize: 77
    }
  },
  
  describe:
  {
    fontSize: 30,
    textAlign: "center",
    marginTop: "2%",
    fontFamily: 'Apple Chancery'
  }
});


export default function Home() {
	const classes = useStyles();
  
  return (
    <>
      <Header/>
      <Typography className={classes.myName}>
        ARUSHI ARORA
      </Typography>

      <p className={classes.describe}>
        I am {' '}
        <Typical
          loop={Infinity}
          wrapper='e'
          steps={[
            'a CSE major. ', 2000,
            'a UCI student. ', 2000,
            'an only child. ', 2000,
            'a musician. ', 2000,
            'a coding enthusiast. ', 2000,
            'a deeply determined individual. ', 2000,
          ]}
        />
      </p>

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