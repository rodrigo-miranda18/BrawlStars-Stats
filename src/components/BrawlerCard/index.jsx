import {Card,Header,NameBar,Name,Main,Footer,Session,NameSession,Amount,Icon,Value} from "./styles.js"
import RankStar from "./RankStar"

const BrawlerCard = ({data}) => (
  <Card>
    <Header>
      <RankStar rank={data.rank}/>
      <NameBar>
        <Name>{data.name}</Name>
      </NameBar>
    </Header>
    <Main imageId={data.id}/>
    <Footer>
      <Session>
        <NameSession>Trophies</NameSession>
        <Amount>
          <Icon size={{width:"11px",height:"8.43px"}} src="/img/ranking.png"></Icon>
          <Value color="#FABC3B">{data.trophies}</Value>
        </Amount>
      </Session>
      <Session>
        <NameSession>Max Trophies</NameSession>
        <Amount>
          <Icon size={{width:"11px",height:"8.43px"}} src="/img/ranking.png"></Icon>
          <Value color="#FABC3B">{data.highestTrophies}</Value>
        </Amount>
      </Session>
      <Session>
        <NameSession>Power</NameSession>
        <Amount>
          <Icon size={{width:"10px",height:"9.66px"}} src="/img/power.png"></Icon>
          <Value color="#FB08C5">{data.power}</Value>
        </Amount>
      </Session>
    </Footer>
  </Card>
)

export default BrawlerCard