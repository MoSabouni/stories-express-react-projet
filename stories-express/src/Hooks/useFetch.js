import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("fetching is under going");
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
}

export default useFetch;
