import {Container} from "../../styles/containerContentPages" 
import BtnRankingPage from "../BtnRankingPage"
import Ranking from "../Ranking"

const ContentRankingPlayers = ({data}) => (
  <Container>
    <BtnRankingPage isPressed="Players"/>
    <Ranking data={data}/>
  </Container>
)

export default ContentRankingPlayers