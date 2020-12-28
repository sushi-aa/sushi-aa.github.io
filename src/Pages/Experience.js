import React from 'react';
//import {Box, Button, Grid, Avatar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import {Card, Typography, Button, Grid, Box, Avatar} from "@material-ui/core";
import Header from "../Components/Header";
import { MDBContainer, MDBFooter } from "mdbreact";
import petrlogo from "../petrlogo.png";
import hackenger from "../hackenger.png";
import backend from "../backend.png";
import frontend from "../frontend.png";
import softwares from "../softwares.png";
import piano from "../piano.jpeg"; 
import python from "../python.png";
import vhdl from "../vhdl.png";
import java from "../java.png";
import cpp from "../cpp.png";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  breakpoints:
  {
      ss: 0,
      xs: 600,
      sm: 900,
      sm2: 1000,
      sm3: 1100,
      md: 1280,
      lg: 1450,
      xl: 1920,
  },
  copyright:
  {
    textAlign: "center",
    marginTop: "7.5%",
    color: "white"
  },
  skills:
  {
    marginTop: "4%",
  },
  skills2:
  {
    marginTop: "8%",
  },
  tSkills:
  {
    fontSize: 30,
    fontFamily: "Playfair Display",
    color: "purple",
    marginRight: "80%",
  },
  pSkills:
  {
    fontSize: 25,
    fontFamily: "Playfair Display",
    color: "purple",
    marginLeft: "80%"
  },
  project:
  {
    width: 275,
    height: 400,
    //maxHeight: 400,
    marginLeft: "5%",
    marginTop: "2%",
  },
  
  media:
  {
    height: 140
  },
  projIntro:
  {
    color: "gold",
    fontSize: 20,
    marginLeft: "2%",
    marginTop: "2%",
    //textShadow: "text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
  },
}));


export default function Experience() {
  const classes = useStyles();
 
  
  return (
    <>
      <Header/>
      
      <Typography className={classes.projIntro}>
        CS SKILLS
      </Typography>

      
      <Grid container spacing={2}>

        <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={python}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Python
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Spent 3 quarters (1 school year) working with Python. Wrote programs and code
                that dealt with loops, recursion, dictionaries, linked lists, binary trees, classes,
                the pygame library, tkinter, etc. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid item ss = {6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={vhdl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                VHDL
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Worked with this hardware design language for one quarter after building 
                foundational knowledge needed to write the code the previous quarter. Wrote 
                programs that modeled an object locator, a selector, a vending machine (using
                the logic of an FSM), and a low fuel detector. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid item ss = {6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={java}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Java
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                First learned Java in my second year of high school, and went on to take
                the APCS class + test the next year. Worked with loops, recursion, the Swing library,
                sorting, objects/classes/inheritance/interfaces/abstract classes, etc. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid item  ss = {6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cpp}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                C++
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Began learning C++ in the summer after my first year at UCI. Will be continuing
                to learn about data structure implementations and analysis using C++ during my 
                second year. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

      
        <Grid item ss = {6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={frontend}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Frontend
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                React.js, Node.js, HTML, CSS, Javascript, MaterialUI
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

      
        <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={softwares}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Softwares
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                VSCode, R, SublimeText, IntelliJ, PyCharm, git/version control, familiarity with Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>
      </Grid> 

      <Typography className={classes.projIntro}>
        CS EXPERIENCE
      </Typography>

      <Grid container spacing={2}>

        <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={hackenger}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hackenger
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Collaborated with a team of 4 to build a messaging app, similar to iMessage, 
                during the hackathon ZotHacks organized by HackUCI. Utilized MongoDB, Postman,
                React/Node, HTML/CSS. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>


        <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://m.foolcdn.com/media/dubs/images/man_typing_in_code_on_laptop_GettyImages-698430.original.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Buzzr
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                During RoseHacks 2020, collaborated with a team of 4 to create 
                a women-centric website allowing women in the STEM career path to find mentors that can 
                guide them on both an academic and personal path.
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

      <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
        <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://static.idtech.com/next/assets/images/idtc-logo-with-scoop.svg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Online Private Instructor
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                As an online private instructor, tutored students ages 7-19 in Java, Python,
                Pre-Algebra, Algebra I, Algebra II, Calculus, and Statistics. Created lesson plans,
                developed sample code, worked through problems, and wrote post-session reports. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
        <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={petrlogo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Petr
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Along with two of my peers, created a website similar to Tinder but 
                for people's pets. Used Postgres SQL, React, and Material UI to create pages for users to
                login, signup, create a profile for their pet, and start "matching" with other pets.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
    </Grid>

    <Typography className={classes.projIntro}>
        MUSIC
    </Typography>

    <Grid container spacing={2}>

        <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={piano}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Piano
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I've been playing piano since I was 5 years old. As part of 
                my interest in piano, I've attended various competitions, concerts,
                outreach recitals, classes, and other events over the last 13+ years.
                Throughout the years, I've gained experience playing a variety of classical
                pieces and have built an extensive repertoire. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid item ss={6} sm2={6} lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.musicnotes.com/images/productimages/mtd/MN0150775.gif"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Voice
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Although I've been singing informally for as long as I can remember, I started
                taking voice lessons near the end of middle school, at the recommendation
                of my choir teacher at school. Throughout high school, I participated
                in various concerts, workshops, competitions, and other such
                events while learning arias and musical theatre pieces. 
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

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
