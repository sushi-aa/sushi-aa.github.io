import React from 'react';
import {Box, Grid, Button, Avatar,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//import petrlogo from "../petrlogo.png";
import { useHistory } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu'
import "./Header.css";

const useStyles = makeStyles({
  menu:
   {
	  paddingLeft: "5%",
	  paddingRight: "5%",
    paddingTop: "1.3%",
    paddingBottom: "1.3%",
    //marginRight: "1%",
    fontSize: 13,
    //border: 0,
    //borderRadius: 3,
    //marginTop: -120,
    '&:hover': {
      opacity: "0.8",
      background: "#ffffff",
      color: "purple",
    },
  },
  menuItem:
  {
    marginTop: "10%",
    paddingLeft: "2%",
    alignItems: "left",
    '&:hover': {
      opacity: "0.8",
      background: "#ffffff",
      color: "purple",
    },
  },
});

export default function Header(){
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (url) => {
    history.push('/');
    history.push(url);
  };

  return(
    <Box className={classes.navbar}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Menu width="15%" disableAutoFocus className={classes.burgerMenu}>
          <Button className={classes.menuItem} size="medium" onClick={() => handleClick("")}>Home</Button>
          <Button className={classes.menuItem}  size="medium" onClick={() => handleClick("about")}>About</Button>
          <Button className={classes.menuItem} size="medium" onClick={() => handleClick("experience")}>Experience</Button>
          <Button className={classes.menuItem}  size="medium" onClick={() => handleClick("contact")}>Contact</Button>
        </Menu>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button size="medium" onClick={() => handleClick("")} className={classes.menu}>Home</Button>
          <Button size="medium" onClick={() => handleClick("about")} className={classes.menu}>About</Button>
          <Button size="medium" onClick={() => handleClick("experience")} className={classes.menu}>Passions</Button>
          <Button size="medium" onClick={() => handleClick("contact")} className={classes.menu}>Contact</Button>
        </Grid>  
      </Grid>
    </Box>
  );
}