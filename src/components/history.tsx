import styled from "styled-components"
import { performance } from "../data/historyKo"

const History = () => {

  return(
    <Container>
      <h1>연혁</h1>
      <div>
        {performance.map(item => (
          <Performances>
            <BigYear>{item.year}</BigYear>
            <Performance>
              <SmallYear>{item.year}</SmallYear>
              <OL>
                {item.performance.map(item => 
                  <li>{item}</li>
                )}
              </OL>
            </Performance>
          </Performances>
        ))}
      </div>
      
    </Container>
  )
}


export default History

const Container = styled.section`
  color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313160;
`


const Performances = styled.div`
  display: flex;
`

const Performance = styled.div`
  margin-left:60px;
  position:relative;
  padding-bottom:20px;

  :before{
    position:absolute;
    content:"";
    top:10px;
    left:-16px;
    width:2px;
    height:100%;
    background-color: #fff;
  }

`

const BigYear = styled.p`
  font-size:30px;
`

const SmallYear = styled.p`
  font-size:16px;
  position:relative;
  :before{
    position:absolute;
    z-index: 10;
    content:"";
    top:50%;
    transform:translateY(-50%);
    left:-20px;
    width:10px;
    height:10px;
    border-radius: 100%; 
    background-color  : #090162;
  }
`

const OL = styled.ol`
  padding:20px 0 74px; 
  li{
    line-height: 29px;
  }
`