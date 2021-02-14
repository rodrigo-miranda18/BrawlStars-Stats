import {Container} from "../../styles/containerContentPages" 
import BtnRankingPage from "../BtnRankingPage"
import RankingBrawlers from "../RankingBrawlers"

const ContentRankingBrawlers = ({ranking,brawlers}) => (
  <Container>
    <BtnRankingPage isPressed="Brawlers"/>
    <RankingBrawlers ranking={ranking} brawlers={brawlers}/>
  </Container>
)

export default ContentRankingBrawlers