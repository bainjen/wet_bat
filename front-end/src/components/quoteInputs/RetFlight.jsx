import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { QuoteContext } from "../QuoteContext";

const RetFlight = () => {
  const { inputState } = useContext(QuoteContext);

  const { options, selectedRetFlight, handleRetFlight } = inputState;

  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
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
          variant="filled"
        />
      )}
    />
  );
};

export default RetFlight;
