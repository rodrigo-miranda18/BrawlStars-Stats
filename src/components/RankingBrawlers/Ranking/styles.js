import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 768px){
    margin-left: 0;
  }
`