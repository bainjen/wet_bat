import React, { useContext } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { QuoteContext } from "../QuoteContext";

const DepDate = () => {
  const { inputState } = useContext(QuoteContext);
  const { departureDate, handleDeparture } = inputState;

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="dep-date-picker-dialogue"
      label="Departure Date"
      value={departureDate}
      onChange={handleDeparture}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};

export default DepDate;
