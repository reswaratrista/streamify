import React, { useState } from 'react';
import { getWithAuth, postWithAuthJson } from '../api/Api.tsx';

interface WatchMovieModalProps {
  movieName: string;
  onClose: () => void;
}

const WatchMovieModal: React.FC<WatchMovieModalProps> = ({ movieName, onClose }) => {
  const [watchTime, setWatchTime] = useState<string>('');
  const [isWatchFormVisible, setWatchFormVisible] = useState<boolean>(false);

  const handleWatchNowClick = () => {
    setWatchFormVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWatchTime(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Fetch the user's username
      const userResponse = await getWithAuth('/user/me');
      const username = userResponse.data.username;

      console.log('Username:', username);
      console.log('Movie Name:', movieName);
      console.log('Watch Time:', watchTime);

      // Make a POST request to the '/history/watchMovie' endpoint
      const response = await postWithAuthJson('/history/watchMovie', {
        username,
        movieName,
        watchedDuration: watchTime,
      });

      console.log('Response:', response);

      // Handle the response as needed

      // Close the modal after handling the watch time
      onClose();
    } catch (error) {
      console.error('Error during watchMovie:', error);
      // Handle watchMovie error, show a message to the user, etc.
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          x
        </button>
        <h2 className="text-xl font-bold mb-4">{movieName}</h2>
        {isWatchFormVisible ? (
          <>
            <label htmlFor="watchTime" className="block text-sm font-medium text-gray-700">
              How long did you watch the movie? (e.g., 00:30:00)
            </label>
            <input
              type="text"
              id="watchTime"
              value={watchTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-4 border rounded-md"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleWatchNowClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Watch Now
          </button>
        )}
      </div>
    </div>
  );
};

export default WatchMovieModal;
