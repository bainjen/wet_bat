import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { QuoteContext } from "../QuoteContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "22ch",
  },
}));

const DepFlight = () => {
  const { inputState } = useContext(QuoteContext);

  const { options, selectedDepFlight, handleDepFlight } = inputState;

  const [inputValue, setInputValue] = React.useState("");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        fullWidth={true}
        value={selectedDepFlight}
        onChange={handleDepFlight}
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
            label="FROM"
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

export default DepFlight;
