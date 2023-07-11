import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './components/pages/MainScreen';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => {

  return (
  <Routes>
      <Route path="/" element={ <MainScreen/> }/>
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );

}

export default App;