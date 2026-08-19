import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <article className="blog-card">
      <h2>
        {blog.title}
      </h2>
      <p>
        {blog.body}
      </p>

      <Link to={`/blogs/${blog.id}`}>
        Read More
      </Link>
    </article>
  )
}

export default BlogCard;