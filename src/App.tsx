import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter></AppRouter>
      </div>
    </Provider>
  );
};

export default App;
