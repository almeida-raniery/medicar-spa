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
    const resp = await RequestAPI(`/medication/${processNumber}`)

    console.log(resp);
  }

  async function getLeaflet(patientLeafletId) {
    const resp = await RequestAPI("/pdf", {
      params:{
        id: patientLeafletId
      }
    })

    console.log(resp);
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