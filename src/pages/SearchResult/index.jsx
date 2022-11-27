import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";
import Container from "react-bootstrap/Container";
import ResultList from "../../components/PageComponents/ResultList";
import PageFrame from "../../components/PageComponents/PageFrame";

function SearchResultPage() {
  const { searchResults, isSearching, getMedicationByName } = useMedicationApi();
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    const nome   = searchParams.get("nome");
    const pagina = searchParams.get("pagina")

    getMedicationByName(nome, pagina)
  }, [searchParams])

  return searchResults.content?.length > 0 || isSearching ? (
    <PageFrame title="Medicamentos">
      <ResultList searchResults={searchResults} isSearching={isSearching} />
    </PageFrame>
  ) : (
    <PageFrame>
      <Container>
        <h3 className="p-3 m-3 text-justify">
          Sua busca não obteve resultados. Verifique se o nome do medicamento
          foi digitado corretamente.
        </h3>
      </Container>
    </PageFrame>
  );
}

export default SearchResultPage;
