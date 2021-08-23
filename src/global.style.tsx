import { createGlobalStyle } from "styled-components";

/* Global CSS in styled components. Font-family is in the index.html */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #16181b fixed;
    color: #b1bdb4;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1px;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;
