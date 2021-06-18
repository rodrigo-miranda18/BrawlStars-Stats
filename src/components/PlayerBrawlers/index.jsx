import BrawlerCard from "../BrawlerCard"
import { Container, ContainerCards, AmountBrawlers, Number } from "./styles.js"

const PlayerBrawlers = ({ playerData, amountBrawlers }) => {
  const brawlers = playerData.brawlers
    ? playerData.brawlers.sort((a, b) => b.trophies - a.trophies)
    : []

  return (
    <>
      {playerData.brawlers && (
        <Container>
          <ContainerCards>
            {brawlers &&
              brawlers.map((item, index) => (
                <BrawlerCard key={index} data={item} />
              ))}
          </ContainerCards>
          <AmountBrawlers>
            Brawlers
            <Number>{` ${brawlers.length}/${amountBrawlers}`}</Number>
          </AmountBrawlers>
        </Container>
      )}
    </>
  )
}

export default PlayerBrawlers
