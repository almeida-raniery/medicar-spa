import { createContext, useContext, useState } from "react";
import RequestAPI from "../services/API";

const MedicationApiContext = createContext();

export function MedicationApiProvider({children}) {
  const [searchResults, setSearchResults] = useState([]);

  async function getMedicationByName(medicationName) {
    const resp = await RequestAPI("/pesquisar", {
      params:{
        nome: medicationName
      }
    })

    setSearchResults(resp.data.content)
  }

  async function getMedicationByProcess(processNumber) {
    const resp = await RequestAPI(`/medicamento/${processNumber}`)

    return resp.data
  }

  async function getLeaflet(patientLeafletId) {
    RequestAPI("/pdf", {
      params:{
        id: patientLeafletId
      }
    })
  }

  return (
    <MedicationApiContext.Provider
      value={{
        searchResults,
        getMedicationByName,
        getMedicationByProcess,
        getLeaflet
      }}
    >
      {children}
    </MedicationApiContext.Provider>
  );

}

export const useMedicationApi = () => useContext(MedicationApiContext)