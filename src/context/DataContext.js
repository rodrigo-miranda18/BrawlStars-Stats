import {createContext,useState} from "react"

const DataContext = createContext()

const DataProvider = ({children}) => {
  const [playerData,setPlayerData] = useState({})
  const [clubData,setClubData] = useState({})

  return(
    <DataContext.Provider value={{playerData,setPlayerData,clubData,setClubData}}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext,DataProvider}
