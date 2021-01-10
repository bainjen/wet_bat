import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { QuoteContext } from "../QuoteContext";

const Email = () => {
  const { inputState } = useContext(QuoteContext);
  const { handleEmail } = inputState;

  return (
    <TextField
      required
      label="EMAIL"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      defaultValue={""}
      onChange={handleEmail}
    />
  );
};

export default Email;
