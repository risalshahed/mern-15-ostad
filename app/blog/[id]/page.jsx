import { getBlog } from "@/utils/getBlog.js";

export const metadata = {
  title: "Blog - Fetch Blog API",
  description: "Blogs - Third Class of Next JS Module 27, MERN Stack Course, Batch 15, Ostad",
};

/* 
/blog/11
app/blog/[id]/page.jsx

Next JS Internally 1ta data / props provide kore
props = {
  params: {
    id: "11"
  }
}

*/

const Blog = async ({ params }) => {
  // console.log(props.params.id)

  const { id } = await params;

  const blog = await getBlog(id);

  // console.log(blog)

  return (
    <main className="max-w-300 mx-auto py-20">
      <h1 className="font-bold text-3xl mb-5">
        Single Blog - Blog API
      </h1>

      <article>
        <h1 className="font-bold text-3xl mb-2">
          {blog.title}
        </h1>
        <p>
          {blog.body}
        </p>
      </article>
    </main>
  )
}

export default Blog;