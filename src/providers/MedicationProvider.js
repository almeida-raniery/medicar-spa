import { createContext, useContext, useState } from "react";
import RequestAPI from "../services/API";

const MedicationApiContext = createContext();

export function MedicationApiProvider({children}) {
<<<<<<< HEAD
  const [searchResults, setSearchResults] = useState({});
  const [isSearching, setIsSearching] = useState(false)

  async function getMedicationByName(medicationName, page=1) {
    setIsSearching(true)

=======
  const [searchResults, setSearchResults] = useState({content:[]});

  async function getMedicationByName(medicationName, page=1) {
>>>>>>> c6184e45352e5fcb13f48a43217d9e244f4052f2
    const resp = await RequestAPI("/pesquisar", {
      params:{
        nome: medicationName,
        pagina: page,
      }
    })

    setSearchResults({medicationName, ...resp.data})
<<<<<<< HEAD
    setIsSearching(false)
=======
>>>>>>> c6184e45352e5fcb13f48a43217d9e244f4052f2
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