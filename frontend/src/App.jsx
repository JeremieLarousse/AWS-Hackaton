import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mission from './pages/Mission';
import Destination from './pages/Destination';
import Garage from './pages/Garage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/garage" element={<Garage />} />
      </Routes>
    </div>
  );
};

export default App;