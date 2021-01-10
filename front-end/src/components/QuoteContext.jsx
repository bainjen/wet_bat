import React, { createContext } from "react";
import useAppData from "../hooks/useAppData";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const { customers, airports, transportation, quotes, loaded } = useAppData();

  return (
    <QuoteContext.Provider
      value={{
        dataState: { customers, airports, transportation, quotes, loaded },
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteContext, QuoteProvider };
