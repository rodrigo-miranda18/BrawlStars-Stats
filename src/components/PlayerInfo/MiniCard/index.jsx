import Image from "next/image"

import { Card, Value, Icon, Amount, Text } from "./styles.js"

const MiniCard = ({ icon, text, value, color, height }) => (
  <Card>
    <Value>
      <Image width={38} height={height} src={`/img/${icon}`} alt={text} />
      <Amount color={color}>{value}</Amount>
    </Value>
    <Text>{text}</Text>
  </Card>
)

export default MiniCard
