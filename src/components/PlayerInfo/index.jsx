import { Container, MiniCards } from "./styles.js"
import PlayerCard from "./PlayerCard"
import MiniCard from "./MiniCard"

const PlayerInfo = ({ playerData }) => {
  return (
    <>
      {playerData.tag && (
        <Container>
          <PlayerCard playerData={playerData} />
          <MiniCards>
            <MiniCard
              icon="ranking.png"
              text="Highest Trophies"
              color="#FABC3B"
              value={playerData.highestTrophies}
              height={28.25}
            />
            <MiniCard
              icon="3v3.png"
              text="3v3 Victories"
              color="#E04D31"
              value={playerData["3vs3Victories"]}
              height={38}
            />
            <MiniCard
              icon="single-skull.png"
              text="Solo Victories"
              color="#0DF86B"
              value={playerData.soloVictories}
              height={43.5}
            />
            <MiniCard
              icon="multi-skulls.png"
              text="Duo Victories"
              color="#001AFF"
              value={playerData.duoVictories}
              height={38}
            />
          </MiniCards>
        </Container>
      )}
    </>
  )
}

export default PlayerInfo
