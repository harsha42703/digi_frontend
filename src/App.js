import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Mainpage from './Mainpage';
import Academics from './Pages/Academics';
import Examinations from './Pages/Examinations';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
