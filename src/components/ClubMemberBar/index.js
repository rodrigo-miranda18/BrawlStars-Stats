import Link from "next/link"
import { useContext } from "react"
import {DataContext} from "../../context/DataContext"
import {Container,LeftSide,RightSide,Id,Avatar,Info,Name,Role,Icon,Trophies} from "./styles.js"

const ClubMemberBar = ({data,id}) => {
  const {setPlayerData} = useContext(DataContext)

  const handleClick = async () => {
    const tagPlayer = data.tag.replace("#","")
    const response = await (await fetch("/api/"+tagPlayer+"/players")).json()
    setPlayerData(response)
  }

  return(
    <Container>
      <LeftSide>
        <Id>{id}</Id>
          <Avatar image={`/img/${data.icon.id}.png`}></Avatar>
          <Link href="/">
            <Info onClick={(handleClick)}>
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