import { Container , Logo , Links , IconBox ,PlayStoreIcon ,AppStoreIcon} from "./styles"
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"

const Footer = () => (
  <Container>
    <Logo>
      <img src="/img/brawl-stars-logo.png"/>
    </Logo>
    <Links>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.supercell.brawlstars">
        <PlayStoreIcon src="/img/play-store-icon.png"/>
      </a>
      <a target="_blank" href="https://apps.apple.com/br/app/brawl-stars/id1229016807">
        <AppStoreIcon src="/img/apple-app-store-icon.png"/>
      </a>
      <IconBox target="_blank" href="https://twitter.com/brawlstars">
        <FiTwitter color="white" size={20}/>
      </IconBox>
      <IconBox target="_blank" href="https://instagram.com/brawlstars">
        <AiOutlineInstagram color="white" size={20}/>
      </IconBox>
    </Links>
  </Container>
)

export default Footer