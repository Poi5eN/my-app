import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your signup logic here
    // You can use axios to send a POST request to the backend API endpoint for signup
    axios.post('/api/signup', { email, password })
      .then((response) => {
        console.log('Signup successful:', response.data);
        // Upon successful signup, you can redirect the user to the form page
        // You can use a routing library like react-router-dom to handle the redirection
        // Example: history.push('/form');
      })
      .catch((error) => {
        console.error('Signup failed:', error);
        // Optionally, you can display an error message to the user
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
