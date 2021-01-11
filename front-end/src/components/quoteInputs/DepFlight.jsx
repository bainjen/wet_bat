import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { QuoteContext } from "../QuoteContext";

const DepFlight = () => {
  const { inputState } = useContext(QuoteContext);

  const { options, selectedDepFlight, handleDepFlight } = inputState;

  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
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
          variant="filled"
        />
      )}
    />
  );
};

export default DepFlight;
