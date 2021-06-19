import Image from "next/image"

import {
  Card,
  Header,
  NameBar,
  Name,
  Main,
  Footer,
  Session,
  NameSession,
  Amount,
  Value,
} from "./styles.js"

import RankStar from "./RankStar"

const BrawlerCard = ({ data }) => (
  <Card>
    <Header>
      <RankStar rank={data.rank} />
      <NameBar>
        <Name>{data.name}</Name>
      </NameBar>
    </Header>
    <Main>
      <Image
        width={130}
        height={85.8}
        alt={`${data.name} Brawler`}
        src={`/img/${data.id}.png`}
      />
    </Main>
    <Footer>
      <Session>
        <NameSession>Trophies</NameSession>
        <Amount>
          <Image
            width={11}
            height={8.43}
            src="/img/ranking.png"
            alt="Trophies"
          />
          <Value color="#FABC3B">{data.trophies}</Value>
        </Amount>
      </Session>
      <Session>
        <NameSession>Max Trophies</NameSession>
        <Amount>
          <Image
            width={11}
            height={8.43}
            src="/img/ranking.png"
            alt="Max Trophies"
          />
          <Value color="#FABC3B">{data.highestTrophies}</Value>
        </Amount>
      </Session>
      <Session>
        <NameSession>Power</NameSession>
        <Amount>
          <Image width={10} height={9.66} src="/img/power.png" alt="Power" />
          <Value color="#FB08C5">{data.power}</Value>
        </Amount>
      </Session>
    </Footer>
  </Card>
)

export default BrawlerCard
