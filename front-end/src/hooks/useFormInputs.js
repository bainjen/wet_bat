import { useState } from "react";

const useFormInputs = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [depFlight, setDepFlight] = useState();
  const [retFlight, setRetFlight] = useState();

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

  return {
    numPeople,
    handlePeople,
    depFlight,
    handleDepFlight,
    retFlight,
    handleRetFlight,
  };
};

export default useFormInputs;
