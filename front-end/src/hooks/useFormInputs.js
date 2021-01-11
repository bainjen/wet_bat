import { useState } from "react";

const useFormInputs = (airports) => {
  // date logic
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const options = airports.map((d) => `${d.municipality} (${d.iata_code})`);

  // input state variables
  const [selectedDepFlight, setSelectedDepFlight] = useState(options[0]);
  const [selectedRetFlight, setSelectedRetFlight] = useState(options[1]);
  const [numPeople, setNumPeople] = useState(1);
  const [depFlight, setDepFlight] = useState();
  const [retFlight, setRetFlight] = useState();
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);
  const [transportOption, setTransportOption] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const resetInputs = () => {
    console.log("this was called");
    setSelectedDepFlight(options[0]);
    setSelectedRetFlight(options[1]);
    setNumPeople(1);
    setDepFlight(null);
    setRetFlight(null);
    setDepartureDate(today);
    setReturnDate(tomorrow);
    setFirstName(null);
    setLastName(null);
    setEmail(null);
  };

  // functions
  const handlePeople = (event) => {
    setNumPeople(event.target.value);
  };

  const handleDepFlight = (event, newValue) => {
    setSelectedDepFlight(newValue);
    if (newValue) {
      const foundFlight = airports.find((d) => {
        return `${d.municipality} (${d.iata_code})` === newValue;
      });
      setDepFlight(foundFlight.id);
    }
  };

  const handleRetFlight = (event, newValue) => {
    setSelectedRetFlight(newValue);
    if (newValue) {
      const foundFlight = airports.find((d) => {
        return `${d.municipality} (${d.iata_code})` === newValue;
      });
      setRetFlight(foundFlight.id);
    }
  };

  const handleDeparture = (date) => {
    setDepartureDate(date);
  };

  const handleReturn = (date) => {
    setReturnDate(date);
  };

  const handleTransportation = (event) => {
    setTransportOption(event.target.value);
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return {
    numPeople,
    handlePeople,
    options,
    selectedDepFlight,
    depFlight,
    handleDepFlight,
    selectedRetFlight,
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
    resetInputs,
  };
};

export default useFormInputs;
