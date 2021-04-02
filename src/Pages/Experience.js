import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Card, Typography, Grid} from "@material-ui/core";
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
import epidatalogo from "../epidatalogo.png"
import aicps from "../aicps.png"


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
  skillTitle:
  {
    color: "white"
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
    backgroundColor: "black",
    borderColor: "gold",
  },
  project:
  {
    width: 275,
    height: 400,
    backgroundColor: "black",
    borderColor: "gold",
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
    color: "white",
    fontSize: 30,
    marginLeft: "2%",
    marginTop: "2%",
    fontFamily: "Playfair Display",
  },
  d1:
  {
    color: "white"
  },
  projIntro2:
  {
    color: "white",
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
          <Card className={classes.skillrate} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={python}
            />
            <CardContent>
              <Typography className={classes.skillTitle} gutterBottom variant="h5" component="h2">
                Backend
              </Typography>
              
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> Java </Typography>
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> Python </Typography>
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> C++ </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> VHDL </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> Matlab </Typography>
              <Typography className={classes.starsUsed}> ★★☆☆☆ </Typography>
              <Typography className={classes.d1}> R </Typography>

            </CardContent>
          
          </Card>
        </Grid>
      
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={frontend}
            />
            <CardContent>
              <Typography className={classes.skillTitle} gutterBottom variant="h5" component="h2">
                Frontend
              </Typography>
             
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> HTML </Typography>
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> CSS </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> Javascript </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> React.js </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> MaterialUI </Typography>

            </CardContent>
          
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={vhdl}
            />
            <CardContent>
              <Typography className={classes.skillTitle} gutterBottom variant="h5" component="h2">
                Concepts
              </Typography>

              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> OOP </Typography>
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> Data Structures </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> Algorithms </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> Machine Learning </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> Recursion </Typography>
              
              
            </CardContent>
          
          </Card>
        </Grid>
      
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.skillrate} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={softwares}
            />
            <CardContent>
              <Typography className={classes.skillTitle} gutterBottom variant="h5" component="h2">
                IDEs and Tools
              </Typography>

              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography className={classes.d1}> VSCode </Typography>
              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography className={classes.d1}> Sublime Text </Typography>
              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography className={classes.d1}> PyCharm </Typography>
              <Typography className={classes.starsUsed}> ★★★★★ </Typography>
              <Typography className={classes.d1}> IntelliJ </Typography>
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> Eclipse </Typography>
              <Typography className={classes.starsUsed}> ★★★★☆ </Typography>
              <Typography className={classes.d1}> Github/git </Typography>
              <Typography className={classes.starsUsed}> ★★★☆☆ </Typography>
              <Typography className={classes.d1}> Vivado </Typography>
              
            </CardContent>
          
          </Card>
        </Grid>
      </Grid> 

      <Typography className={classes.projIntro2}>
        CS EXPERIENCE
      </Typography>

      <Grid container spacing={2}>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.project} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={aicps}
            />
            <CardContent>
              <Typography className={classes.d1} gutterBottom variant="h5" component="h2">
                AICPS
              </Typography>
              <Typography className={classes.d1} variant="body2" color="textSecondary" component="p">
                Recently began working as an undergraduate research assistant for the aritifical intelligence
                and cyber-physical systems (AICPS) lab. Working on using machine learning and graph neural networks
                to detect the presence of hardware trojans.  
              </Typography>
            </CardContent>
         
          </Card>
        </Grid>


        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.project} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image="https://m.foolcdn.com/media/dubs/images/man_typing_in_code_on_laptop_GettyImages-698430.original.jpg"
            />
            <CardContent>
              <Typography className={classes.d1} gutterBottom variant="h5" component="h2">
                Buzzr
              </Typography>
              <Typography className={classes.d1} variant="body2" color="textSecondary" component="p">
                During RoseHacks 2020, collaborated with a team of 4 to create 
                a women-centric website allowing women in the STEM career path to find mentors that can 
                guide them on both an academic and personal path.
              </Typography>
            </CardContent>
         
          </Card>
        </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.project} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image="https://static.idtech.com/next/assets/images/idtc-logo-with-scoop.svg"
            />
            <CardContent>
              <Typography className={classes.d1} gutterBottom variant="h5" component="h2">
                OPL
              </Typography>
              <Typography className={classes.d1} variant="body2" color="textSecondary" component="p">
                As an online private instructor, tutored students ages 7-19 in Java, Python,
                Pre-Algebra, Algebra I, Algebra II, Calculus, and Statistics. Created lesson plans,
                developed sample code, worked through problems, and wrote post-session reports. 
              </Typography>
            </CardContent>
          
        </Card>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.project} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={epidatalogo}
            />
            <CardContent>
              <Typography className={classes.d1} utterBottom variant="h5" component="h2">
                EpiData
              </Typography>
              <Typography className={classes.d1} variant="body2" color="textSecondary" component="p">
                As a software and data engineering intern at EpiData,  developed a lightweight version of an IoT platform
                using the Play web framework and a Jupyter notebook interface. Provided a Python API for the platform using Py4J
                and performed unit testing for ZMQ data streaming.
              </Typography>
            </CardContent>
         
        </Card>
      </Grid>
      
    </Grid>

    <Typography className={classes.projIntro2}>
        MUSIC
    </Typography>

    <Grid container spacing={2}>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.project} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image={piano}
            />
            <CardContent>
              <Typography className={classes.d1} gutterBottom variant="h5" component="h2">
                Piano
              </Typography>
              <Typography className={classes.d1} variant="body2" color="textSecondary" component="p">
                I've been playing piano since I was 5 years old. As part of 
                my interest in piano, I've attended various competitions, concerts,
                outreach recitals, classes, and other events over the last 13+ years.
                Throughout the years, I've gained experience playing a variety of classical
                pieces and have built an extensive repertoire. 
              </Typography>
            </CardContent>
         
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.project} variant="outlined">
          
            <CardMedia
              className={classes.media}
              image="https://www.musicnotes.com/images/productimages/mtd/MN0150775.gif"
            />
            <CardContent>
              <Typography className={classes.d1} gutterBottom variant="h5" component="h2">
                Voice
              </Typography>
              <Typography className={classes.d1} variant="body2" color="textSecondary" component="p">
                Although I've been singing informally for as long as I can remember, I started
                taking voice lessons near the end of middle school, at the recommendation
                of my choir teacher at school. Throughout high school, I participated
                in various concerts, workshops, competitions, and other such
                events while learning arias and musical theatre pieces. 
              </Typography>
            </CardContent>
          
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
