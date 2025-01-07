import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './StartPage';
import Signup from './Signup';
import LoginPage from './LoginPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Make a GET request to the Django API endpoint
    axios
      .get("http://127.0.0.1:8000/api/Test/") // Your Django API URL
      .then((response) => {
        setMessage(response.data.message); // Set the response data
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <div>
        <h1>{message}</h1> {/* "Hello from Django!" */}
      </div>
    </Router>
  );
}

export default App;
