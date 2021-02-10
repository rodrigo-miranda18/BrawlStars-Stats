import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #44017E;
  width: calc(60vw - 50px);
  height: 52px;
  margin-bottom: 25px;
  padding: 0 25px;
  align-items: center;

  @media (max-width: 600px){
    padding: 0 17px;
  }

  @media (max-width: 460px){
    width: 230px;
  }
`

export const LeftSide = styled.div`
  display: flex;
`

export const RightSide = styled.div`
  display: flex;  
`

export const Id = styled.span`
  display: flex;
  align-items: center;
  color: #1A012F;
  font-size: 22px;
  width: 15px;

  @media (max-width: 480px){
    font-size: 20px;
  }
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${props => props.image});
  background-size: contain;
  margin-left: 25px;

  @media (max-width: 600px){
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 480px){
    margin-left: 3px;
  }
`

export const Name = styled.span`
  color: #FABC3B;
  font-size: 16px;

  @media (max-width: 600px){
    font-size: 13px;
  }

  @media (max-width: 480px){
    font-size: 11px;
  }
`

export const Role = styled.span`
  font-size: 12px;
  color: white;

  @media (max-width: 600px){
    font-size: 10px;
  }

  @media (max-width: 480px){
    font-size: 8px;
  }
`

export const Icon = styled.img`
  width: 23px;
  height: 17.63px;
  
  @media (max-width: 600px){
    width: 16px;
    height: 12.256px;
  }
`

export const Trophies = styled.span`
  color: #FABC3B;
  font-size: 14px;
  margin-left: 5px;

  @media (max-width: 600px){
    font-size: 11px;
  }
`