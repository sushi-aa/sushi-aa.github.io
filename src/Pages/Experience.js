import React from 'react';
//import {Box, Button, Grid, Avatar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Card, Typography, Button, Grid, Box, Avatar} from "@material-ui/core";
import Header from "../Components/Header";
import { MDBContainer, MDBFooter } from "mdbreact";
import petrlogo from "../petrlogo.png";
import hackenger from "../hackenger.png";
import backend from "../backend.png";
import frontend from "../frontend.png";
import softwares from "../softwares.png";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  copyright:
  {
    textAlign: "center",
    marginTop: "20%",
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
    width: 360,
    height: 320,
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
    color: "purple",
    fontSize: 20,
    marginLeft: "2%",
    marginTop: "2%"
  }
});


export default function Experience() {
	const classes = useStyles();
  
  return (
    <>
      <Header/>
      
      <Typography className={classes.projIntro}>
        CS SKILLS
      </Typography>

      <Grid container spacing={2}>

        <Grid item lg={3} md={3} sm={6} xs={12}>
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

        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Card className={classes.project}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={backend}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Backend
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Python, Java, C++, SQL, VHDL (hardware design)
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12}>
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
                VSCode, R, SublimeText, IntelliJ, PyCharm, git, familiarity with Firebase
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

        <Grid item lg={3} md={3} sm={6} xs={12}>
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


        <Grid item lg={3} md={3} sm={6} xs={12}>
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

      <Grid item lg={3} md={3} sm={6} xs={12}>
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

      <Grid item lg={3} md={3} sm={6} xs={12}>
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
                Along with my peers Dong Yoon Lee and John Yu, created a website similar to Tinder but 
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
