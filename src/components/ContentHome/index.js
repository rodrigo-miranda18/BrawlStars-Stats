import {Container} from "./styles.js" 
import PlayerFinder from "../PlayerFinder"
import PlayerInfo from "../PlayerInfo"
import PlayerBrawlers from "../PlayerBrawlers"

const ContentHome = () => (
  <Container>
    <PlayerFinder/>
    <PlayerInfo/>
    <PlayerBrawlers/>
  </Container>
)

export default ContentHome