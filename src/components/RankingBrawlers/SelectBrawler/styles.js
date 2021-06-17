import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 275px;
  height: max-content;
  margin-top: 50px;
  padding: 15px 0px 15px 20px;

  background-color: #1e0037;

  -webkit-box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.55);
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
