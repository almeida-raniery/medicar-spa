import { createContext, useContext, useState } from "react";
import RequestAPI from "../services/API";

const MedicationApiContext = createContext();

export function MedicationApiProvider({ children }) {
  const [searchResults, setSearchResults] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);

  async function getMedicationByName(medicationName, page = 1) {
    setIsSearching(true);

    try {
      const resp = await RequestAPI("/pesquisar", {
        params: {
          nome: medicationName,
          pagina: page,
        },
      });

      setSearchResults({ medicationName, ...resp.data });
    } catch (err) {
      setIsTimeOut(true);
      console.log(err)
    }

    setIsSearching(false);
  }

  async function getMedicationByProcess(processNumber) {
    const resp = await RequestAPI(`/medicamento/${processNumber}`);

    return resp.data;
  }

  return (
    <MedicationApiContext.Provider
      value={{
        isSearching,
        isTimeOut,
        searchResults,
        getMedicationByName,
        getMedicationByProcess,
      }}
    >
      {children}
    </MedicationApiContext.Provider>
  );
}

export const useMedicationApi = () => useContext(MedicationApiContext);
