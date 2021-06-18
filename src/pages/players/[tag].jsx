import Head from "next/head"

import api from "../../services/api"

import PlayerInfo from "../../components/PlayerInfo"
import PlayerBrawlers from "../../components/PlayerBrawlers"
import ErrorPage from "../../components/ErrorPage"

const PlayerPerfil = ({ playerData, amountBrawlers }) => {
  if (!playerData) {
    return <ErrorPage />
  }

  return (
    <>
      <Head>
        <title>{playerData.name} | Brawl Stars Stats</title>
      </Head>
      <PlayerInfo playerData={playerData} />
      <PlayerBrawlers amountBrawlers={amountBrawlers} playerData={playerData} />
    </>
  )
}

export const getServerSideProps = async ctx => {
  const { tag } = ctx.params

  try {
    const { data: playerData } = await api.get(`players/%23${tag}`)
    const { data } = await api.get(`brawlers`)
    const amountBrawlers = data.items.length

    return {
      props: {
        playerData,
        amountBrawlers,
      },
    }
  } catch (err) {
    return {
      props: {
        playerData: null,
        amountBrawlers: null,
      },
    }
  }
}

export default PlayerPerfil
