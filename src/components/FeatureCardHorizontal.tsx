import React from 'react';

interface FeatureCardHorizontalProps {
  movieName: string;
  description: string;
}

const FeatureCardHorizontal: React.FC<FeatureCardHorizontalProps> = ({ movieName, description }) => {
  return (
    <div
      className="w-64 h-20 p-6 bg-white border border-gray-200 rounded-lg shadow mb-4
                 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {movieName}
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCardHorizontal;
