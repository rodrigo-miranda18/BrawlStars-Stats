import Image from "next/image"

import {
  Card,
  Info,
  Main,
  LeftSide,
  RightSide,
  Tag,
  Title,
  Trophies,
  Value,
  RequiredTrophies,
  Type,
  Description,
  Amount,
  AmountTrophies,
  Name,
  NameType,
} from "./styles.js"

const ClubCard = ({ clubData }) => {
  return (
    <>
      {clubData.tag && (
        <Card>
          <Info>
            <LeftSide>
              <Image
                width={55}
                height={60}
                src="/img/cla-icon.png"
                alt={clubData.name}
              />
              <Tag>{clubData.tag}</Tag>
            </LeftSide>
            <RightSide>
              <Title>{clubData.name}</Title>
              <Trophies>
                <Image
                  width={23}
                  height={17.1}
                  src="/img/ranking.png"
                  alt="Trophies"
                />
                <Value>{clubData.trophies}</Value>
              </Trophies>
            </RightSide>
          </Info>
          <Main>
            <RequiredTrophies>
              <Amount>
                <Image
                  width={30}
                  height={22.3}
                  src="/img/ranking.png"
                  alt="Trophies"
                />
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
      )}
    </>
  )
}

export default ClubCard
