import BtnRankingPage from "../../components/BtnRankingPage"
import Ranking from "../../components/Ranking"

import api from "../../services/api"

const Club = ({ data }) => (
  <>
    <BtnRankingPage isPressed="Clubs" />
    <Ranking data={data} />
  </>
)

export const getStaticProps = async () => {
  const response = await api.get("/rankings/1/clubs")

  return {
    props: {
      data: response.data.items,
    },
  }
}

export default Club
