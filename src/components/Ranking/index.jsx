import Link from "next/link"
import Image from "next/image"

import {
  Container,
  RankingBar,
  Id,
  LeftSide,
  PlayerInfo,
  Avatar,
  Info,
  Name,
  Club,
  RightSide,
  Icon,
  Trophies,
} from "./styles.js"

const Ranking = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <RankingBar key={index}>
          <LeftSide>
            <Id>{index + 1}</Id>
            <PlayerInfo>
              {item.icon ? (
                <Avatar>
                  <Image
                    objectFit="contain"
                    width={35}
                    height={35}
                    src={`/img/${item.icon.id}.png`}
                    alt={item.name}
                  />
                </Avatar>
              ) : (
                <></>
              )}
              <Info>
                <Link
                  href={
                    item.club
                      ? `/players/${item.tag.replace("#", "")}`
                      : `/clubs/${item.tag.replace("#", "")}`
                  }
                >
                  <Name>{item.name}</Name>
                </Link>
                <Club>
                  {item.club ? item.club.name : item.memberCount + "/100"}
                </Club>
              </Info>
            </PlayerInfo>
          </LeftSide>
          <RightSide>
            <Icon src="/img/ranking.png" />
            <Trophies>{item.trophies}</Trophies>
          </RightSide>
        </RankingBar>
      ))}
    </Container>
  )
}

export default Ranking
