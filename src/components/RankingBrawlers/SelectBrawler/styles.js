import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 275px;
  justify-content: space-between;
  background-color: #1E0037;
  padding: 15px 0px 15px 20px;
  -webkit-box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55); 
  box-shadow: 2px 2px 15px 2px rgba(0,0,0,0.55);
  height: 800px;
  margin-top: 50px;
`

export const Avatar = styled.div`
  width: 50px;
  height: 35px;
  background-image: url(/img/${props => props.img}.png);
  background-size: cover;
  margin: 0 8px 20px 0;
  border: ${props => props.border} solid white;
`

export const Link = styled.a`
  cursor: pointer;
`