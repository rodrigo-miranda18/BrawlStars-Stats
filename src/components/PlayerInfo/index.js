import {useContext} from "react"
import {DataContext} from "../../context/DataContext"
import {Container,MiniCards} from "./styles.js"
import PlayerCard from "./PlayerCard"
import MiniCard from "./MiniCard"

const PlayerInfo = () => {
  const {playerData} = useContext(DataContext)

  return(
    <>
      {
        playerData.tag && 
        <Container>
          <PlayerCard/>
          <MiniCards>
            <MiniCard 
              icon="ranking.png" 
              text="Highest Trophies"
              color="#FABC3B"
              value={playerData.highestTrophies}
            />
            <MiniCard 
              icon="3v3.png" 
              text="3v3 Victories"
              color="#E04D31"
              value={playerData.["3vs3Victories"]}
            />
            <MiniCard 
              icon="single-skull.png" 
              text="Solo Victories"
              color="#0DF86B"
              value={playerData.soloVictories}
            />
            <MiniCard 
              icon="multi-skulls.png" 
              text="Duo Victories"
              color="#001AFF"
              value={playerData.duoVictories}
            />
          </MiniCards>
        </Container>
      }
    </>
  )
}

export default PlayerInfo