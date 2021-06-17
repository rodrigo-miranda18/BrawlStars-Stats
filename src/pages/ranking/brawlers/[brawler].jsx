import BtnRankingPage from "../../../components/BtnRankingPage"
import RankingBrawlers from "../../../components/RankingBrawlers"

import api from "../../../services/api"

const Brawlers = ({ brawlers, ranking }) => (
  <>
    <BtnRankingPage />
    <RankingBrawlers brawlers={brawlers} ranking={ranking} />
  </>
)

export const getStaticPaths = async () => {
  const response = await api.get("/brawlers")
  const brawlers = response.data.items
  const brawlersIds = brawlers.map(item => ({
    params: { brawler: item.id.toString() },
  }))

  return {
    paths: brawlersIds,
    fallback: "blocking",
  }
}

export const getStaticProps = async ctx => {
  const brawlerId = ctx.params.brawler
  const brawlers = await api.get("/brawlers")
  const ranking = await api.get(`/rankings/1/brawlers/${brawlerId}?limit=50`)

  return {
    props: {
      brawlers: brawlers.data.items,
      ranking: ranking.data.items,
    },
    revalidate: 60 * 10, // 10 minutes
  }
}

export default Brawlers
