import { useContext } from 'react';

import { Container } from "./styles";
import IncomesLogo from '../../assets/income.svg';
import OutcomesLogo from '../../assets/outcome.svg';
import TotalLogo from '../../assets/total.svg';
import { TransactionsContext } from '../../Contexts/TransactionsContext';


export function Summary() {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomesLogo} alt="incomes" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomesLogo} alt="outcomes" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div id="totalSummaryItem">
        <header>
          <p>Total</p>
          <img src={TotalLogo} alt="total" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  )
}