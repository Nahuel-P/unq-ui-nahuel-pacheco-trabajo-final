import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/pages/WelcomeScreen';
import RulesScreen from './components/pages/RulesScreen';
import SettingsScreen from './components/pages/SettingsScreen';
import GameScreen from './components/pages/GameScreen';
import ResultsScreen from './components/pages/ResultsScreen';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => {

  return (
  <Routes>
      <Route path="/" element={ <WelcomeScreen/> }/>
      <Route path="/rules" element={ <RulesScreen/> }/>
      <Route path="/settings" element={ <SettingsScreen/> }/>
      <Route path="/game" element={ <GameScreen/> }/>
      <Route path="/results" element={ <ResultsScreen/> }/>
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );

}

export default App;