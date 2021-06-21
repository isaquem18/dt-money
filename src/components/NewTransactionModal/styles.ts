import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 40px;
  padding: 40px 20px 20px 20px;
  width: 100%;
  max-width: 600px;

  h2 {
    color: var(--color-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    font-size: 0.875rem;
    padding: 0rem 0.5rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    background-color: #E7E9EE;
    border: 1px solid #D7D7D7;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: #00000070;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    background-color: var(--green);
    color: #FFF;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: 0.3s all linear 0s;

    &:hover {
      filter: brightness(0.9);
    }

  }
`;