import { useState, useContext } from "react"
import { useRouter } from "next/router"

import {
  Container,
  Form,
  Image,
  Title,
  Field,
  Input,
  Button,
  ImageButton,
} from "./styles.js"

const PlayerFinder = () => {
  const [tag, setTag] = useState("")
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()

    const tagPlayer = tag.replace("#", "")
    const href = `/players/${tagPlayer}`

    router.push(href)
  }

  return (
    <Container>
      <Form onSubmit={tag ? handleSubmit : () => {}}>
        <Title>Type your Tag Player :</Title>
        <Field>
          <Input
            onChange={e => setTag(e.target.value)}
            placeholder="#XXXXXXXX"
          />
          <Button>
            <ImageButton src="/img/icon.png" />
          </Button>
        </Field>
      </Form>
      <Image src="/img/brawlers2.png" />
    </Container>
  )
}

export default PlayerFinder
