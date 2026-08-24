import { useEffect, useState } from 'react'
import { useFetchBlogs } from '../hooks/useFetchBlogs.js';

const DebouncedSearch = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const { blogs } = useFetchBlogs();

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Debounced Search:", search);
      setDebouncedSearch(search)
    }, 500);      // 500 milli seconds

    // Cleanup Function
    return () => {
      clearTimeout(timer);
    }
  }, [search]);

  return (
    <div>
      <div className="search-input-title">
        <h2>
          Debounced Search
        </h2>
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search Blogs with Delay"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* The Blogs */}
      <div className="blogs">
        {
          filteredBlogs?.map(blog =>
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.category}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DebouncedSearch;