import { Container, AmountMembers, Value, Members } from "./styles.js"
import ClubMemberBar from "../ClubMemberBar"

const ClubMembers = ({ clubData }) => {
  return (
    <>
      {clubData.members && (
        <Container>
          <Members>
            {clubData.members.map((item, index) => (
              <ClubMemberBar key={index} id={index + 1} data={item} />
            ))}
          </Members>
          <AmountMembers>
            Members
            <Value> {clubData.members.length}/100</Value>
          </AmountMembers>
        </Container>
      )}
    </>
  )
}

export default ClubMembers
