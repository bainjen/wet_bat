import React, { useContext } from "react";
import axios from "axios";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// COMPONENTS
import { QuoteContext } from "./QuoteContext";
import NumPeople from "./quoteInputs/NumPeople";
import DepFlight from "./quoteInputs/DepFlight";
import RetFlight from "./quoteInputs/RetFlight";
import DepDate from "./quoteInputs/DepDate";
import RetDate from "./quoteInputs/RetDate";
import Transportation from "./quoteInputs/Transportation";
import FirstName from "./quoteInputs/FirstName";
import LastName from "./quoteInputs/LastName";
import Email from "./quoteInputs/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "22ch",
    },
  },

  flexRow: {
    alignItems: "space-evenly",
    justifyContent: "space-evenly",

    // display: "flex",
    // margin: theme.spacing(1),
  },
}));

const QuoteForm = () => {
  const { dataState, inputState } = useContext(QuoteContext);
  const { loaded, setQuotes } = dataState;
  const {
    numPeople,
    depFlight,
    retFlight,
    departureDate,
    returnDate,
    transportOption,
    firstName,
    lastName,
    email,
  } = inputState;

  const sendQuote = (e) => {
    e.preventDefault();
    axios
      .post("/quotes", {
        numPeople,
        depFlight,
        retFlight,
        departureDate,
        returnDate,
        transportOption,
        firstName,
        lastName,
        email,
      })
      .then((resp) => setQuotes(resp.data));
  };

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {loaded && (
        <form className={classes.root} autoComplete="off">
          {/* <Grid container spacing={2} className={classes.flexForm}> */}
          <Grid container spacing={2} className={classes.flexRow}>
            <Grid item>
              <DepFlight />
            </Grid>
            <Grid item>
              <RetFlight />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.flexRow}>
            <DepDate />
            <RetDate />
          </Grid>

          <Grid container spacing={2} className={classes.flexRow}>
            <NumPeople />
            <Transportation />
          </Grid>

          <Grid container spacing={2} className={classes.flexRow}>
            <FirstName />
            <LastName />
          </Grid>

          <Grid container spacing={2} className={classes.flexRow}>
            <Email />

            <Button
              className={classes.btn}
              variant="contained"
              disableElevation
              size="large"
              onClick={sendQuote}
            >
              Create a quote
            </Button>
          </Grid>
        </form>
      )}
    </MuiPickersUtilsProvider>
  );
};

export default QuoteForm;
