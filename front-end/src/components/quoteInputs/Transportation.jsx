import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { QuoteContext } from "../QuoteContext";

const Transportation = () => {
  const { inputState, dataState } = useContext(QuoteContext);
  const { transportation } = dataState;
  const { handleTransportation } = inputState;

  const transportOptions = transportation.map((d, i) => {
    return (
      <MenuItem key={i} value={d.id}>
        {d.category}
      </MenuItem>
    );
  });

  return (
    <TextField
      select
      label="TRANSPORTATION"
      type="search"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      defaultValue={""}
      onChange={handleTransportation}
    >
      {transportOptions}
    </TextField>
  );
};

export default Transportation;
