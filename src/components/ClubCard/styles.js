import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  width: 200px;
  height: max-content;
  padding: 30px;
  background-color: #1e0037;
  flex-direction: column;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
`

export const Info = styled.div`
  display: flex;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 5px;
`

export const Tag = styled.span`
  font-size: 12px;
  color: white;
`

export const Title = styled.span`
  font-size: 20px;
  color: white;
`

export const Trophies = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`

export const Value = styled.span`
  color: #fabc3b;
  font-size: 13px;
  margin-left: 3px;
`

export const RequiredTrophies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

export const Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
`

export const Description = styled.span`
  color: white;
  font-size: 10px;
  width: 205px;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
`

export const AmountTrophies = styled.span`
  color: #fabc3b;
  font-size: 18px;
  margin-left: 5px;
`

export const Name = styled.span`
  color: white;
  margin-top: 5px;
  font-size: 13px;
`

export const NameType = styled.span`
  color: #0df86b;
  font-size: 18px;
`
