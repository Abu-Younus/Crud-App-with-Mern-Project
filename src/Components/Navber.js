import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#245454",
  },
  navlink: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "sans-serif",
    marginRight: "1%",
    textDecoration: "none",
  },
});

const Navber = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <NavLink className={classes.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={classes.navlink} to="/add">
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navber;
