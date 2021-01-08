import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },

    btn: {
      // margin: theme.spacing(1),
      // width: "25ch",
      // padding: theme.spacing(2),
      // textAlign: "center",
      // color: theme.palette.yellow,
      // borderRadius: "30%",
    },
    // InputLabelProps: {
    //   shrink: true,
    // },
  },
}));

const QuoteForm = () => {
  const classes = useStyles();

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
        />
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
          color="primary"
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
