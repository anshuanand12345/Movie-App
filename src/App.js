import React from 'react';
import { Route, Routes } from "react-router-dom";
import Search from './Search';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Search />}></Route>
       
      </Routes>
     
    </div>
  );
};

export default App;
