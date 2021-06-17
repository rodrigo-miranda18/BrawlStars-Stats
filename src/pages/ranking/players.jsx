import BtnRankingPage from "../../components/BtnRankingPage"
import Ranking from "../../components/Ranking"

import api from "../../services/api"

const Players = ({ data }) => (
  <>
    <BtnRankingPage isPressed="Players" />
    <Ranking data={data} />
  </>
)

export const getServerSideProps = async () => {
  const response = await api.get("/rankings/1/players")

  return {
    props: {
      data: response.data.items,
    },
  }
}

export default Players
