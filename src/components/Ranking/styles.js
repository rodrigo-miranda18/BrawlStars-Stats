import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const RankingBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;
  background-color: #1e0037;
  width: calc(65vw - 60px);
  height: 50px;
  margin-bottom: 30px;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);

  @media (max-width: 768px) {
    width: 76vw;
  }

  @media (max-width: 375px) {
    width: 73vw;
  }
`

export const LeftSide = styled.div`
  display: flex;
`

export const Id = styled.span`
  display: flex;
  align-items: center;
  color: #630b75;
  font-size: 22px;
  margin-right: 20px;
`

export const PlayerInfo = styled.div`
  display: flex;
`

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(/img/${props => props.img}.png);
  background-size: contain;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  justify-content: center;
`

export const Name = styled.span`
  color: #fabc3b;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Club = styled.span`
  color: white;
  font-size: 11px;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 20px;
  height: 15.33px;
  margin-top: 2px;
`

export const Trophies = styled.span`
  color: #fabc3b;
  margin-left: 5px;
  font-size: 14px;
`
