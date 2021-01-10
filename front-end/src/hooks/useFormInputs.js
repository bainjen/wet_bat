import { useState } from "react";

const useFormInputs = () => {
  // date logic
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // input state variables
  const [numPeople, setNumPeople] = useState(1);
  const [depFlight, setDepFlight] = useState();
  const [retFlight, setRetFlight] = useState();
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);
  const [transportOption, setTransportOption] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  // functions
  const handlePeople = (event) => {
    setNumPeople(event.target.value);
  };

  const handleDepFlight = (event, newValue) => {
    if (newValue) {
      setDepFlight(newValue.id);
    } else {
      setDepFlight(null);
    }
  };

  const handleRetFlight = (event, newValue) => {
    if (newValue) {
      setRetFlight(newValue.id);
    } else {
      setRetFlight(null);
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
  };
};

export default useFormInputs;
