import { useState , useContext} from "react"
import {Container,Form,Title,Field,Input,Button,ImageButton,Image} from "../PlayerFinder/styles.js"
import {DataContext} from "../../context/DataContext"

const ClubFinder = () => {
  const [tag,setTag] = useState("")
  const {setClubData} = useContext(DataContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const tagClub = tag.replace("#","")

    try{
      const response = await (await fetch("/api/"+tagClub+"/clubs")).json()
      setClubData(response)

    }catch(err){
      console.error(err)
    }
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Type your Tag Club :</Title>
        <Field>
          <Input onChange={e => setTag(e.target.value)} placeholder="#XXXXXXXX"/>
          <Button>
            <ImageButton src="/img/icon.png"/>
          </Button>
        </Field>
      </Form>
      <Image src="/img/background-club.png"/>
    </Container>
  )
}

export default ClubFinder