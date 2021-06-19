import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 700px;
  background-color: #1e0037;

  -webkit-box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);

  @media (max-width: 770px) {
    flex-direction: column;
    padding-top: 20px;
    width: 88vw;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 236px;

  @media (max-width: 425px) {
    height: 200px;
  }

  div {
    flex: none;
  }

  img {
    width: 115px;
    height: auto;

    @media (max-width: 425px) {
      width: 85px;
    }
  }
`

export const Title = styled.span`
  color: #fabc3b;
  font-size: 20px;
`

export const Field = styled.div`
  display: flex;
  align-items: center;

  margin-top: 30px;
`

export const Input = styled.input`
  border: 1px solid black;
  height: 30px;
  padding-left: 5px;
  font-size: 17px;

  @media (max-width: 420px) {
    font-size: 14px;
    height: 25px;
  }
`

export const Button = styled.button`
  background-color: #fabc3b;
  border: 1px solid black;
  cursor: pointer;

  @media (max-width: 420px) {
    height: 30px;
  }
`

export const ImageButton = styled.img`
  width: 27px;
`
