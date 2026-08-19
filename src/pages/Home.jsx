import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard.jsx";
import useBlogs from "../hooks/useBlogs.js";

const Home = () => {
  const { blogs, loading, error } = useBlogs();

  const topBlogs = blogs.slice(0, 12);

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <main>
      <h1>
        Top Blogs
      </h1>

      <div className="blog-grid">
        {
          topBlogs.map(blog =>
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          )
        }
      </div>

      <div className="see-all">
        <Link to='/blogs'>
          Seel All Blogs
        </Link>
      </div>
    </main>
  )
}

export default Home;