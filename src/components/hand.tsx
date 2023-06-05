import styled, { keyframes } from "styled-components"

const Hand = () => {

  return(
    <Wrapper>
      <HandImg src={process.env.PUBLIC_URL + '/img/fef.png'} alt="" />
    </Wrapper>
  )
}

export default Hand

const Wrapper = styled.section`
  background:#d6def3;
  height:640px;
`

const moving = keyframes`
  0%{
    transform:translateX(-90%);
  }
  100%{
    transform:translateX(11%);
  }
`

const HandImg = styled.img`
  width:610px;
  height:580px;
  animation:${moving} 0.5s linear 1;
`



