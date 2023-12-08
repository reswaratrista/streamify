import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 right-0 p-4 bg-red-600 text-white rounded-md shadow-md">
      <button onClick={onClose} className="ml-2 focus:outline-none">
        x
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
