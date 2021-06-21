import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);

      &:first-child {
        color: var(--text-title);
    
      }

      &.borderRadiusLeft {
        border-radius: 0.8rem 0 0 0.8rem;
      }

      &.borderRadiusRight {
        border-radius: 0 0.8rem 0.8rem 0;
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }


    }
  }
`;