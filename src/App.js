// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Ensure the path is correct
import CardDetail from './components/CardDetail'; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fact/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
