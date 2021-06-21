import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { ReactNode } from 'react';
import { api } from '../services/api';

type Transactions = {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: Date
};

type TransactionsList = Transactions[];

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext<TransactionsList>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}