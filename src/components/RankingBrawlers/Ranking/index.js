import {Container} from "./styles.js"
import RankingBrawler from  "../../Ranking"

const Ranking = ({ranking}) => (
  <Container>
    <RankingBrawler data={ranking}/>
  </Container>
)

export default Ranking