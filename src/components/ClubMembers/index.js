import {useContext} from "react"
import {Container,AmountMembers,Value,Members} from "./styles.js"
import {DataContext} from "../../context/DataContext"
import ClubMemberBar from "../ClubMemberBar"

const ClubMembers = () => {
  const {clubData} = useContext(DataContext)

  return(
    <>
      {
        clubData.members && 
        <Container>
          <Members>
            {
              clubData.members.map((item,index) => <ClubMemberBar key={index} id={index+1} data={item}/>)
            }
          </Members>
          <AmountMembers>
            Members
            <Value> {clubData.members.length}/100</Value>
          </AmountMembers>
        </Container>
      }
    </>
  )
}

export default ClubMembers