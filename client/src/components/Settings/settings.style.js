import styled from 'styled-components'

const Setting = styled.section`
display:flex;
flex-direction:column;
color: #163c9b;
margin: 1em auto 5em auto;

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

  const SettingTable = styled.div `
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
`

const TableWrapper = styled.div `
display:flex;
flex-direction: row;

`

export {Setting,Select,SettingsLabel,TableWrapper}