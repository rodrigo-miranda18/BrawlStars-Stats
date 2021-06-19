import Image from "next/image"
import Head from "next/head"

import { Container, Title, Text } from "./styles"

const ErrorComponent = () => (
  <Container>
    <Head>
      <title>Erro | Brawl Stars Stats</title>
    </Head>
    <Image width={130} height={130} alt="Nita" src="/img/error-emote.svg" />
    <Title>Erro</Title>
    <Text>Insira o código novamente ou tente mais tarde</Text>
  </Container>
)

export default ErrorComponent
