import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import QuoteForm from "./QuoteForm";

//heights needs to be dynamic, content needs to be dynamic.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "400px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}> */}

      <Grid container spacing={3}>
        {/* row one  */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>welcome banner</Paper>
        </Grid>
      </Grid>
      {/* row two */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>{<QuoteForm />}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>quote list</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>new leads list</Paper>
        </Grid>
      </Grid>
      {/* row three  */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>popular destinations feature</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>team chat</Paper>
        </Grid>
      </Grid>
      {/* row 4 */}
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>revenue chart</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>potential revenue chart</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>close ratios</Paper>
        </Grid>
      </Grid>
      {/* </Container> */}
      {/* </Grid> */}
    </div>
  );
};

export default Dashboard;
