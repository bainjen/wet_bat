import React, { useContext } from "react";
import axios from "axios";

// MUI
import { makeStyles } from "@material-ui/core/styles";
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
      margin: theme.spacing(1),
      width: "25ch",
    },
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

  const classes = useStyles();

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

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {loaded && (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <DepFlight />
            <RetFlight />
            <DepDate />
            <RetDate />
            <NumPeople />
            <Transportation />
            <FirstName />
            <LastName />
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
          </div>
        </form>
      )}
    </MuiPickersUtilsProvider>
  );
};

export default QuoteForm;
