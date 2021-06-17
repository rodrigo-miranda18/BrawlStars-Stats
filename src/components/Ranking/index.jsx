import { useRouter } from "next/router"

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
  const router = useRouter()

  const handleClick = (tag, isClub) => {
    const tagName = tag.replace("#", "")
    const href = isClub ? `/clubs/${tagName}` : `/players/${tagName}`

    router.push(href)
  }

  return (
    <Container>
      {data.map((item, index) => (
        <RankingBar key={index}>
          <LeftSide>
            <Id>{index + 1}</Id>
            <PlayerInfo>
              {item.icon ? <Avatar img={item.icon.id} /> : <></>}
              <Info>
                <Name
                  onClick={() =>
                    handleClick(item.tag, item.club ? false : true)
                  }
                >
                  {item.name}
                </Name>
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
