import React, { useState, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { QuoteContext } from "./QuoteContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const QuoteForm = () => {
  const { dataState } = useContext(QuoteContext);
  const { transportation, airports, loaded } = dataState;
  console.log("transportation", transportation);

  const classes = useStyles();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);
  const [numPeople, setNumPeople] = useState(1);
  const [transportOption, setTransportOption] = useState("");

  const sendQuote = (e) => {
    e.preventDefault();
    axios.post("/quotes", { numPeople });
  };

  const handleDeparture = (date) => {
    setDepartureDate(date);
  };

  const handleReturn = (date) => {
    setReturnDate(date);
  };

  const handlePeople = (event) => {
    setNumPeople(event.target.value);
  };
  const handleTransportation = (event) => {
    setTransportOption(event.target.value);
  };

  let numOptions = [];
  for (let i = 1; i <= 30; i++) {
    numOptions.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }
  console.log("numPeople", numPeople);

  const transportOptions = transportation.map((d, i) => {
    return (
      <MenuItem key={i} value={d.category}>
        {d.category}
      </MenuItem>
    );
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            label="FROM"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            required
            label="DESTINATION"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="dep-date-picker-dialogue"
            label="Departure Date"
            value={departureDate}
            onChange={handleDeparture}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="ret-date-picker-dialogue"
            label="Departure Date"
            value={returnDate}
            onChange={handleReturn}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <TextField
            required
            select
            label="PEOPLE"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            defaultValue={1}
            onChange={handlePeople}
          >
            {numOptions}
          </TextField>
          {loaded && (
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
          )}
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
            // color="primary"
            disableElevation
            size="large"
            onClick={sendQuote}
          >
            Create a quote
          </Button>
        </div>
      </form>
    </MuiPickersUtilsProvider>
  );
};

export default QuoteForm;

// const data = {
//   from: "",
//   destination: "",
//   departDate: "",
//   returnDate: "",
//   people: [],
//   transportation: {
//     type: "",
//     cost: "",
//   },
// };
