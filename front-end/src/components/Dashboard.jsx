import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//heights needs to be dynamic, content needs to be dynamic.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "200px",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* row one  */}
        <Grid item xs={11}>
          <Paper className={classes.paper}>welcome banner</Paper>
        </Grid>
        {/* row two */}
        <Grid item xs={11} sm={4}>
          <Paper className={classes.paper}>quote form</Paper>
        </Grid>
        <Grid item xs={11} sm={4}>
          <Paper className={classes.paper}>quote list</Paper>
        </Grid>
        <Grid item xs={11} sm={3}>
          <Paper className={classes.paper}>new leads list</Paper>
        </Grid>
        {/* row three  */}
        <Grid item xs={11} sm={8}>
          <Paper className={classes.paper}>popular destinations feature</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>team chat</Paper>
        </Grid>
        {/* row 4 */}
        <Grid item xs={5} sm={4}>
          <Paper className={classes.paper}>revenue chart</Paper>
        </Grid>
        <Grid item xs={5} sm={4}>
          <Paper className={classes.paper}>potential revenue chart</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>close ratios</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
