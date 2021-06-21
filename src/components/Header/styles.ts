import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
 

`;

export const InnerContainer = styled.div`
  max-width: 1228px;
  margin: 0 auto;
  padding: 1.4rem 1rem 12rem;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;