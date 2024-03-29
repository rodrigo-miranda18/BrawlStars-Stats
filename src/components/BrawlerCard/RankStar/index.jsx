import Image from "next/image"

import { Star, Rank } from "./styles.js"

const RankStar = ({ rank }) => {
  const starColor =
    rank === 35
      ? "emerald"
      : rank > 29 && rank < 35
      ? "red"
      : rank > 24 && rank < 30
      ? "green"
      : rank > 19 && rank < 25
      ? "purple"
      : rank > 14 && rank < 20
      ? "blue"
      : rank > 9 && rank < 15
      ? "gold"
      : rank > 4 && rank < 10
      ? "grey"
      : rank < 5
      ? "gold"
      : ""

  return (
    <Star>
      <Image
        width={28}
        height={28}
        src={`/img/star-rank-${starColor}.png`}
        alt={`Rank ${rank} Brawler`}
      />
      <Rank>{rank}</Rank>
    </Star>
  )
}

export default RankStar
