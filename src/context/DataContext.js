import {createContext,useState} from "react"

const DataContext = createContext()

const DataProvider = ({children}) => {
  const [playerData,setPlayerData] = useState({})

  return(
    <DataContext.Provider value={{playerData,setPlayerData}}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext,DataProvider}
