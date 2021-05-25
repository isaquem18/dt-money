import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #f8f2f5;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }


  body {
    background-color: var(--background-color);
  }
`;