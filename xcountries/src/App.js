

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://xcountries-backend.azurewebsites.net/all")
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error("Error fetching country data:", error);
        setError('Failed to load countries. Please try again')
      });
  }, []);

  return (
    <div className="app">
      <h1>Countries</h1>
      <div className="grid">
        {countries.map((country, index) => (
          <div key={index} className="card">
            <img src={country.flag} alt={country.name} />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;