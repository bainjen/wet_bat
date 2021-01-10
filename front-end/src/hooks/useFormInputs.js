import { useState } from "react";

const useFormInputs = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [depFlight, setDepFlight] = useState();

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

  return { numPeople, handlePeople, depFlight, handleDepFlight };
};

export default useFormInputs;
