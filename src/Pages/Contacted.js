import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Grid, Avatar, Box } from '@material-ui/core';
import Header from "../Components/Header";
import {SiGithub, SiLinkedin, SiFacebook} from "react-icons/si";

const useStyles = makeStyles({

    thanks:
    {
        color: "gold",
        marginTop: "15%",
        fontFamily: "Playfair Display",
        fontSize: 30,
        textAlign: "center"
    },
    theRest:
    {
        color: "white",
        marginTop: "3%",
        fontFamily: "Playfair Display",
        fontSize: 20,
        textAlign: "center"
    },
    theRest2:
    {
        color: "white",
        marginTop: "1%",
        fontFamily: "Playfair Display",
        fontSize: 20,
        textAlign: "center"
    },
    social:
    {
      marginLeft: "45%",
    },
    icons:
    {
      color: "gold",
      '&:hover':
      {
        opacity: "0.9",
        transitionDuration: "0.3s",
        color: "white",
      },
      marginRight: "2%",
    }
});

export default function Contacted() {
    const classes = useStyles();
    
    return(
        <>
            <Header/>

            <Typography class={classes.thanks}>
                COMING SOON, THIS HAS NOT BEEN IMPLEMENTED COMPLETELY YET (WORK IN PROGRESS).
            </Typography>

            <Typography class={classes.theRest}>
                For now, please contact me at my email address, or through any of my social links (below).
            </Typography>

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

            <Typography class={classes.theRest2}>
                Feel free to check out the rest of my website!
            </Typography>
        
        </>
    
    );
}