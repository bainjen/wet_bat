import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import PollIcon from "@material-ui/icons/Poll";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";

import { QuoteContext } from "./QuoteContext";
import Dashboard from "./Dashboard";
import SingleQuote from "./SingleQuote";

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.gray,
    position: "relative",
    zIndex: 200,
    // zIndex: theme.zIndex.drawer - 200,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  listItem: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.blue,
  },
  icon: {
    padding: "inherit",
    color: theme.palette.blue,
  },
  caption: {
    padding: theme.spacing(2),
    color: theme.palette.darkGray,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const listOneData = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Quotes", icon: <AttachMoneyIcon /> },
  { label: "Leads", icon: <ListAltRoundedIcon /> },
  { label: "Tours", icon: <SendIcon /> },
];

const listTwoData = [
  { label: "Invoices", icon: <InsertDriveFileIcon /> },
  { label: "Analytics", icon: <PollIcon /> },
  { label: "Team", icon: <GroupIcon /> },
  { label: "Admin", icon: <SettingsIcon /> },
  { label: "Support", icon: <HelpIcon /> },
];

const SideDrawer = ({ isOpen, handleDrawerClose }) => {
  const { quoteState, inputState } = useContext(QuoteContext);
  const { viewIndex, setViewIndex } = quoteState;
  const { resetInputs } = inputState;

  const classes = useStyles();
  const handleListItemClick = (event, index) => {
    setViewIndex(index);
    console.log("ive been clicked");
    resetInputs();
  };

  const listOne = listOneData.map((d, i) => {
    return (
      <ListItem
        button
        selected={viewIndex === i}
        onClick={(event) => handleListItemClick(event, i)}
        className={classes.listItem}
        key={d.label}
      >
        <ListItemIcon className={classes.icon}>{d.icon}</ListItemIcon>
        <ListItemText primary={d.label} />
      </ListItem>
    );
  });

  const listTwo = listTwoData.map((d, i) => {
    const relativeIndex = listOne.length + i;
    return (
      <ListItem
        className={classes.listItem}
        button
        selected={viewIndex === relativeIndex}
        onClick={(event) => handleListItemClick(event, relativeIndex)}
        key={d.label}
      >
        <ListItemIcon className={classes.icon}>{d.icon}</ListItemIcon>
        <ListItemText primary={d.label} />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>{listOne}</List>
        <Divider />
        <List>{listTwo}</List>
        <Divider />
        <Typography variant={"caption"} className={classes.caption}>
          All rights reserved by wetbat 2020
        </Typography>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
        {viewIndex === 0 && <Dashboard />}
        {viewIndex === 1 && <SingleQuote />}
      </main>
    </div>
  );
};

export default SideDrawer;
