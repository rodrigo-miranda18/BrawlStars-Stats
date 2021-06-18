import Image from "next/image"

import { Container, Title, Text } from "./styles"

const ErrorPage = () => (
  <Container>
    <Image width={130} height={130} alt="Nita" src="/img/error-emote.svg" />
    <Title>Erro</Title>
    <Text>Insira o código novamente ou tente mais tarde</Text>
  </Container>
)

export default ErrorPage
