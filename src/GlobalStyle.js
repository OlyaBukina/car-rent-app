import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`body {
  color: #121417;
  height: 100%;
  font-family: 'Manrope', sans-serif;
   
}


h1, h2, p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
