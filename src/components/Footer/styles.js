import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  width: 100%;
  background-color: #1e0037;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: center;

  @media (max-width: 775px) {
    flex-direction: column;
  }

  a {
    margin-left: 20px;

    @media (max-width: 775px) {
      margin: 10px;
    }
  }
`

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-radius: 100%;
  background-color: black;
`
