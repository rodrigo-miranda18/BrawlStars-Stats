import Link from "next/link"
import Image from "next/image"

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
  const playerTag = data.tag.replace("#", "")

  return (
    <Container>
      <LeftSide>
        <Id>{id}</Id>
        <Avatar>
          <Image
            objectFit="contain"
            width={40}
            height={40}
            src={`/img/${data.icon.id}.png`}
            alt={data.name}
          />
        </Avatar>
        <Link href={`/players/${playerTag}`}>
          <Info>
            <Name>{data.name}</Name>
            <Role>{data.role}</Role>
          </Info>
        </Link>
      </LeftSide>
      <RightSide>
        <Icon src="/img/ranking.png"></Icon>
        <Trophies>{data.trophies}</Trophies>
      </RightSide>
    </Container>
  )
}

export default ClubMemberBar
