import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
    font-family: 'Luckiest Guy', cursive;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #44017E;
  }
`

export default GlobalStyle