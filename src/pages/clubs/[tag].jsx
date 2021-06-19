import Head from "next/head"

import api from "../../services/api"

import ClubInfo from "../../components/ClubInfo"

const ClubPerfil = ({ clubData }) => {
  return (
    <>
      <Head>
        <title>{clubData.name} | Brawl Stars Stats</title>
      </Head>
      <ClubInfo clubData={clubData} />
    </>
  )
}

export const getServerSideProps = async ctx => {
  const { tag } = ctx.params

  try {
    const response = await api.get(`clubs/%23${tag}`)
    const clubData = response.data

    return {
      props: {
        clubData,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default ClubPerfil
