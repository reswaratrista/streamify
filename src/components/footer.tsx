import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className="bg-gray-800 p-4 md:p-8 fixed bottom-0 left-0 right-0 h-[100px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <span className="text-gray-500">{props.text}</span>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  text: '© 2023 Reswara Trista, All Rights Reserved.',
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;
