import Head from "next/head"

import BtnRankingPage from "../../../components/BtnRankingPage"
import RankingBrawlers from "../../../components/RankingBrawlers"

import api from "../../../services/api"

const Brawlers = ({ brawlers, ranking }) => (
  <>
    <Head>
      <title>Leaderboard | Brawl Stars Stats</title>
    </Head>
    <BtnRankingPage isPressed="Brawlers" />
    <RankingBrawlers brawlers={brawlers} ranking={ranking} />
  </>
)

export const getStaticPaths = async () => {
  try {
    const response = await api.get("/brawlers")
    const brawlers = response.data.items
    const brawlersIds = brawlers.map(item => ({
      params: { brawler: item.id.toString() },
    }))

    return {
      paths: brawlersIds,
      fallback: "blocking",
    }
  } catch (err) {
    return {
      paths: [],
      fallback: "blocking",
    }
  }
}

export const getStaticProps = async ctx => {
  const brawlerId = ctx.params.brawler

  try {
    const brawlers = await api.get("/brawlers")
    const ranking = await api.get(`/rankings/1/brawlers/${brawlerId}?limit=50`)

    return {
      props: {
        brawlers: brawlers.data.items,
        ranking: ranking.data.items,
      },
      revalidate: 60 * 10, // 10 minutes
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default Brawlers
