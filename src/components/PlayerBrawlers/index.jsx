import BrawlerCard from "../BrawlerCard"
import { Container, ContainerCards, AmountBrawlers, Number } from "./styles.js"

const PlayerBrawlers = ({ playerData }) => {
  const brawlers = playerData.brawlers
    ? playerData.brawlers.sort((a, b) => b.trophies - a.trophies)
    : []
  const amountBrawlers = {
    total: 44,
    me: brawlers.length,
  }

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
            <Number>
              {" " + amountBrawlers.me + "/" + amountBrawlers.total}
            </Number>
          </AmountBrawlers>
        </Container>
      )}
    </>
  )
}

export default PlayerBrawlers
