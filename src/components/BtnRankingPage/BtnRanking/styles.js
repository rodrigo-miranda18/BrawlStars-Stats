import styled from "styled-components"

export const Button = styled.button`
  height: 28px;
  width: 85px;
  padding: auto;
  background-color: ${props =>
    props.isPressed ? "rgb(30,0,55,80%)" : "rgb(30,0,55)"};
  border: 1px solid;
  cursor: pointer;
`

export const LinkText = styled.a`
  text-decoration: none;
  color: #fabc3b;
`
