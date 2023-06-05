import { useState } from "react"
import styled, { keyframes } from "styled-components"

const ServiceCard = () => {
  const [test,setTest] = useState(false)
  const handleMouseEnter = () => {
    setTest(true)
  }

  const handleMouseLeave = () => {
    setTest(false)
  }

  return(
    <Container onMouseEnter={handleMouseEnter} onMouseLeave= {handleMouseLeave} >
      <Text>
        <Title>한 손에 <br />잡히는 <br />재정거래 </Title>
        <SubTitle>가격의 등락에 의한 손실을 방어하고 <br />
                  종목 분석 및 매매 타이밍의 분석의 <br />
                  필요성이 저하되는 장점을 지니고 <br />
                  있는 서비스 입니다.
        </SubTitle>
      </Text>
      <Rectangle src={process.env.PUBLIC_URL + '/img/rectangle.png'} alt="" isHover = {test}/>
  </Container>
  )
}


export default ServiceCard


const Text = styled.div`
  margin-top:110px;
  margin-left:103px;
  `

const Title = styled.p`
  color:#fff;  
  font-size:37px;
  font-weight: 700;
`

const SubTitle = styled.p`
  font-size:17px;
  color:rgba(255,255,255,0.8);
`


const Container = styled.div`
  display:flex;
  margin-top:200px;
  box-sizing: border-box;
  width:1200px;
  height:581px;
  border:1px solid gray;
  border-radius: 47px;
  /* background: url(/img/rectangle.png) no-repeat right bottom/60%; */
  /* border-image:linear-gradient(to right, #fff 0%, #0F192D 100%);
  border-image-slice: 1; */

  filter:grayscale(100%);

  :hover{
    filter: grayscale(0%);
  }
  
  /* img {
    -webkit-filter: grayscale(100%);

    -webkit-transition: .5s ease-in-out;

    -moz-filter: grayscale(100%); 

    -moz-transition: .5s ease-in-out;

    -o-filter: grayscale(100%); 

    -o-transition: .5s ease-in-out;

    :hover{
      -webkit-filter: grayscale(0%);

      -webkit-transition: .5s ease-in-out;

      -moz-filter: grayscale(0%);

      -moz-transition: .5s ease-in-out;

      -o-filter: grayscale(0%);

      -o-transition: .5s ease-in-out;
    }
  } */
`

const ContainerMoving = keyframes`
  0%{
    transform:scale(1);
  }

  100%{
    transform:scale(1.2); 
  }
`

type Props = {
  isHover : boolean
}

const Rectangle = styled.img<Props>`
  width:770px;
  height:480px;
  /* transition: filter ease 0.5s; */
  z-index:-1;
  transform:${props=> props.isHover ? "translateY(0%)" : "translateY(4%)"};
  transition:transform ease 0.3s;
  /* animation:${ContainerMoving} ease 0.5s;  */
`