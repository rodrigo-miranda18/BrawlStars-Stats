import {useContext} from "react"
import ExperienceBar from "../ExperienceBar"
import {DataContext} from "../../../context/DataContext" 
import Link from "next/link"
import {
  Card,
  LeftSide,
  RightSide,
  AvatarPerfil,
  Avatar,
  NameAndTrophies,
  Name,
  Trophies,
  TrophieImage,
  TrophiesAmount,
  TagName,
  Club,
  ClubIcon,
  ClubName,
  MainBrawlerImage
} from "./styles.js"

const PlayerCard = () => {
  const {playerData,setClubData} = useContext(DataContext)
  const highestTrophiesBrawler = playerData.tag ? playerData.brawlers.sort((a,b) => b.trophies-a.trophies) : []

  const handleClick = async () => {
    const tagClub = playerData.club.tag.replace("#","")
    const response = await (await fetch("/api/"+tagClub+"/clubs")).json()
    setClubData(response)
  }

  return(
      <Card>
        <LeftSide>
          <AvatarPerfil>
            <Avatar image={playerData.icon.id}/>
            <NameAndTrophies>
              <Name>{playerData.name}</Name>
              <Trophies>
                <TrophieImage src="/img/ranking.png"/>
                <TrophiesAmount>{playerData.trophies}</TrophiesAmount>
              </Trophies>
            </NameAndTrophies>
          </AvatarPerfil>
          <TagName>{playerData.tag}</TagName>
          <ExperienceBar expLevel={playerData.expLevel}/>
          <Link href="/clubs">
            <Club onClick={() => !playerData.club.name?"":handleClick()}>
              <ClubIcon src="/img/cla-icon.png"/>
              <ClubName>{!playerData.club.name ? "NO CLUB" : playerData.club.name}</ClubName>
            </Club>
          </Link>
        </LeftSide>
        <RightSide>
          <MainBrawlerImage image={highestTrophiesBrawler[0].id}/>
        </RightSide>
      </Card>
  )
}

export default PlayerCard