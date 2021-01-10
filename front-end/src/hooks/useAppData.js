import { useState, useEffect } from "react";
import axios from "axios";

const useAppData = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("/customers")
      .then((resp) => {
        setData(resp.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return { data, loaded };
};

export default useAppData;
