import styled from "styled-components"
import {COLORS} from "../styles/styles"
import GlobalStyle from "../styles/globalStyle"

const GlobalVariableTest = () => {
  return (
    <>
      <GlobalStyle />
      <CreateGlobalStyle>using createGlobalStyle</CreateGlobalStyle>
      <Constant>using import constant</Constant>
      <Theme>using Theme</Theme> 
    </>
  )
}

export default GlobalVariableTest


const Constant = styled.p`
  color:${COLORS.error};
`

const Theme = styled.p`
  color:${props => props.theme.color};
`

const CreateGlobalStyle = styled.p`
  color:var(--color-paragragh);
`