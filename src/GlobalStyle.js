import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
    --main-text-color: #121417;
    --secondary-text-color: #12141780;
    
    --white-color: #FFFFFF;
    --accent-color: #3470FF;
    --hover-color: #0B44CD;
    --active-link--color: #F3B249;

    --main-font: 'Manrope', sans-serif;

    --backdrop-color: #12141780;
    --active-link-bg-color: #E3F3FF;
}

body {
  color: #121417;
  height: 100%;
  font-family: var(--main-font);
    
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
