import React from 'react';
import {Box, Avatar, Typography, Grid} from "@material-ui/core";
import {makeStyles,} from "@material-ui/core/styles";
import Header from "../Components/Header";
import arushi from "../arushi3.jpeg";
//import arushi from "../arushi.jpeg";
import { MDBContainer, MDBFooter } from "mdbreact";
import {SiGithub, SiLinkedin, SiFacebook} from "react-icons/si";

const useStyles = makeStyles({
  copyright:
  {
    textAlign: "center",
    marginTop: "12%",
    color: "white"
  },
    myPic:
    {
      width: "25%",
      height: "25%",
      marginLeft: 100,
    },
    profile1:
    {
      marginTop: "10%",
      marginRight: "10%",
      justifyItems: "center"
    },
    aa:
    {
      fontSize: 40,
      color: "gold",
      fontFamily: "Playfair Display",
    },
    description:
    {
      color: "white",
      fontSize: 20,
      fontFamily: "Playfair Display",
      //textAlign: "center"
    },
    descriptionBox:
    {
      marginLeft: "10%",
    },
    description2:
    {
      color: "white",
      fontSize: 20,
      fontFamily: "Playfair Display",
      marginTop: "2%",
    },
    social:
    {
      
      marginLeft: "22%",
    },
    icons:
    {
      color: "gold",
      //size: "5em",
      '&:hover':
      {
        opacity: "0.9",
        transitionDuration: "0.1s",
        color: "white",
      },
      marginRight: "4%",
    }
  
});


export default function About() {
	const classes = useStyles();
    
  return (
    <>
      <Header/>
      <Box display="flex" flexDirection="row-reverse" p={1} m={1} className={classes.profile1}>
         <Avatar src={arushi} className={classes.myPic}> </Avatar>
         <Box className={classes.descriptionBox}>
            <Typography className={classes.aa}>{"ABOUT ME"}</Typography>
            <Typography className={classes.description}>
              My name is Arushi Arora. I'm currently a 2nd year CSE student 
              at the University of California, Irvine. 
              My passions are music and technology; when I'm not coding or
              playing the piano, I can be found singing, figure skating, reading
              an intriguing novel, making spotify playlists, or simply trying to relax and 
              enjoy some free time!
            </Typography>
            <Typography className={classes.description2}>
              In this website, you'll find a collection of my interests and
              experiences. In terms of CS, I am passionate about machine learning, 
              artificial intelligence, cybersecurity, and sustainability. My main and strongest areas of
              CS experience so far are Java, Python, C++, HTML, and CSS. Feel free to check out
              the rest of my website to learn more about me. This website is currently a work in progress,
              so more details and sections will be added soon!
            </Typography>
         </Box>
      </Box>

      <Grid className={classes.social} direction="row" justify="space-evenly" alignItems="center">
        <a className={classes.icons} href="https://github.com/sushi-aa"> 
          <SiGithub size="3em" className={classes.icons}/>
        </a>
        <a className={classes.icons} href="https://www.facebook.com">
          <SiFacebook size="3em" className={classes.icons}/>
        </a>
        <a className={classes.icons} href="https://www.linkedin.com/in/arushi-arora-6874541ba/">
          <SiLinkedin size="3em" className={classes.icons}/>
        </a>
      </Grid>

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