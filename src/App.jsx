import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup/Signup';
import HomePage from './component/Home/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
