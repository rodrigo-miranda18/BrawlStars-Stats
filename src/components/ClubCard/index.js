import {useContext} from "react"
import {DataContext} from "../../context/DataContext"
import {
  Card,
  Info,
  Main,
  LeftSide,
  RightSide,
  Logo,
  Tag,
  Title,
  Trophies,
  Icon,
  Value,
  RequiredTrophies,
  Type,
  Description,
  Amount,
  IconTrophies,
  AmountTrophies,
  Name,
  NameType
} from "./styles.js"

const ClubCard = () => {
  const {clubData} = useContext(DataContext)

  return(
    <>
      {
        clubData.tag &&
        <Card>
          <Info>
            <LeftSide>
              <Logo src="/img/cla-icon.png"/>
              <Tag>{clubData.tag}</Tag>
            </LeftSide>
            <RightSide>
              <Title>{clubData.name}</Title>
              <Trophies>
                <Icon src="/img/ranking.png"/>
                <Value>{clubData.trophies}</Value>
              </Trophies>
            </RightSide>
          </Info>
          <Main>
            <RequiredTrophies>
              <Amount>
                <IconTrophies src="/img/ranking.png"/>
                <AmountTrophies>{clubData.requiredTrophies}</AmountTrophies>
              </Amount>
              <Name>Required Trophies</Name>
            </RequiredTrophies>
            <Type>
              <NameType>{clubData.type}</NameType>
              <Name>Type</Name>
            </Type>
            <Description>{clubData.description}</Description>
          </Main>
        </Card>
      }
    </>
  )
}

export default ClubCard