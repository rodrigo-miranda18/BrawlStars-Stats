import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px){
    flex-direction: column;
  }
`