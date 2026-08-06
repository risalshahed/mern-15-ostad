/* 
We will use the Array Methods,
* which returns New Array


We WON'T USE THE Array Methods,
* which mutates / changes the original array
*/

import EachProfile from "./EachProfile";

const Profile = () => {
  const martyrs = [
    {
      // id: Date.now(),
      id: crypto.randomUUID(),
      name: 'Abu Sayed',
      profession: 'Student',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_-DWo6VD8d5iTUtrZqwdEDQ3mROy9xuwZf7HxZIb1wba7mpyzmI0hQs5dnZngiZ0Vak8DjQ30vE1SxBzwrCA8GYoUmKmB1HGgnWQFKQ&s=10'
    },
    {
      // id: Date.now(),
      id: crypto.randomUUID(),
      name: 'Mir Mugdho',
      profession: 'Freelancer',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pIX7p_DWJOj5_EIHvlKDoO_aUXnsloMW-T7PQB1S9IJS7pVmTg4j1vM&s=10'
    },
    {
      // id: Date.now(),
      id: crypto.randomUUID(),
      name: 'Osman Hadi',
      profession: 'Teacher',
      avatar: 'https://thebangladeshtoday.com/wp-content/uploads/2025/12/Untitled.png'
    }
  ];

  return (
    <div className="martyr">
      {
        // martyrs.map((martyr, index, originalArray) =>
        martyrs.map((martyr) =>
          // Sending the props -> martyr={martyr}
          <EachProfile key={martyr.id} martyr={martyr} />
        )
      }
    </div>
  )
}

export default Profile;