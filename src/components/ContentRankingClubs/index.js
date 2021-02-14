import {Container} from "../../styles/containerContentPages" 
import BtnRankingPage from "../BtnRankingPage"
import Ranking from "../Ranking"

const ContentRankingClubs = ({data}) => (
  <Container>
    <BtnRankingPage isPressed="Clubs"/>
    <Ranking data={data}/>
  </Container>
)

export default ContentRankingClubs