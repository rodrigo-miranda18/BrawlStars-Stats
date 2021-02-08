import { useState , useContext} from "react"
import {Container,Form,Image,Title,Field,Input,Button,ImageButton} from "./styles.js"
import {DataContext} from "../../context/DataContext"

const PlayerFinder = () => {
  const [tag,setTag] = useState("")
  const {setPlayerData} = useContext(DataContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const tagPlayer = tag.replace("#","")

    try{
      const response = await (await fetch("/api/"+tagPlayer+"/players")).json()
      setPlayerData(response)

    }catch(err){
      console.error(err)
    }
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Type your Tag Player :</Title>
        <Field>
          <Input onChange={e => setTag(e.target.value)} placeholder="#XXXXXXXX"/>
          <Button>
            <ImageButton src="/img/icon.png"/>
          </Button>
        </Field>
      </Form>
      <Image src="/img/brawlers2.png"/>
    </Container>
  )
}

export default PlayerFinder