import { createContext, useContext, useState } from "react";
import RequestAPI from "../services/API";

const MedicationApiContext = createContext();

export function MedicationApiProvider({children}) {
  const [searchResults, setSearchResults] = useState({content:[]});

  async function getMedicationByName(medicationName, page=1) {
    const resp = await RequestAPI("/pesquisar", {
      params:{
        nome: medicationName,
        pagina: page,
      }
    })

    setSearchResults({medicationName, ...resp.data})
  }

  async function getMedicationByProcess(processNumber) {
    const resp = await RequestAPI(`/medicamento/${processNumber}`)

    return resp.data
  }

  return (
    <MedicationApiContext.Provider
      value={{
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