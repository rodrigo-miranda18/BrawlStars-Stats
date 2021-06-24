import Head from "next/head"

import BtnRankingPage from "../../components/BtnRankingPage"
import Ranking from "../../components/Ranking"

import api from "../../services/api"

const Club = ({ data }) => (
  <>
    <Head>
      <title>Leaderboard | Brawl Stars Stats</title>
    </Head>
    <BtnRankingPage isPressed="Clubs" />
    <Ranking data={data} />
  </>
)

export const getStaticProps = async () => {
  try {
    const response = await api.get("/rankings/1/clubs")

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

export default Club
