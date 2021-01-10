import { useState, useEffect } from "react";
import axios from "axios";

const useAppData = () => {
  const [customers, setCustomers] = useState([]);
  const [airports, setAirports] = useState([]);
  const [transportation, setTransportation] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  return { customers, airports, transportation, quotes, setQuotes, loaded };
};

export default useAppData;
