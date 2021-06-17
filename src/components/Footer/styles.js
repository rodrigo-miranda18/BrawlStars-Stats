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

export const Logo = styled.div`
  > img {
    width: 150px;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: center;

  @media (max-width: 775px) {
    flex-direction: column;
  }
`

export const PlayStoreIcon = styled.img`
  width: 130px;
  margin: 0 15px;
`
export const AppStoreIcon = styled.img`
  width: 100px;
  height: 37px;
  margin: 0 15px;
`

export const IconBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: black;
  margin: 0 10px;

  @media (max-width: 775px) {
    margin: 10px;
  }
`
