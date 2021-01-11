import React, { useContext } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { QuoteContext } from "../QuoteContext";

const DepDate = () => {
  const { inputState } = useContext(QuoteContext);
  const { departureDate, handleDeparture } = inputState;

  const today = new Date();
  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      minDate={today}
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
