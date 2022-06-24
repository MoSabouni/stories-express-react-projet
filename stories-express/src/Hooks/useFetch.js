import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("fetching...");
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
