import { getBlogs } from "@/utils/getBlogs.js";

export const metadata = {
  title: "Blogs - Fetch Blog API",
  description: "Blogs - Third Class of Next JS Module 27, MERN Stack Course, Batch 15, Ostad",
};

const Blogs = async () => {
  const blogs = await getBlogs();

  console.log(blogs);

  return (
    <main className="max-w-300 mx-auto py-20">
      <h1 className="font-bold text-3xl mb-5">
        Blogs - Blog API
      </h1>
      {/* The Blogs */}
      <div className="grid grid-cols-3 gap-5">
        {
          blogs.map(blog =>
            <article
              key={blog.id}
              className="each-article rounded-lg p-3"
            >
              <h2 className="font-semibold text-xl">
                {blog.title}
              </h2>
              <p>
                {blog.body}
              </p>

            </article>
          )
        }
      </div>
    </main>
  )
}

export default Blogs;



/* 
SSR -> Server Side Rendering
CSR -> Client Side Rendering
SSG -> Static Site Generation

*/