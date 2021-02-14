import {Button,LinkText} from "./styles.js"
import Link from "next/link"

const BtnRanking = ({text,isPressed}) => (
  <Button isPressed={isPressed===text?true:false}>
    <Link href={text==="Brawlers"?`/ranking/${text.toLowerCase()}/16000000`:`/ranking/${text.toLowerCase()}`}>
      <LinkText>{text}</LinkText>
    </Link>
  </Button>
)

export default BtnRanking