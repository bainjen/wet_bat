import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { QuoteContext } from "../QuoteContext";

const DepFlight = () => {
  const { dataState, inputState } = useContext(QuoteContext);
  const { airports } = dataState;
  const { depFlight, handleDepFlight } = inputState;

  return (
    <Autocomplete
      value={depFlight}
      onChange={handleDepFlight}
      options={airports}
      getOptionLabel={(option) =>
        `${option.municipality} (${option.iata_code})`
      }
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
