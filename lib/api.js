const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getFeaturedPosts = async () => {
  console.log('API Called at:', new Date().toLocaleTimeString())

  const res = await fetch(`${BASE_URL}/posts?_limit=9`, {
    
    // Static: build er somoy 1 bar fetch kore, cache a rekhe dey
    // cache: 'force-cache',

    // Dynamic: prottek ta request a, fresh data dibe
    // cache: 'no-store',

    next: {
      revalidate: 60, // 60 seconds
      tags: ['posts']
    }
  });

  if(!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json();
}



// Initial Basic Fetch API
/*
export const getFeaturedPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts?_limit=9`);

  if(!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json();
}
*/

/* 

* force-cache -- about page -- kokhn korbo? data ekbar e ashe backend theke

* no-store -- prottek ta request / build a, new fresh data fetch hosse




*/