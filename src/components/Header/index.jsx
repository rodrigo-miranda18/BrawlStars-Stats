import { useState } from "react"
import Link from "next/link"

import { MdPeopleOutline, MdReorder } from "react-icons/md"

import {
  Container,
  LeftSide,
  RightSide,
  Title,
  LinkContainer,
  Icon,
  HiddenIcon,
} from "./styles.js"

const Header = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <Container>
      <LeftSide>
        <img src="/img/crown.png" />
        <Title>Brawl Stars Stats</Title>
      </LeftSide>
      <RightSide showLinks={showLinks}>
        <LinkContainer>
          <MdPeopleOutline size={25} />
          <Link href="/">
            <a>Players</a>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Icon src="/img/cla-icon.png" />
          <Link href="/clubs">
            <a>Clubs</a>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Icon src="/img/ranking.png" />
          <Link href="/ranking/players">
            <a>Ranking</a>
          </Link>
        </LinkContainer>
      </RightSide>
      <HiddenIcon>
        <MdReorder
          onClick={() => setShowLinks(!showLinks)}
          size={33}
          color="#FABC3B"
        />
      </HiddenIcon>
    </Container>
  )
}

export default Header
