import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { QuoteContext } from "../QuoteContext";

const RetFlight = () => {
  const { dataState, inputState } = useContext(QuoteContext);
  const { airports } = dataState;
  const { retFlight, handleRetFlight } = inputState;

  return (
    <Autocomplete
      value={retFlight}
      onChange={handleRetFlight}
      options={airports}
      getOptionLabel={(option) =>
        `${option.municipality} (${option.iata_code})`
      }
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
