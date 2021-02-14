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
  Trophies
} from "./styles.js"
import {DataContext} from "../../context/DataContext"
import {useContext} from "react"
import Link from "next/link"

const Ranking = ({data}) => {
  const {setPlayerData,setClubData} = useContext(DataContext)

  const handleClick = async (tag) => {
    const tagName = tag.replace("#","")
    const response = data[0].club ? 
    await (await fetch("/api/"+tagName+"/players")).json() :
    await (await fetch("/api/"+tagName+"/clubs")).json()

    if(data[0].club) setPlayerData(response)
    else setClubData(response)
  }

  return(
    <Container>
      {
        data.map((item,index) => (
          <RankingBar key={index}>
            <LeftSide>
              <Id>{index+1}</Id>
              <PlayerInfo>
                {item.icon ? <Avatar img={item.icon.id}/> : <></>}
                <Info>
                  <Link href={item.memberCount?"/clubs":"/"}>
                    <Name onClick={() => handleClick(item.tag)}>
                      {item.name}
                    </Name>
                  </Link>
                  <Club>{item.club ? item.club.name : item.memberCount+"/100"}</Club>
                </Info>
              </PlayerInfo>
            </LeftSide>
            <RightSide>
              <Icon src="/img/ranking.png"/>
              <Trophies>{item.trophies}</Trophies>
            </RightSide>
          </RankingBar>
        ))
      }
    </Container>
  )
}

export default Ranking