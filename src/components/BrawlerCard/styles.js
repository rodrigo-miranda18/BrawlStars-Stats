import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  border: 1px solid;
  width: 130px;
  background-color: #44017E;
  margin: 0 0 10px 15px;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  align-itens: center;
  border-bottom: 1px solid;
`

export const NameBar = styled.div`
  display: flex;
  width: 130px;
  position: absolute;
  height: 25px;
  justify-content: center;
  align-items: center;
`

export const Name = styled.span`
  color: white;
  font-size: 13px;
`

export const Main = styled.div`
  width: 130px;
  height: 85.8px;
  background-image: url(/img/${props => props.imageId}.png);
  background-size: cover;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3px 3px 3px 4px;
  border-top: 1px solid;
`

export const Session = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NameSession = styled.span`
  font-size: 7px;
  color: white;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`

export const Icon = styled.img`
  width: ${props => props.size.width};
  height: ${props => props.size.height};
`

export const Value = styled.span`
  font-size: 8px;
  color: ${props => props.color};
  margin-left: 2px;
`