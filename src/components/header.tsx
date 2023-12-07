import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal.tsx';
import PropTypes from 'prop-types';

const Header = (props) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  useEffect(() => {
    // Update isLoggedIn when the local storage changes
    setIsLoggedIn(!!localStorage.getItem('accessToken'));
  }, [localStorage.getItem('accessToken')]);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('accessToken');
    // Update the state to reflect the user being logged out
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-gray-800 p-4 md:p-8 fixed top-0 left-0 right-0 h-[100px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Make the logo clickable and navigate to the home page */}
        <Link to="/">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">{props.Logo}</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            // If logged in, show a logout button
            <button className="text-white" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            // If not logged in, show a login button
            <button className="text-white" onClick={openLoginModal}>
              Login
            </button>
          )}
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
};

Header.defaultProps = {
  Logo: 'STREAMIFY',
};

Header.propTypes = {
  Logo: PropTypes.string,
};

export default Header;
