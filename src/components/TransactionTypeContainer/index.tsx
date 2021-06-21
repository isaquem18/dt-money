import {
  Container,
  Button,
} from './styles';
import IncomeImage from '../../assets/income.svg';
import OutcomeImage from '../../assets/outcome.svg';
import { useState } from 'react';

interface TransactionTypeContainerProps {
  handleSetType: Function;
  bgType: string;
}


export function TransactionTypeContainer({ handleSetType, bgType }: TransactionTypeContainerProps) {
  return (
    <Container>
      <Button type="button" onClick={() => handleSetType('income')} isActive={bgType === 'income'} selected="income">
        <img src={IncomeImage} alt="income" />
        <span>Entrada</span>
      </Button>
      <Button type="button" onClick={() => handleSetType('outcome')} isActive={bgType === 'outcome'} selected="outcome">
        <img src={OutcomeImage} alt="outcome" />
        <span>Saída</span>
      </Button>
    </Container>
  )
}