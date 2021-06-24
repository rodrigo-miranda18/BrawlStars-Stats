import Head from "next/head"

import BtnRankingPage from "../../components/BtnRankingPage"
import Ranking from "../../components/Ranking"

import api from "../../services/api"

const Players = ({ data }) => (
  <>
    <Head>
      <title>Leaderboard | Brawl Stars Stats</title>
    </Head>
    <BtnRankingPage isPressed="Players" />
    <Ranking data={data} />
  </>
)

export const getServerSideProps = async () => {
  try {
    const response = await api.get("/rankings/1/players")

    return {
      props: {
        data: response.data.items,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default Players
