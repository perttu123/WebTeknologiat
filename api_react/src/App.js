
import React, { useState, useEffect } from 'react';

import './App.css'; 
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  const [tiedot, setTiedot] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/get_prices');
        const data = await response.json();
        setTiedot(data.prices);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);



  return (
    <div className="table-container">
      <h1>Hourly Electricity Prices</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Price</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {tiedot.map((item, index) => (
          <tr key={index}>
            <td>{item.price}c/kwH</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}
export default App;

