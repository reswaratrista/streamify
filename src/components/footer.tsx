import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer bg-gray-800 p-4 md:p-8 flex flex-col items-center justify-between">
        <div className="footer-container flex flex-col md:flex-row items-center max-w-screen-xl mx-auto">
          <span className="footer-logo text-white text-2xl font-bold mb-2 md:mb-0">{props.Logo}</span>
          <nav className="footer-nav flex ml-0 md:ml-4">
            <span className="footer-nav1 text-gray-500">{props.Nav1}</span>
            <span className="footer-nav4 text-gray-500 ml-2">{props.Nav4}</span>
            <span className="footer-nav5 text-gray-500 ml-2">{props.Nav5}</span>
          </nav>
        </div>
        <div className="footer-separator w-full border-t border-gray-800 mt-2 md:mt-4 mb-4 md:mb-6"></div>
        <div className="footer-container1 flex flex-col md:flex-row items-center justify-between">
          <span className="footer-text text-gray-500 mb-2 md:mb-0">{props.text}</span>
          <div className="footer-icon-group flex items-center">
            <svg viewBox="0 0 950.8571428571428 1024" className="footer-icon fill-current w-6 h-6 mr-2">
              {/* ... */}
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon2 fill-current w-6 h-6 mr-2">
              {/* ... */}
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="footer-icon4 fill-current w-6 h-6">
              {/* ... */}
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  Logo: 'STREAMIFY',
  text: '© 2023 Reswara Trista, All Rights Reserved.',
  Nav1: 'Home',
  Nav4: 'Recommendations',
  Nav5: 'History',
};

Footer.propTypes = {
  Logo: PropTypes.string,
  text: PropTypes.string,
  Nav1: PropTypes.string,
  Nav4: PropTypes.string,
  Nav5: PropTypes.string,
};

export default Footer;
