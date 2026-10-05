export const getBlogs = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return res.json();
}