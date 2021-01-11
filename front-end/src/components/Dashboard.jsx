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
    minHeight: "300px",
  },
  banner: {
    minHeight: "300px",
  },
  r2: {
    height: "550px",
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
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper} className={classes.r2}>
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
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper} className={classes.r2}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Pending quotes"
              />
            </ListItem>
            <Divider />
            <QuoteList height={502} nRow={7} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper} className={classes.r2}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="New leads list"
              />
            </ListItem>
            <Divider />
          </Paper>
        </Grid>
      </Grid>
      {/* row three  */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Popular destinations feature"
              />
            </ListItem>
            <Divider />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Team chat"
              />
            </ListItem>
            <Divider />
          </Paper>
        </Grid>
      </Grid>
      {/* row 4 */}
      <Grid container spacing={3}>
        <Grid item xs={6} sm={5}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Revenue chart"
              />
            </ListItem>
            <Divider />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Potential revenue chart"
              />
            </ListItem>
            <Divider />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <ListItem>
              <ListItemText
                className={classes.headerText}
                primary="Close Ratios"
              />
            </ListItem>
            <Divider />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
