import React, { createContext, useState } from "react";
import useAppData from "../hooks/useAppData";
import useFormInputs from "../hooks/useFormInputs";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [viewIndex, setViewIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState();

  const handleQuoteClick = (e) => {
    setQuoteIndex(e.row.id);
    setViewIndex(1);
  };

  const {
    customers,
    setCustomers,
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
          setCustomers,
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
        quoteState: {
          viewIndex,
          setViewIndex,
          quoteIndex,
          setQuoteIndex,
          handleQuoteClick,
        },
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteContext, QuoteProvider };
