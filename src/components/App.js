import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Signin from './auth/Signin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='Signin' element={<Signin />} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App

