import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { QuoteContext } from "../QuoteContext";

const LastName = () => {
  const { inputState } = useContext(QuoteContext);
  const { handleLastName } = inputState;

  return (
    <TextField
      required
      label="LAST NAME"
      InputLabelProps={{
        shrink: true,
      }}
      variant="standard"
      defaultValue={""}
      onChange={handleLastName}
    />
  );
};

export default LastName;
