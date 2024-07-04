import React, { useEffect, useState } from "react";

function useFetch(apiUrl, id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!id) {
          setData(data);
        } else {
          const uniqueData = data.find((item) => item.id === id);
          setData(uniqueData);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, loading, error };
}

export default useFetch;
