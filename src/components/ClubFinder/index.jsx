import { useState } from "react"
import { useRouter } from "next/router"

import {
  Container,
  Form,
  Title,
  Field,
  Input,
  Button,
  ImageButton,
  Image,
} from "../PlayerFinder/styles.js"

const ClubFinder = () => {
  const [tag, setTag] = useState("")
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()

    const tagClub = tag.replace("#", "")
    const href = `/clubs/${tagClub}`

    router.push(href)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Type your Tag Club :</Title>
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
      <Image src="/img/background-club.png" />
    </Container>
  )
}

export default ClubFinder
