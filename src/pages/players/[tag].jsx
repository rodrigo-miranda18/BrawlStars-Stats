import api from "../../services/api"

import PlayerInfo from "../../components/PlayerInfo"
import PlayerBrawlers from "../../components/PlayerBrawlers"

const PlayerPerfil = ({ playerData }) => {
  if (!playerData) {
    return <></>
  }

  return (
    <>
      <PlayerInfo playerData={playerData} />
      <PlayerBrawlers playerData={playerData} />
    </>
  )
}

export const getServerSideProps = async ctx => {
  const { tag } = ctx.params

  try {
    const response = await api.get(`players/%23${tag}`)
    const playerData = response.data

    return {
      props: {
        playerData,
      },
    }
  } catch (err) {
    return {
      props: {
        playerData: null,
      },
    }
  }
}

export default PlayerPerfil
