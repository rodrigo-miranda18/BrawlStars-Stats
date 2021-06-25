import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  width: calc(100vw-120px);
  height: 90px;
  background-color: #1e0037;
  border-bottom: 1px solid black;
  padding: 0 70px 0 50px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 810px) {
    padding: 0 30px 0 30px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 810px) {
    > img {
      width: 40px;
      height: 40px;
    }
  }
`

export const RightSide = styled.div`
  display: flex;
  color: white;
  flex-direction: row;

  @media (max-width: 630px) {
    display: ${props => (props.showLinks ? "flex" : "none")};
    position: absolute;
    top: 90px;
    align-items: center;
    flex-direction: column;
    width: 100%;
    left: 0;
    background-color: #1e0037;
    height: 120px;
    justify-content: space-around;
    padding: 10px 0;
    z-index: 5;
  }
`

export const Title = styled.span`
  color: #fabc3b;
  font-size: 25px;

  @media (max-width: 810px) {
    font-size: 20px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;

  a {
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    @media (max-width: 810px) {
      font-size: 14px;
    }
  }

  @media (max-width: 810px) {
    padding: 10px;
  }
`

export const Icon = styled.img`
  width: 25px;

  @media (max-width: 810px) {
    width: 18px;
  }
`

export const HiddenIcon = styled.div`
  display: none;

  @media (max-width: 630px) {
    display: flex;
    cursor: pointer;
  }
`
