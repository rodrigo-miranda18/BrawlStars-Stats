import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(65vw - 72px);
  background-color: #1E0037;
  padding: 30px 42px;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55); 
  box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55);

  @media (max-width: 1335px){
    margin-top: 50px;
  }

  @media (max-width: 460px){
    width: 220px;
  }
`

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

export const AmountMembers = styled.span`
  color: white;
  font-size: 18px;
`

export const Value = styled.span`
  color: #FABC3B;
`