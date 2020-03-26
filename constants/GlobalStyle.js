import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#E5F904",
  black: "#424242",
  white: "#ffffff",
  secondary: "#f29898",
  tertiary: "#e6e235"
};

// @font-face {
//     font-family: 'Montserrat';
//     // src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
//     font-weight: normal;
//     font-style: normal;
//   }

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Montserrat", sans-serif;
}

  html {
    box-sizing: border-box;
    font-size: 10px;
   
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: "Montserrat", sans-serif;
   
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {   font-family: "Montserrat", sans-serif; }
`;

export default GlobalStyle;
