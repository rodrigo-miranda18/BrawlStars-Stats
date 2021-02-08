import {useContext} from "react"
import ExperienceBar from "../ExperienceBar"
import {DataContext} from "../../../context/DataContext" 
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
  const {playerData} = useContext(DataContext)
  const highestTrophiesBrawler = playerData.tag ? playerData.brawlers.sort((a,b) => b.trophies-a.trophies) : []

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
          <Club>
            <ClubIcon src="/img/cla-icon.png"/>
            <ClubName>{!playerData.club.name ? "NO CLUB" : playerData.club.name}</ClubName>
          </Club>
        </LeftSide>
        <RightSide>
          <MainBrawlerImage image={highestTrophiesBrawler[0].id}/>
        </RightSide>
      </Card>
  )
}

export default PlayerCard