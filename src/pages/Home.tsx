import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import FeatureCard from '../components/FeatureCard.tsx';
import Footer from '../components/Footer.tsx';
import Notification from '../components/Notification.tsx';

interface Movies {
  movieId: number;
  movieName: string;
  duration: string;
  avgWatchTime: string;
}

const Home = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [movies, setMovies] = useState<Movies[]>([]);
  const navigate = useNavigate();

  const featureCardsData = [
    { title: 'Watch movies, Now!', path: '/watch-movie', description: 'Watch any movie available on our site!'},
    { title: 'Recommend Anything', path: '/recommend-anything', description: 'Don\'t know what to watch? Look at what people like to watch!' },
    { title: 'Recommend Based on Mood', path: '/recommend-mood', description: 'Feeling gloomy or happy? We got you covered!' },
    { title: 'Watch History', path: '/watch-history', description: 'Summary of the movies you\'ve watched' },
  ];


  const handleFeatureCardClick = (path) => {
    const isLoggedIn = !!localStorage.getItem('accessToken');

    if (!isLoggedIn) {
      setNotificationVisible(true);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-y-auto">
      <Header />
      <h1 className="text-3xl font-bold mb-8">Explore Our Features</h1>
      <div className="flex items-center space-x-4">
        {featureCardsData.map((data, index) => (
          <div key={index} onClick={() => handleFeatureCardClick(data.path)}>
            <FeatureCard title={data.title} description={data.description} />
          </div>
        ))}
      </div>

      <Footer />
      {isNotificationVisible && (
        <Notification
          message="Please log in to access this feature."
          onClose={() => setNotificationVisible(false)}
        />
      )}
    </div>
  );
};

export default Home;
