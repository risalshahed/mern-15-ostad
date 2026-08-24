import { useEffect, useState } from "react"
// import { blogData } from "../data/blogs.js";

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Server API Call
  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/blogs");
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs()
  }, [])

  // Local Data Call (Uncomment Line 2 to implement)
  /* useEffect(() => {
    setBlogs(blogData);
  }, []) */

  return { blogs }
}