import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;

  @media (min-width: 1500px){
    justify-content: flex-start;
  }

  @media (max-width: 1300px){
    flex-direction: column;
  }
`

export const MiniCards = styled.div`
  display: flex;
  width: 660px;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 1300px){
    margin-top: 30px;
    justify-content: space-between;
  }

  @media (max-width: 760px){
    width: 620px;
  }

  @media (max-width: 690px){
    width: 370px;
    justify-content: center;
  }

  @media (max-width: 375px){
    width: 300px;
    justify-content: flex-start;
  }
`