import Layout from  "../../../components/Layout"
import ContentRankingBrawlers from "../../../components/ContentRankingBrawlers"
import api from "../../../services/api"

const Brawlers = ({brawlers,ranking}) => (
  <Layout>
    <ContentRankingBrawlers brawlers={brawlers} ranking={ranking}/>
  </Layout>
)

export const getStaticPaths = async () => {
  const response = await api.get("/brawlers")
  const brawlers = response.data.items
  const brawlersIds = brawlers.map((item) => ({params: {brawler: item.id.toString()}}))

  return{
    paths:brawlersIds,
    fallback:false
  }
}

export const getStaticProps = async (context) => {
  const brawlerId = context.params.brawler
  const brawlers = await api.get("/brawlers")
  const ranking = await api.get("/rankings/1/brawlers/"+brawlerId+"?limit=50")

  return{
    props:{
      brawlers:brawlers.data.items,
      ranking:ranking.data.items
    }
  }
}

export default Brawlers