import { createGlobalStyle } from "styled-components"
import { primaryFont } from "./typography"
import { fontColor } from "./colors"
import { typeScale } from "./typography"
import { normalize } from "polished"

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    margin: 0;
    font-size: 14px;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    max-width: 100%;
    height: 100vh;
    font-family: ${primaryFont};
    font-weight: 300;
    line-height: 2rem;
    margin: 0;
    padding: 0;
  }
  ul, li {
    margin: 0;
    padding: 0;
  }
  li { list-style: none; }
  h1,
  h2 {
    font-weight: 500;
  }
  h1 {
    font-size: ${typeScale.header1};
    color: ${fontColor[500]};
    margin: 0;

  }
  h2 {
    margin: 0 ;
    font-size: ${typeScale.header2};
    color: ${fontColor[300]};
  }
  p {
    line-height: 1.7em;
    font-size: 1em;
    color: ${fontColor[600]};
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

`
