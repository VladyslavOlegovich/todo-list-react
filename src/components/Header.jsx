import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#5F9EA0",
  },
  title: {
    color: "white",
    fontSize: "36px",
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "inherit",
  },
}));
const Header = () => {
  const { header, title } = useStyles();
  return (
    <header>
      <AppBar className={header} position="static">
        <Toolbar>
          <Typography className={title}>TODO LIST</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
