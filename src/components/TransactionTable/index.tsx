import { memo, useEffect, useState } from 'react';
import { Container } from "./styles";
import { useContext } from 'react';
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { format } from 'date-fns';

type Transactions = {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: Date
};

type TransactionsList = Transactions[];

function TransactionTable() {
  const transactions = useContext<TransactionsList>(TransactionsContext);

  return (
    <Container>
      {transactions.length >= 1 ? (
        <table>
          <thead>
            <tr>
              <th className="borderRadiusLeft">Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th className="borderRadiusRight">Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction?.id}>
                <td className="borderRadiusLeft">{transaction?.title}</td>
                <td className="outcome">{transaction?.amount}</td>
                <td>{transaction.category}</td>
                <td className="borderRadiusRight">{format(new Date(transaction.createdAt), 'dd/LL/yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <h1>Não há transações registradas!</h1>}
    </Container>
  )
};

export default memo(TransactionTable);
