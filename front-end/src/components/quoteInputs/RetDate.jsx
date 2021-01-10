import React, { useContext } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { QuoteContext } from "../QuoteContext";

const RetDate = () => {
  const { inputState } = useContext(QuoteContext);
  const { returnDate, handleReturn } = inputState;

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="ret-date-picker-dialogue"
      label="Departure Date"
      value={returnDate}
      onChange={handleReturn}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};

export default RetDate;
