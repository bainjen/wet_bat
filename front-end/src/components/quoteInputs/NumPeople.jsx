import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { QuoteContext } from "../QuoteContext";

const NumPeople = () => {
  const { inputState } = useContext(QuoteContext);
  const { handlePeople } = inputState;

  let numOptions = [];
  for (let i = 1; i <= 30; i++) {
    numOptions.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }
  return (
    <TextField
      required
      select
      label="PEOPLE"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="standard"
      defaultValue={1}
      onChange={handlePeople}
    >
      {numOptions}
    </TextField>
  );
};

export default NumPeople;
