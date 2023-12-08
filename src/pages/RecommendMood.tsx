import React, { useEffect, useState } from 'react';
import { getWithAuth } from '../api/api.tsx';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';

interface Movie {
  movie_id: number;
  title: string;
  // Add other properties based on your API response
}

const RecommendMood = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [mood, setMood] = useState('');
  const [maxAmount, setMaxAmount] = useState(20);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await getWithAuth(`/movie/recommendation_by_mood?mood=${mood}&max_amount=${maxAmount}`);
      setData(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-3xl font-bold mt-24 mb-4">Recommend by Mood</h1>
        <form onSubmit={handleFormSubmit} className="mb-8">
          <label className="block mb-2">Mood:</label>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full p-2 mb-4 border rounded-md"
          />

          <label className="block mb-2">Max Amount:</label>
          <input
            type="number"
            value={maxAmount}
            onChange={(e) => setMaxAmount(Number(e.target.value))}
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
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Movie ID</th>
                <th className="py-2 px-4 border">Title</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.movie_id}>
                  <td className="py-2 px-4 border">{item.movie_id}</td>
                  <td className="py-2 px-4 border">{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecommendMood;
