// Nested Dynamic Route
export async function GET(request, { params }) {
  const { id } = await params;

  return Response.json({
    productId: id,
    reviews: [
      {
        id: 1,
        user: 'Arif',
        comment: 'Good Product'
      },
      {
        id: 2,
        user: 'Nahin',
        comment: 'Excellent'
      }
    ]
  })
}