import { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyles = createGlobalStyle`

html,body {
    overflow: auto;
    height: 100%;
}

body {
    text-rendering: optimizeSpeed;
    font-family: 'Montserrat', sans-serif;
    line-height: 18px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: ${colors.MAIN_DARK};
    letter-spacing: 0.1px;
    scrollbar-gutter: stable;
    scroll-behavior: smooth;
}

#root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

*,
*:before,
*:after {
  box-sizing: border-box;
}

menu,
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}


h5 {margin:0}

a {
  text-decoration: none;
  color: inherit;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {

  display: block;
}

input,
button,
textarea,
select {
  padding: 0;
  font: inherit;
}

input {
  border: 0;

  &:focus {
    outline: 0;
  }
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}

button {
  border: 0;
  cursor: pointer;
}
`;

export default GlobalStyles;
