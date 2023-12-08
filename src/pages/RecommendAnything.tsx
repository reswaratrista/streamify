import React, { useEffect, useState } from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { getWithAuth } from '../api/Api.tsx';

interface Movies {
  movieId: number;
  movieName: string;
  duration: string;
  avgWatchTime: string;

};

const RecommendAnything = () => {
  const [data, setData] = useState<Movies[]>([]);
  const [amount, setAmount] = useState(0);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Fetch data from the API using getWithAuth and the specified endpoint
      const response = await getWithAuth(`/movie/recommend_by_duration?amount=${amount}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-2xl font-bold mb-4">Recommend Anything</h1>
        <form onSubmit={handleFormSubmit} className="mb-8">
          <label className="block mb-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 mb-4 border rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Get Recommendations
          </button>
        </form>

        <div className="overflow-x-auto">
          {data && data.length > 0 ? (
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Movie ID</th>
                  <th className="py-2 px-4 border">Title</th>
                  <th className="py-2 px-4 border">Duration</th>
                  <th className="py-2 px-4 border">Average Watch Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.movieId}>
                    <td className="py-2 px-4 border">{item.movieId}</td>
                    <td className="py-2 px-4 border">{item.movieName}</td>
                    <td className="py-2 px-4 border">{item.duration}</td>
                    <td className="py-2 px-4 border">{item.avgWatchTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};



export default RecommendAnything;
