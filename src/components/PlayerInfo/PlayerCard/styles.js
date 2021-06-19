import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  background-color: #1e0037;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
  align-items: center;
  width: 510px;

  @media (max-width: 620px) {
    width: 75vw;
  }

  @media (max-width: 500px) {
    width: 320px;
    padding: 15px 30px 30px;
  }

  @media (max-width: 375px) {
    width: 280px;
    padding: 15px 20px 30px;
  }

  @media (max-width: 365px) {
    width: 245px;
    padding: 15px 20px 30px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 40px 30px;
  width: 85%;

  @media (max-width: 500px) {
    padding: 15px 0 30px 10px;
  }
`

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  img {
    width: 160px;

    @media (max-width: 500px) {
      width: 130px;
    }
  }
`

export const AvatarPerfil = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #fabc3b;
  flex: none;

  @media (max-width: 620px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`

export const TrophiesAmount = styled.span`
  color: #fabc3b;

  @media (max-width: 620px) {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    font-size: 11px;
  }
`

export const NameAndTrophies = styled.div`
  margin-left: 17px;
`

export const Name = styled.span`
  font-size: 17px;
  color: white;

  @media (max-width: 620px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`

export const Trophies = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`

export const TagName = styled.div`
  font-size: 12px;
  color: white;
  margin-top: 5px;
`

export const Club = styled.a`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`

export const ClubName = styled.span`
  color: #fabc3b;
  font-size: 13px;
  margin-left: 5px;
`
