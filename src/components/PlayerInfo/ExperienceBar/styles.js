import styled from "styled-components"

export const Bar = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

export const ContainerStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StarImage = styled.img`
  width: 24px;
  z-index: 1;
`

export const ExperienceNumber = styled.span`
  color: white;
  font-size: 10px;
  position: absolute;
  
  z-index: 1;
`

export const ExperienceProgressBar = styled.div`
  display: flex;
  position: absolute;
  width: 105px;
  height: 18px;
  border: 1px solid black;
`

export const BlueBar = styled.div`
  background-color: #5CD6FF;
  width: 80%;
`

export const BlackBar = styled.div`
  background-color: #380424;
  width: 20%;
`