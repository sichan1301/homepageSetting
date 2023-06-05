import styled, { keyframes } from "styled-components"
import ServiceCard from "./serviceCard"

const Only = () => {
  return(
    <Wrapper>
      <Title>Test</Title>

      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </Wrapper>

  )
}

export default Only


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #060C17;
  height:3000px;
`
const Title = styled.p`
  color:#fff;  
  font-size:37px;
  font-weight: 700;
  margin:50px 0;
`