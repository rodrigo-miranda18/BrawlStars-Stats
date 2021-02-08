import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 700px;
  background-color: #1E0037;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55); 
  box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55);

  @media (max-width:770px){
    flex-direction: column;
    padding-top: 20px;
    width: 88vw;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

export const Image = styled.img`
  width: 350px;
  height: 236px;

  @media (max-width:420px){
    width: 250px;
    height: 169px;
  }
`

export const Title = styled.span`
  color: #FABC3B;
  font-size: 20px;
  margin-bottom: 33px;
`

export const Field = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  border: 1px solid black;
  height: 30px;
  padding-left: 5px;
  font-size: 17px;

  @media (max-width:420px){
    font-size: 14px;
    height: 25px;
  }
`

export const Button = styled.button`
  background-color: #FABC3B;
  border: 1px solid black;
  cursor: pointer;

  @media (max-width:420px){
    height: 30px;
  }
`

export const ImageButton = styled.img`
  width: 27px;
`