import { useState } from "react";

const useFormInputs = () => {
  const [numPeople, setNumPeople] = useState(1);

  const handlePeople = (event) => {
    setNumPeople(event.target.value);
  };

  return { numPeople, handlePeople };
};

export default useFormInputs;
