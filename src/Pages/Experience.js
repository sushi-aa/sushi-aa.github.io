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
  skillrate:
  {
    width: 275,
    height: 400,
    marginLeft: "5%",
    marginTop: "2%",
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
  starsUsed:
  {
    //textAlign: "center",
    //background: "#333",
    color: "gold",
    display: "flex",
    size: "200px",
    float: "right",
    marginRight: "-12%",
    width: "50%"
    //height: "100vh",
  },
  skillGrid:
  {
    alignContent: "center"
  },
  projIntro:
  {
    color: "gold",
    fontSize: 30,
    marginLeft: "2%",
    marginTop: "2%",
    fontFamily: "Playfair Display",
    //textAlign: "center"
  },

  projIntro2:
  {
    color: "gold",
    fontSize: 30,
    marginLeft: "2%",
    marginTop: "5%",
    fontFamily: "Playfair Display",
    //textAlign: "center"
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

      
      <Grid className={classes.skillGrid} container spacing={2}>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={python}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Programming Languages
              </Typography>
              
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> Java </Typography>
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> Python </Typography>
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> C++ </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> VHDL </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> Matlab </Typography>
              <Typography className={classes.starsUsed}> ★★ </Typography>
              <Typography> R </Typography>

            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={vhdl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Concepts
              </Typography>

              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> OOP </Typography>
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> Data Structures </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> Algorithms </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> Machine Learning </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> Recursion </Typography>
              
              
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>
      
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={frontend}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Frontend
              </Typography>
             
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> HTML </Typography>
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> CSS </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> Javascript </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> React.js </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> MaterialUI </Typography>

            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>

      
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={softwares}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                IDEs and Tools
              </Typography>

              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography> VSCode </Typography>
              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography> Sublime Text </Typography>
              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography> PyCharm </Typography>
              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography> IntelliJ </Typography>
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> Eclipse </Typography>
              <Typography className={classes.starsUsed}> ★★★★ </Typography>
              <Typography> Github/git </Typography>
              <Typography className={classes.starsUsed}> ★★★ </Typography>
              <Typography> Vivado </Typography>
              
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>
      </Grid> 

      <Typography className={classes.projIntro2}>
        CS EXPERIENCE
      </Typography>

      <Grid container spacing={2}>

        <Grid item lg={3} md={4} sm={6} xs={12}>
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


        <Grid item lg={3} md={4} sm={6} xs={12}>
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

      <Grid item lg={3} md={4} sm={6} xs={12}>
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

      <Grid item lg={3} md={4} sm={6} xs={12}>
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

        <Grid item lg={3} md={4} sm={6} xs={12}>
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

        <Grid item lg={3} md={4} sm={6} xs={12}>
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
