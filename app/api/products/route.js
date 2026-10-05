/* 
In a single route.js file, YOU CAN NEVER HAVE,
  * MULTIPLE GET REQUESTS,
  * MULTIPLE POST REQUESTS,
  * MULTIPLE PUT REQUESTS,
  * MULTIPLE PATCH REQUESTS,
  * MULTIPLE DELETE REQUESTS,
*/

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get('category');
  const limit = searchParams.get('limit');

  const products = [
    {
      id: 1,
      name: 'iPhone 16',
      category: 'phone',
      price: 1000
    },
    {
      id: 2,
      name: 'MacBook Pro',
      category: 'laptop',
      price: 2000
    },
    {
      id: 3,
      name: 'Samsung Galaxu',
      category: 'phone',
      price: 800
    }
  ]

  let filteredProducts = products;

  if(category) {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    )
  }

  if(limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit))
  }

  // Response object ta pawa jaay Web API theke, r eita Next JS er Server a Available thake
  return Response.json({
    category,
    limit,
    products: filteredProducts
  })
}

export async function POST(request) {
  const data = await request.json();

  return Response.json({
    message: 'Product created successfully',
    product: data
  })
}