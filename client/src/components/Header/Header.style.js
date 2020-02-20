import styled, {css} from 'styled-components'

const Header = styled.header`
  background-color: #163c9b;
  padding: 1em;
  width: 100%;
  
  div {
    text-align: center;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .svgTitle {
    overflow: visible;
    width: 100%;
  }
`

export { Header }
