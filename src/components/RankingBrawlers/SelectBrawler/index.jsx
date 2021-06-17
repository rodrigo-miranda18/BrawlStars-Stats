import Link from "next/link"
import { useRouter } from "next/router"

import { Container, Avatar } from "./styles.js"

const SelectBrawler = ({ brawlers }) => {
  const router = useRouter()

  return (
    <Container>
      {brawlers.map((item, index) => (
        <Link key={index} href={`/ranking/brawlers/${item.id}`}>
          <Avatar
            border={router.query.brawler === item.id.toString() ? "1px" : "0px"}
            img={item.id}
          />
        </Link>
      ))}
    </Container>
  )
}

export default SelectBrawler
