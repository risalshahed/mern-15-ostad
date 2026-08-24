import { useState } from "react";
import { useFetchBlogs } from "../hooks/useFetchBlogs.js";

const BlogSearch = () => {
  const [search, setSearch] = useState('');

  const { blogs } = useFetchBlogs();

  // console.log(blogs);

  // includes
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );
  
  console.log('Conventional Search', search);

  return (
    <div>
      <div className="search-input-title">
        <h2>
          BlogSearch
        </h2>
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search Blogs..."
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

export default BlogSearch;