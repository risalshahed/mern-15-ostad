import { Link, useParams } from "react-router-dom"
import useBlogs from "../hooks/useBlogs.js";

const BlogDetails = () => {
  const { id } = useParams();

  const { blogs, loading, error } = useBlogs();

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  const blog = blogs.find(
    blog => blog.id === Number(id)
  )

  if(!blog) {
    return (
      <main>
        <h1>
          Blog Not Found
        </h1>
        <Link to='/blogs'>
          Back to Blogs
        </Link>
      </main>
    )
  }

  return (
    <main className="single-blog">
      <h1>
        {blog.title}
      </h1>

      <p>
        {blog.body}
      </p>

      <Link to='/blogs'>
        ← Back to Blogs
      </Link>
    </main>
  )
}

export default BlogDetails;