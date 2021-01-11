import React, { useContext } from "react";
import axios from "axios";

// MUI
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "& .MuiTextField-root": {
      width: "22ch",
      background: theme.palette.lightBlue,
    },
    "& .MuiAutocomplete-root": {
      width: "22ch",
    },
  },

  flexRow: {
    display: "flex",
    alignItems: "space-around",
    justifyContent: "space-around",
    width: "100%",
    margin: "3% 0",
  },
}));

const StyledButton = withStyles({
  root: {
    background: "#5BBFBA",
    color: "white",
    borderRadius: "100px",
  },
})(Button);

const QuoteForm = () => {
  const { dataState, inputState } = useContext(QuoteContext);
  const { loaded, setQuotes, setCustomers } = dataState;
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
    resetInputs,
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
      .then((resp) => {
        setCustomers(resp.data[0]);
        setQuotes(resp.data[1]);
      });
    resetInputs();
  };

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {loaded && (
        <form className={classes.root} autoComplete="off">
          <div className={classes.flexRow}>
            <DepFlight />

            <RetFlight />
          </div>

          <div className={classes.flexRow}>
            <DepDate />
            <RetDate />
          </div>

          <div className={classes.flexRow}>
            <NumPeople />
            <Transportation />
          </div>

          <div className={classes.flexRow}>
            <FirstName />
            <LastName />
          </div>

          <div className={classes.flexRow}>
            <Email />

            <StyledButton
              // className={classes.btn}
              variant="contained"
              disableElevation
              size="large"
              onClick={sendQuote}
            >
              Create a quote
            </StyledButton>
          </div>
        </form>
      )}
    </MuiPickersUtilsProvider>
  );
};

export default QuoteForm;
