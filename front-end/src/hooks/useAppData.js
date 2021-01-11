import { useState, useEffect } from "react";
import axios from "axios";

const useAppData = () => {
  const [customers, setCustomers] = useState([]);
  const [airports, setAirports] = useState([]);
  const [transportation, setTransportation] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [fullQuoteData, setFullQuoteData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const makeFullQuoteData = () => {
    let tempQuoteData = [];
    quotes.forEach((quote) => {
      const selectedCustomer = customers.find(
        (d) => d.id === quote.customer_id
      );
      const selectedDeparture = airports.find(
        (d) => d.id === quote.departure_id
      );
      const selectedReturn = airports.find(
        (d) => d.id === quote.destination_id
      );
      const selectedTransportation = transportation.find(
        (d) => d.id === quote.ground_transportation_id
      );
      const row = {
        id: quote.id,
        price: quote.price,
        numPeople: quote.number_travellers,
        selectedCustomer,
        selectedDeparture,
        selectedReturn,
        selectedTransportation,
      };
      tempQuoteData.push(row);
    });
    setFullQuoteData(tempQuoteData);
  };

  useEffect(() => {
    Promise.all([
      axios.get("/customers"),
      axios.get("/airports"),
      axios.get("/transportation"),
      axios.get("/quotes"),
    ])
      .then((all) => {
        setCustomers(all[0].data);
        setAirports(all[1].data);
        setTransportation(all[2].data);
        setQuotes(all[3].data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    makeFullQuoteData();
  }, [quotes]);

  return {
    customers,
    airports,
    transportation,
    quotes,
    setQuotes,
    fullQuoteData,
    loaded,
  };
};

export default useAppData;
