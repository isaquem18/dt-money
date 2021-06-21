import React, { useState } from 'react';
import { v4 } from 'uuid';
import { api } from '../../services/api';
import {
  Container
} from './styles';
import { TransactionTypeContainer } from '../TransactionTypeContainer';
import { useContext } from 'react';
import { TransactionsContext } from '../../Contexts/TransactionsContext';

export function NewTransactionModal() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const transactions = useContext(TransactionsContext);

  const handleSubmitNewTransactionForm = (e: React.FormEvent) => {
    e.preventDefault();
    const FormData = {
      id: v4(),
      title,
      type,
      amount,
      category,
      createdAt: new Date()
    };

    api.post('/transactions', FormData)
      .then((response) => alert(JSON.stringify(response.data.transaction)))
  };

  const handleSetType = (item: string) => {
    setType(item);
  }

  return (
    <Container>
      <form onSubmit={handleSubmitNewTransactionForm}>
        <h2>Cadastrar transação - {JSON.stringify(transactions)}</h2>

        <input
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />

        <TransactionTypeContainer handleSetType={handleSetType} bgType={type} />

        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />



        <button
          type="submit"
        >Cadastrar</button>

      </form>
    </Container>
  )
}