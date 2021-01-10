import React, { createContext } from "react";
import useAppData from "../hooks/useAppData";
import useFormInputs from "../hooks/useFormInputs";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const { customers, airports, transportation, quotes, loaded } = useAppData();

  const { numPeople, handlePeople } = useFormInputs();

  return (
    <QuoteContext.Provider
      value={{
        dataState: { customers, airports, transportation, quotes, loaded },
        inputState: { numPeople, handlePeople },
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteContext, QuoteProvider };
