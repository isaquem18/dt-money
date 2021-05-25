import React from 'react';

import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
