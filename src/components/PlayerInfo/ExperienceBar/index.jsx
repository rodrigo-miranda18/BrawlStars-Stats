import {
  Bar, 
  ContainerStar,
  StarImage,
  ExperienceNumber,
  ExperienceProgressBar,
  BlueBar,
  BlackBar
} from "./styles.js"

const ExperienceBar = ({expLevel}) => {
  return(
    <Bar>
      <ContainerStar>
        <StarImage src="/img/experience-star.png"/>
        <ExperienceNumber>{expLevel}</ExperienceNumber>
      </ContainerStar>
      <ExperienceProgressBar>
        <BlueBar/>
        <BlackBar/>
      </ExperienceProgressBar>
    </Bar>
  )
}

export default ExperienceBar