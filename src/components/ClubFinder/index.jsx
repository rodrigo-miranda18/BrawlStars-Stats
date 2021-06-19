import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import {
  Container,
  Form,
  Title,
  Field,
  Input,
  Button,
  ImageButton,
  ImageContainer,
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
        <div>
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
        </div>
      </Form>
      <ImageContainer>
        <div>
          <Image
            unoptimized={true}
            width={310}
            height={335}
            alt="Brawler"
            src="/img/16000016-brawler.png"
          />
          <Image
            unoptimized={true}
            width={310}
            height={335}
            alt="Brawler"
            src="/img/16000020-brawler.png"
          />
          <Image
            unoptimized={true}
            width={325}
            height={325}
            alt="Brawler"
            src="/img/16000025-brawler.png"
          />
        </div>
      </ImageContainer>
    </Container>
  )
}

export default ClubFinder
