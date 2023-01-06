import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;700;800&display=swap");

  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    line-height: 1.5;

    background-color: ${({ theme }) => theme.colors.bg_dark};
    color: ${({ theme }) => theme.colors.font_dark};
  }

  img,
  video {
    display: block;
    max-width: 100%;
  }

  button,
  input {
    font: inherit;
    outline: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
