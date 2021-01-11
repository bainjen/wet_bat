import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { QuoteContext } from "../QuoteContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "22ch",
  },
}));

const RetFlight = () => {
  const { inputState } = useContext(QuoteContext);

  const { options, selectedRetFlight, handleRetFlight } = inputState;

  const [inputValue, setInputValue] = React.useState("");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        fullWidth={true}
        value={selectedRetFlight}
        onChange={handleRetFlight}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="DESTINATION"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
        )}
      />
    </div>
  );
};

export default RetFlight;
