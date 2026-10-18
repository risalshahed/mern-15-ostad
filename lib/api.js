// const BASE_URL = "https://jsonplaceholder.typicode.com";

// export async function getPosts() {
//   console.log("🌐 API called at:", new Date().toLocaleTimeString());

//   const res = await fetch(`${BASE_URL}/posts?_limit=9`, {
//     // 1ta kore option uncomment kore test korbo

//     // 1️⃣ Static: build er somoy 1 bar fetch, cache e thake
//     // cache: "force-cache",

//     // 2️⃣ Dynamic: protiti request e fresh data
//     // cache: "no-store",

//     // 3️⃣ Time-based: cache thake, 60 sec pore auto refresh
//     next: {
//       revalidate: 60,
//       tags: ["posts"]
//     }
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   return res.json();
// }

/* 

Option --	Mane --	Kokhon use korbo --	Analogy

* force-cache --	Ekbar fetch, cache e rakho
Data kom change hoy (About, Docs) e.g. Printed boi 📖

* no-store -- Protibar notun fetch
Real-time data (dashboard, stock)	Live TV 📺

* revalidate: 60 --	Cache, kintu 60s pore refresh
Blog, news (amader case) e.g.	Dainik pottrika 📰

* tags + revalidateTag -- Manually cache clear
Post create/update korar por e.g.	"Refresh now" button 🔄

*/