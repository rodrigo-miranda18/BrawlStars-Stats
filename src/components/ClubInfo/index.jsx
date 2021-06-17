import ClubCard from "../ClubCard"
import ClubMembers from "../ClubMembers"

import { Container } from "./styles"

const ClubInfo = ({ clubData }) => (
  <Container>
    <ClubCard clubData={clubData} />
    <ClubMembers clubData={clubData} />
  </Container>
)

export default ClubInfo
