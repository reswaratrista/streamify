import React, { useState, useEffect } from 'react';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import { getWithAuth } from '../api/api.tsx';

interface WatchHistory {
  historyId: number;
  username: string;
  movieName: string;
  watchedDuration: string;
}

const WatchHistoryPage = () => {
  const [watchHistory, setWatchHistory] = useState<WatchHistory[]>([]);
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null); // Initialize with null to distinguish between not loaded and empty state

  useEffect(() => {
    // Fetch logged-in user's username when the component mounts
    const fetchLoggedInUsername = async () => {
      try {
        const response = await getWithAuth('/user/me');
        setLoggedInUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching logged-in username:', error);
        // Handle error, maybe redirect to login
      }
    };

    fetchLoggedInUsername();
  }, []);

  useEffect(() => {
    // Fetch watch history data from the API when the logged-in username is available
    if (loggedInUsername !== null) {
      const fetchWatchHistory = async () => {
        try {
          const response = await getWithAuth(`/history/user/${loggedInUsername}`);
          setWatchHistory(response.data);
        } catch (error) {
          console.error('Error fetching watch history data:', error);
          // Handle error, maybe show a message to the user
        }
      };

      fetchWatchHistory();
    }
  }, [loggedInUsername]);

  if (loggedInUsername === null) {
    // If username is not loaded yet, you can show a loading spinner or other UI
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="container mx-auto p-4 mt-24 mb-20">
        <h1 className="text-3xl font-bold mb-4">Watch History</h1>
        {/* Render the watch history data */}
        {watchHistory.map((historyItem) => (
          <div key={historyItem.historyId} className="bg-white p-4 mb-4 rounded shadow">
            <p className="text-lg font-semibold">Movie Name: {historyItem.movieName}</p>
            <p>Watched Duration: {historyItem.watchedDuration}</p>
          </div>
        ))}
        {watchHistory.length === 0 && (
          <p>No watch history available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WatchHistoryPage;
