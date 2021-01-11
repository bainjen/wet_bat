import React, { useContext } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { QuoteContext } from "../QuoteContext";

const RetDate = () => {
  const { inputState } = useContext(QuoteContext);
  const { returnDate, departureDate, handleReturn } = inputState;

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      minDate={departureDate}
      format="MM/dd/yyyy"
      margin="normal"
      id="ret-date-picker-dialogue"
      label="RETURN DATE"
      value={returnDate}
      onChange={handleReturn}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};

export default RetDate;
