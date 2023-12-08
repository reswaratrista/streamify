import React, { useState } from 'react';
import { post } from '../api/api.tsx';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('grant_type', 'password');
      formData.append('username', username);
      formData.append('password', password);
      formData.append('scope', '');
      formData.append('client_id', 'your_client_id');
      formData.append('client_secret', 'your_client_secret');

      // Replace '/user/login' with the actual API endpoint for login
      const response = await post('/user/login', formData);

      // Handle the response, e.g., store the access token in local storage
      const accessToken = response.data.access_token;
      localStorage.setItem('accessToken', accessToken);

      // Close the modal after handling login
      onClose();
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error, show a message to the user, etc.
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-md"
          />

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-md"
          />

          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
