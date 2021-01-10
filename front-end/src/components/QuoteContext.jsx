import React, { createContext } from "react";
import useAppData from "../hooks/useAppData";
import useFormInputs from "../hooks/useFormInputs";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const { customers, airports, transportation, quotes, loaded } = useAppData();

  const {
    numPeople,
    handlePeople,
    depFlight,
    handleDepFlight,
    retFlight,
    handleRetFlight,
  } = useFormInputs();

  return (
    <QuoteContext.Provider
      value={{
        dataState: { customers, airports, transportation, quotes, loaded },
        inputState: {
          numPeople,
          handlePeople,
          depFlight,
          handleDepFlight,
          retFlight,
          handleRetFlight,
        },
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteContext, QuoteProvider };
