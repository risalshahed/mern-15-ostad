import Link from "next/link.js";

const Blogcard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold capitalize mb-2">
        {post.title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
        {post.body}
      </p>
      <Link href={`/blog/${post.id}`} className='text-blue-600 font-medium hover:underline'>
        Read More &rarr;
      </Link>
    </div>
  )
}

export default Blogcard;