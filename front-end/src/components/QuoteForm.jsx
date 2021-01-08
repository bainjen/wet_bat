import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const QuoteForm = () => {
  const classes = useStyles();

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  // const [transportation, setTransportation] = useState("");

  const handleDeparture = (date) => {
    setDepartureDate(date);
  };

  const handleReturn = (date) => {
    setReturnDate(date);
  };

  const handlePeople = (event) => {
    setNumPeople(event.target.value);
  };

  let numOptions = [];
  for (let i = 1; i <= 30; i++) {
    numOptions.push(
      <MenuItem key={i} value={i} onChange={handlePeople}>
        {i}
      </MenuItem>
    );
  }

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
            id="date-picker-dialogue"
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
            id="date-picker-dialogue"
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
          >
            {numOptions}
          </TextField>
          <TextField
            select
            label="TRANSPORTATION"
            type="search"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
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
