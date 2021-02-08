import {Card,Value,Icon,Amount,Text} from "./styles.js"

const MiniCard = ({icon,text,value,color}) => (
  <Card>
    <Value>
      <Icon src={`/img/${icon}`}></Icon>
      <Amount color={color}>{value}</Amount>
    </Value>
    <Text>{text}</Text>
  </Card>
)

export default MiniCard