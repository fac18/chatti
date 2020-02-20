import styled,{css} from 'styled-components'


const Setting = styled.section`
display:flex;
flex-direction:column;
color: #163c9b;
margin: 1em auto 4em auto;
max-width:1000px;
`

const Notification = styled.section`
margin-top: 3em;

`
const Select = styled.select `
  background-color: #00000;
  box-shadow: inset 0px 4px 0px rgba(22, 60, 155, 0.71);
  border: 1px solid #163c9b;
  width: 270px;
  border-radius: 12px;
  min-height: 40px;
  font-family: Lato;
  font-weight: normal;
  font-size: 19px;
  color: #0e2869;
  text-align: center;
  cursor: pointer;
  margin: 1rem auto;
`

const SettingsLabel = styled.label `
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  `

// const TableWrapper = styled.section `
// display:flex;
// flex-direction: row; 
// wrap: nowrap;
// justify-content: space-evenly;
// `
const Row = styled.td `
padding-right: 50px
${props =>
    props.Row2 &&
    css`
      padding-left:50px

      
    `}
`
const SettingsHeader = styled.h2`
  color: #163c9b;
  padding-top: 1em;
  width: 100%;
  text-align:center;
  font-size: 25px;
  `
  
  const SettingText = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  `

export {Setting,Select,SettingsLabel,Row,SettingsHeader,Notification,SettingText}