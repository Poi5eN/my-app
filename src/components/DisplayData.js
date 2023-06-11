import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Send a GET request to the backend API endpoint to retrieve the data
    axios.get('/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Failed to retrieve data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Data Page</h2>
      {data.map((item) => (
        <div key={item._id}>
          <h3>Name: {item.name}</h3>
          <p>Class: {item.class}</p>
          <p>Section: {item.section}</p>
          <p>Father Name: {item.fatherName}</p>
          <p>Mobile Number: {item.mobileNumber}</p>
          <p>Address: {item.address}</p>
          <p>Gender: {item.gender}</p>
          <p>Package: {item.packages}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
