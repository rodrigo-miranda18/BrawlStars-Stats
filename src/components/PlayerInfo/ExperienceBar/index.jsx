import Image from "next/image"

import {
  Bar,
  ContainerStar,
  StarImage,
  ExperienceNumber,
  ExperienceProgressBar,
  BlueBar,
  BlackBar,
} from "./styles.js"

const ExperienceBar = ({ expLevel }) => {
  return (
    <Bar>
      <ContainerStar>
        <StarImage>
          <Image
            width={24}
            height={24}
            src="/img/experience-star.png"
            alt="Brawler XP level"
          />
        </StarImage>
        <ExperienceNumber>{expLevel}</ExperienceNumber>
      </ContainerStar>
      <ExperienceProgressBar>
        <BlueBar />
        <BlackBar />
      </ExperienceProgressBar>
    </Bar>
  )
}

export default ExperienceBar
