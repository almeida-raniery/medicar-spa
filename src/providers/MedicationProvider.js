import { createContext, useContext, useState } from "react";
import RequestAPI from "../services/API";

const MedicationApiContext = createContext();

export function MedicationApiProvider({children}) {
  const [searchResults, setSearchResults] = useState({});
  const [isSearching, setIsSearching] = useState(false)

  async function getMedicationByName(medicationName, page=1) {
    setIsSearching(true)

    const resp = await RequestAPI("/pesquisar", {
      params:{
        nome: medicationName
      }
    })

    setSearchResults({medicationName, ...resp.data})
    setIsSearching(false)
  }

  async function getMedicationByProcess(processNumber) {
    const resp = await RequestAPI(`/medicamento/${processNumber}`)

    return resp.data
  }

  return (
    <MedicationApiContext.Provider
      value={{
        isSearching,
        searchResults,
        getMedicationByName,
        getMedicationByProcess,
      }}
    >
      {children}
    </MedicationApiContext.Provider>
  );

}

export const useMedicationApi = () => useContext(MedicationApiContext)