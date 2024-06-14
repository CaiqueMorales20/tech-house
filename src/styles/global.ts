import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    color: ${(props) => props.theme['red-500']};
    ${mixins.fonts.titleLG}

    font-family: "Inter", sans-serif;
  }
`
