// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.tsx';
import FeatureCard from '../components/FeatureCard.tsx';
import Footer from '../components/Footer.tsx';

const Home = () => {
  const featureCardsData = [
    { title: 'Recommend Anything', path: '/recommend-anything' , description: '...'},
    { title: 'Recommend Based on Mood', path: '/recommend-mood', description: '...' },
    { title: 'Watch History', path: '/watch-history', description: '...' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Header />
      <div className="flex items-center space-x-4">
        {featureCardsData.map((data, index, desciption) => (
          <Link key={index} to={data.path}>
            <FeatureCard title={data.title} description={data.description} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
