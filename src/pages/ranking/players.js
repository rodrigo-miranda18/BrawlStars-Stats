import Layout from "../../components/Layout"
import ContentRankingPlayers from "../../components/ContentRankingPlayers"
import api from "../../services/api"

const Players = ({data}) => (
  <Layout>
    <ContentRankingPlayers data={data}/>
  </Layout>
)

export const getServerSideProps = async () => {
  const response = await api.get("/rankings/1/players")
  
  return{
    props:{
      data:response.data.items
    }
  }
}

export default Players