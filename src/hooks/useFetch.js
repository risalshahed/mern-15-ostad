import { useEffect, useState } from "react"

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if(!res.ok) {
        throw new Error('Failed to Fetch Data');
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);      
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [url]);

  return {
    data,
    loading,
    error
  }
}