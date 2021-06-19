import Link from "next/link"
import Image from "next/image"

import ExperienceBar from "../ExperienceBar"
import {
  Card,
  LeftSide,
  RightSide,
  AvatarPerfil,
  Avatar,
  NameAndTrophies,
  Name,
  Trophies,
  TrophiesAmount,
  TagName,
  Club,
  ClubName,
  MainBrawlerImage,
} from "./styles.js"

const PlayerCard = ({ playerData }) => {
  const href = playerData.club.tag
    ? `/clubs/${playerData.club.tag.replace("#", "")}`
    : `/players/${playerData.tag.replace("#", "")}`

  const highestTrophiesBrawler = playerData.tag
    ? playerData.brawlers.sort((a, b) => b.trophies - a.trophies)
    : []

  return (
    <Card>
      <LeftSide>
        <AvatarPerfil>
          <Avatar>
            <Image
              objectFit="contain"
              width={70}
              height={70}
              src={`/img/${playerData.icon.id}.png`}
              alt="Player Profile Avatar"
            />
          </Avatar>
          <NameAndTrophies>
            <Name>{playerData.name}</Name>
            <Trophies>
              <Image
                width={20}
                height={15}
                src="/img/ranking.png"
                alt="Player Trophies Brawl Stars"
              />
              <TrophiesAmount>{playerData.trophies}</TrophiesAmount>
            </Trophies>
          </NameAndTrophies>
        </AvatarPerfil>
        <TagName>{playerData.tag}</TagName>
        <ExperienceBar expLevel={playerData.expLevel} />
        <Link href={href}>
          <Club>
            <Image
              width={20}
              height={21.8}
              src="/img/cla-icon.png"
              alt={playerData.club.name}
            />
            <ClubName>
              {!playerData.club.name ? "NO CLUB" : playerData.club.name}
            </ClubName>
          </Club>
        </Link>
      </LeftSide>
      <RightSide>
        <Image
          objectFit="contain"
          unoptimized={true}
          width={150}
          height={150}
          src={`/img/${highestTrophiesBrawler[0].id}-brawler.png`}
          alt={highestTrophiesBrawler[0].name}
        />
      </RightSide>
    </Card>
  )
}

export default PlayerCard
