import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  padding: 30px 40px 30px;
  background-color: #1E0037;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55); 
  box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55);
  align-items: center;
  width: 430px;

  @media (max-width: 620px){
    width: 75vw;
  }

  @media (max-width: 500px){
    width: 320px;
    padding: 15px 30px 30px;
  }

  @media (max-width: 375px){
    width: 280px;
    padding: 15px 20px 30px;
  }

  @media (max-width: 365px){
    width: 245px;
    padding: 15px 20px 30px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

export const RightSide = styled.div`
  display: flex;
`

export const AvatarPerfil = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid #FABC3B;
  background-image: url(/img/${props => props.image}.png);
  background-size: contain;

  @media (max-width: 620px){
    width: 50px;
    height: 50px;
  }

  @media (max-width: 500px){
    width: 40px;
    height: 40px;
  }
`

export const TrophieImage = styled.img`
  width: 20px;
  height: 15px;  
`

export const TrophiesAmount = styled.span`
  color: #FABC3B;

  @media (max-width: 620px){
    font-size: 13px;
  }

  @media (max-width: 500px){
    font-size: 11px;
  }
`

export const NameAndTrophies = styled.div`
  margin-left: 17px;
`

export const Name = styled.span`
  font-size: 17px;
  color: white;

  @media (max-width: 620px){
    font-size: 14px;
  }

  @media (max-width: 500px){
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

export const Club = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const ClubIcon = styled.img`
  width: 20px;
`

export const ClubName = styled.span`
  color: #FABC3B;
  font-size: 13px;
  margin-left: 5px;
`

export const MainBrawlerImage = styled.div`
  margin-left: 50px;
  width: 160px;
  height: 190px;
  background-image: url(/img/${props => props.image}-brawler.png);
  background-size: cover;

  @media (max-width: 620px){
    width: 120px;
  }

  @media (max-width: 500px){
    width: 110px;
    height: 160px;
    margin-left: 35px;
  }

  @media (max-width: 325px){
    width: 90px;
    height: 140px;
    margin-left: 20px;
  }
`