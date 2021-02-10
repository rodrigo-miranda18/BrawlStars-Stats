import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 1335px){
    flex-direction: column;
  }

  @media (max-width: 768px){
    align-items: center;
  }
`