import React, { useState, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { QuoteContext } from "./QuoteContext";
import NumPeople from "./quoteInputs/NumPeople";
import DepFlight from "./quoteInputs/DepFlight";
import RetFlight from "./quoteInputs/RetFlight";
import DepDate from "./quoteInputs/DepDate";
import RetDate from "./quoteInputs/RetDate";

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
  const { transportation, loaded } = dataState;
  const {
    numPeople,
    depFlight,
    retFlight,
    departureDate,
    returnDate,
  } = inputState;

  const classes = useStyles();

  const [transportOption, setTransportOption] = useState("");

  const sendQuote = (e) => {
    e.preventDefault();
    axios.post("/quotes", {
      numPeople,
      depFlight,
      retFlight,
      departureDate,
      returnDate,
    });
  };

  const handleTransportation = (event) => {
    setTransportOption(event.target.value);
  };

  const transportOptions = transportation.map((d, i) => {
    return (
      <MenuItem key={i} value={d.category}>
        {d.category}
      </MenuItem>
    );
  });

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

            <TextField
              select
              label="TRANSPORTATION"
              type="search"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={handleTransportation}
            >
              {transportOptions}
            </TextField>

            <TextField
              required
              label="NAME"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
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
