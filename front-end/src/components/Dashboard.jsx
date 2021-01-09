import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Paper,
  Grid,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import QuoteForm from "./QuoteForm";
import QuoteList from "./QuoteList";

//heights needs to be dynamic, content needs to be dynamic.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "400px",
  },
  banner: {
    minHeight: "300px",
  },
  headerText: {
    color: theme.palette.blue,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* row one  */}
        <Grid item xs={12}>
          <Paper className={classes.banner}>welcome banner</Paper>
        </Grid>
      </Grid>
      {/* row two */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Quick quote"
              />
            </ListItem>
            <Divider />
            {<QuoteForm />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Pending quotes"
              />
            </ListItem>
            <Divider />
            {<QuoteList />}
          </Paper>
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
    </div>
  );
};

export default Dashboard;
