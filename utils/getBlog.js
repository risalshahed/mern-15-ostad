export const getBlog = async blogId => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  return res.json();
}