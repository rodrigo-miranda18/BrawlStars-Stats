import Layout from "../../components/Layout"
import ContentRankingClubs from "../../components/ContentRankingClubs"
import api from "../../services/api"

const Club = ({data}) => (
  <Layout>
    <ContentRankingClubs data={data}/>
  </Layout>
)

export const getStaticProps = async () => {
  const response = await api.get("/rankings/1/clubs")

  return {
    props:{
      data:response.data.items
    }
  }
}

export default Club