import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { QuoteContext } from "../QuoteContext";

const FirstName = () => {
  const { inputState } = useContext(QuoteContext);
  const { handleFirstName } = inputState;

  return (
    <TextField
      required
      label="FIRST NAME"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      defaultValue={""}
      onChange={handleFirstName}
    />
  );
};

export default FirstName;
