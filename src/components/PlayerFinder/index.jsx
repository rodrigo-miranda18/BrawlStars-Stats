import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import {
  Container,
  Form,
  ImageContainer,
  Title,
  Field,
  Input,
  Button,
  ImageButton,
  Content,
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
        <div>
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
        </div>
      </Form>
      {/*<Image src="/img/brawlers2.png" />*/}
      <ImageContainer>
        <div>
          <Image
            unoptimized={true}
            width={305}
            height={310}
            src="/img/16000003-brawler.png"
            alt="brock-brawler"
          />
          <Image
            unoptimized={true}
            width={305}
            height={310}
            src="/img/16000007-brawler.png"
            alt="brock-brawler"
          />
          <Image
            unoptimized={true}
            width={305}
            height={310}
            src="/img/16000013-brawler.png"
            alt="brock-brawler"
          />
        </div>
      </ImageContainer>
    </Container>
  )
}

export default PlayerFinder
