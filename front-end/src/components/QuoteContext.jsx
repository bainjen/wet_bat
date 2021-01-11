import React, { createContext } from "react";
import useAppData from "../hooks/useAppData";
import useFormInputs from "../hooks/useFormInputs";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const {
    customers,
    airports,
    transportation,
    quotes,
    setQuotes,
    fullQuoteData,
    loaded,
  } = useAppData();

  const {
    numPeople,
    handlePeople,
    depFlight,
    handleDepFlight,
    retFlight,
    handleRetFlight,
    departureDate,
    handleDeparture,
    returnDate,
    handleReturn,
    transportOption,
    handleTransportation,
    firstName,
    handleFirstName,
    lastName,
    handleLastName,
    email,
    handleEmail,
  } = useFormInputs();

  return (
    <QuoteContext.Provider
      value={{
        dataState: {
          customers,
          airports,
          transportation,
          quotes,
          setQuotes,
          fullQuoteData,
          loaded,
        },
        inputState: {
          numPeople,
          handlePeople,
          depFlight,
          handleDepFlight,
          retFlight,
          handleRetFlight,
          departureDate,
          handleDeparture,
          returnDate,
          handleReturn,
          transportOption,
          handleTransportation,
          firstName,
          handleFirstName,
          lastName,
          handleLastName,
          email,
          handleEmail,
        },
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteContext, QuoteProvider };
