import React, { useEffect, useState } from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

// Define the type of your data
type ItemType = {
  id: number;
  title: string;
  description: string;
  // Add other properties as needed
};

const WatchHistory = () => {
  const [data, setData] = useState<ItemType[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://api.example.com/watch-history')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header />
      <h1>Watch History</h1>
      {/* Render the data fetched from the API */}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default WatchHistory;
