import React from 'react';
import './App.scss';
import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <div className="App">
      Journal APP
      <AppRouter></AppRouter>
    </div>
  );
};

export default App;
