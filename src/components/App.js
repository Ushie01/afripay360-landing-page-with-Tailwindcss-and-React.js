import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Signin from './auth/Signin';
import Text from './Text';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='Signin' element={<Signin />} />
        <Route path='Text' element={<Text />} />     
      </Routes>
    </BrowserRouter>
  )
}

export default App

