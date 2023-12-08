import React, { useState } from 'react';
import { postWithAuthJson } from '../api/api.tsx';

const RegisterModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      console.log('Registering user...');
      const requestData = {
        "username" : username,
        "name" : name,
        "email" : email,
        "password" : password,
      };

  
      console.log('Request Data:', requestData);

  
      // Replace '/user/register' with the actual API endpoint for user registration
      const response = await postWithAuthJson('/user/register', requestData);
  
      console.log('Registration successful:', response.data);
  
      // Close the modal after handling registration
      onClose();
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration error, show a message to the user, etc.
    }
  };
  

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Register</h2>
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

          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-md"
          />

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleRegister}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
