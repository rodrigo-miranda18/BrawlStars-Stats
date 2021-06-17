import { useRouter } from "next/router"

import {
  Container,
  LeftSide,
  RightSide,
  Id,
  Avatar,
  Info,
  Name,
  Role,
  Icon,
  Trophies,
} from "./styles.js"

const ClubMemberBar = ({ data, id }) => {
  const router = useRouter()

  const handleClick = () => {
    const tagPlayer = data.tag.replace("#", "")
    const href = `/players/${tagPlayer}`

    router.push(href)
  }

  return (
    <Container>
      <LeftSide>
        <Id>{id}</Id>
        <Avatar image={`/img/${data.icon.id}.png`}></Avatar>
        <Info onClick={handleClick}>
          <Name>{data.name}</Name>
          <Role>{data.role}</Role>
        </Info>
      </LeftSide>
      <RightSide>
        <Icon src="/img/ranking.png"></Icon>
        <Trophies>{data.trophies}</Trophies>
      </RightSide>
    </Container>
  )
}

export default ClubMemberBar
