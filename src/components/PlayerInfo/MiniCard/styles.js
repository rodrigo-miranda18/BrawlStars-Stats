import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  width: 300px;
  height: 115px;
  background-color: #1E0037;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55); 
  box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px){
    margin-bottom: 20px;
  }

  @media (max-width: 365px){
    width: 260px;
  }
`

export const Value = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 38px;
`

export const Amount = styled.span`
  color: ${props => props.color};
  font-size: 27px;
  margin-left: 5px;
`

export const Text = styled.span`
  color: white;
  margin-top: 5px;
  font-size: 17px;
`