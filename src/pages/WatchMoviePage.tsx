import React, { useState, useEffect } from 'react';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import { get } from '../api/api.tsx'; // Import your API function for making GET requests
import WatchMovieModal from '../components/WatchMovieModal.tsx'; // Import the WatchMovieModal component

interface Movies {
    movieId: number;
    movieName: string;
    duration: string;
    avgWatchTime: string;
  }

const WatchMoviePage = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movies | null>(null);

  useEffect(() => {
    // Fetch movies when the component mounts
    const fetchMovies = async () => {
      try {
        const response = await get('/movie/'); // Replace with your API endpoint for fetching watchable movies
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Header />
      <h1 className="text-3xl font-bold mt-32 mb-8">Explore Movies</h1>
      <div className="space-y-4 mb">
        {movies.map((movie) => (
          <div key={movie.movieId}>
            {/* Make each movie clickable */}
            <div
              className="cursor-pointer"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="bg-white p-4 rounded shadow">
                <p className="text-lg font-semibold">Movie Name: {movie.movieName}</p>
                <p>Movie Duration: {movie.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      
      {/* Show the WatchMovieModal when a movie is clicked */}
      {selectedMovie && (
        <WatchMovieModal
          movieName={selectedMovie.movieName}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default WatchMoviePage;
