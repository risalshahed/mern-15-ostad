import BlogCard from "../components/BlogCard.jsx";
import useBlogs from "../hooks/useBlogs.js";

const Blogs = () => {
  const { blogs, loading, error } = useBlogs();

  // console.log(blogs)

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <main>
      <h1>
        All Blogs
      </h1>
      <div className="blog-grid">
        {
          blogs.map(blog =>
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          )
        }
      </div>
    </main>
  )
}

export default Blogs;