import { useState } from "react";

const useFormInputs = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [numPeople, setNumPeople] = useState(1);
  const [depFlight, setDepFlight] = useState();
  const [retFlight, setRetFlight] = useState();

  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);

  const [transportOption, setTransportOption] = useState();

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
    // console.log(event.target.value);
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
  };
};

export default useFormInputs;
