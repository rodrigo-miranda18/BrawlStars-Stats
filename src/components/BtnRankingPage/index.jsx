import {Container} from "./styles.js"
import BtnRanking from "./BtnRanking"

const BtnRankingPage = ({isPressed}) => (
  <Container>
    <BtnRanking isPressed={isPressed} text="Players"/>
    <BtnRanking isPressed={isPressed} text="Clubs"/>
    <BtnRanking isPressed={isPressed} text="Brawlers"/>
  </Container>
)

export default BtnRankingPage