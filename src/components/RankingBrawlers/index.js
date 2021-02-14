import {Container} from "./styles.js"
import SelectBrawler from "./SelectBrawler"
import Ranking from "./Ranking"

const RankingBrawlers = ({brawlers,ranking}) => (
  <Container>
    <SelectBrawler brawlers={brawlers}/>
    <Ranking ranking={ranking}/>
  </Container>
)

export default RankingBrawlers