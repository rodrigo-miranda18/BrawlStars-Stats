import { Button, LinkText } from "./styles.js"
import Link from "next/link"

const BtnRanking = ({ text, isPressed }) => (
  <Link
    href={
      text === "Brawlers"
        ? `/ranking/${text.toLowerCase()}/16000000`
        : `/ranking/${text.toLowerCase()}`
    }
  >
    <Button isPressed={isPressed === text ? true : false}>
      <LinkText>{text}</LinkText>
    </Button>
  </Link>
)

export default BtnRanking
