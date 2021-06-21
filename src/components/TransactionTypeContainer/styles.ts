import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;


`;

interface ButtonProps {
  isActive: boolean;
  selected: string;
}

export const Button = styled.button<ButtonProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-radius: 0.254rem;
    border: 1px solid #D7D7D7;
    gap: 0.5rem;
    background-color: ${(props) => props.isActive ? props.selected === 'income' ? '#00ff0040' : '#ff000040' : 'transparent'};
    span {
      font-size: 1rem;
      color: var(--text-title);
    }

    &:hover {
      border: 1px solid #AAA;
    }

`;