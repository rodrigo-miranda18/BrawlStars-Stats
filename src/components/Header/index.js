import {Container,LeftSide,Title,LinkContainer,Link,Icon,HiddenIcon} from "./styles.js"
import {MdPeopleOutline,MdReorder } from "react-icons/md"
import { useState } from "react"
import styled from "styled-components"

const Header = () => {
  const [showLinks,setShowLinks] = useState(false)

  const RightSide = styled.div`
    display: flex;
    color: white;
    flex-direction: row;

    @media (max-width:630px){
      display: ${showLinks ? "flex" : "none"};
      position: absolute;
      top: 17vh;
      align-items: center;
      flex-direction: column;
      width: 100%;
      left: 0;
      background-color: #1E0037;
      height: 120px;
      justify-content: space-around;
      padding: 10px 0;
    }
  `

  return(
    <Container>
      <LeftSide>
        <img src="/img/crown.png"/>
        <Title>Brawl Stars Stats</Title>
      </LeftSide>
      <RightSide>
        <LinkContainer>
          <MdPeopleOutline size={25}/>
          <Link href="/">Players</Link>
        </LinkContainer>
        <LinkContainer>
          <Icon src="/img/cla-icon.png"/>
          <Link href="/clubs">Clubs</Link>
        </LinkContainer>
        <LinkContainer>
          <Icon src="/img/ranking.png"/>
          <Link href="/ranking">Ranking</Link>
        </LinkContainer>
      </RightSide>
      <HiddenIcon>
          <MdReorder onClick={() => setShowLinks(!showLinks)} size={33} color="#FABC3B"/>
      </HiddenIcon>
    </Container>
  )
}

export default Header