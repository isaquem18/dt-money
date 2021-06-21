import React from 'react';

import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { TransactionsProvider } from './Contexts/TransactionsContext';

function App() {

  return (
    <TransactionsProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </TransactionsProvider>
  );
}

export default App;
