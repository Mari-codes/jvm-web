import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    font-family: inherit;
  }

  body {
    font-family: "Roboto", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
