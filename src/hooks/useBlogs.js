import { useEffect, useState } from "react";
// Our Custom Hook
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
    // Loading State
  const [loading, setLoading] = useState(true);
  // Error State
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url);

      // console.log(res);
      if(!res.ok) {
        throw new Error('Failed to fetch blogs')
      }

      const data = await res.json();

      setBlogs(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    loading,
    error
  }
}

export default useBlogs;