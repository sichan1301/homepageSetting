import styled from "styled-components"
import { performance } from "../data/historyKo"

const History = () => {

  return(
    <>
      <h1>연혁</h1>
      {performance.map(item => {
        <Wrapper>
          <BigYear>{item.year}</BigYear>
          <div>
            <SmallYear>{item.year}</SmallYear>
            <ul>
              {item.performance.map(item => 
                <li>{item}</li>
              )}
            </ul>
          </div>
        </Wrapper>
      })}
    </>
  )
}


export default History

const Container = styled.section`
  color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313160;
  height:1000px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const BigYear = styled.p`
  font-size:30px;
`

const SmallYear = styled.p`
  font-size:16px;
`
