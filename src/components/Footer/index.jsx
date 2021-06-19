import Image from "next/image"
import Link from "next/link"

import { Container, Links, IconBox } from "./styles"

import { FiTwitter } from "react-icons/fi"
import { AiOutlineInstagram } from "react-icons/ai"

const Footer = () => (
  <Container>
    <Image
      unoptimized={true}
      width={150}
      height={150}
      src="/img/brawl-stars-logo.png"
      alt="Brawl Stars"
    />
    <Links>
      <Link href="https://play.google.com/store/apps/details?id=com.supercell.brawlstars">
        <a target="_blank">
          <Image
            width={120}
            height={35}
            alt="Download Brawl Stars on Play Store"
            src="/img/play-store-icon.png"
          />
        </a>
      </Link>
      <Link href="https://apps.apple.com/br/app/brawl-stars/id1229016807">
        <a target="_blank">
          <Image
            width={100.5}
            height={35}
            alt="Download Brawl Stars on App Store"
            src="/img/apple-app-store-icon.png"
          />
        </a>
      </Link>
      <Link href="https://twitter.com/brawlstars">
        <a target="_blank">
          <IconBox>
            <FiTwitter color="white" size={20} />
          </IconBox>
        </a>
      </Link>
      <Link href="https://instagram.com/brawlstars">
        <a target="_blank">
          <IconBox>
            <AiOutlineInstagram color="white" size={20} />
          </IconBox>
        </a>
      </Link>
    </Links>
  </Container>
)

export default Footer
