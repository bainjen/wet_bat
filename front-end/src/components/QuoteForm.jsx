import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },

    btn: {
      margin: theme.spacing(1),
      width: "25ch",
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.green,
      borderRadius: "30%",
    },
    // InputLabelProps: {
    //   shrink: true,
    // },
  },
}));

const QuoteForm = () => {
  const classes = useStyles();

  // const [departureDate, setDepartureDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  // const [transportation, setTransportation] = useState("");

  const handlePeople = (event) => {
    setNumPeople(event.target.value);
  };

  let numOptions = [];
  for (let i = 1; i <= 30; i++) {
    numOptions.push(
      <MenuItem value={i} onChange={handlePeople}>
        {i}
      </MenuItem>
    );
  }
  // return (
  //   <form className={classes.root} noValidate autoComplete="off">
  //     <div>
  //       <TextField
  //         id="standard-select-currency"
  //         select
  //         label="Select"
  //         value={currency}
  //         onChange={handleChange}
  //         helperText="Please select your currency"
  //       >

  return (
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
        <TextField
          required
          select
          label="DEPARTURE DATE"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          required
          select
          label="RETURN DATE"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
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
