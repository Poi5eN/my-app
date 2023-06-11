import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [name, setName] = useState('');
  const [classes, setClasses] = useState('');
  const [section, setSection] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [packages, setPackages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      classes,
      section,
      fatherName,
      mobileNumber,
      address,
      gender,
      packages,
    };

    // Send a POST request to the backend API endpoint to save the form data
    axios.post('/api/data', formData)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
        // Optionally, you can display a success message to the user
      })
      .catch((error) => {
        console.error('Failed to save data:', error);
        // Optionally, you can display an error message to the user
      });
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Class:</label>
        <input
          type="text"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
          required
        />
        <br />
        <label>Section:</label>
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          required
        />
        <br />
        <label>Father Name:</label>
        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          required
        />
        <br />
        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label>Packages:</label>
        <select value={packages} onChange={(e) => setPackages(e.target.value)} required>
          <option value="">Select</option>
          <option value="Package 1">Package 1</option>
          <option value="Package 2">Package 2</option>
          <option value="Package 3">Package 3</option>
        </select>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default FormPage;
