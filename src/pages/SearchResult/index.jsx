import { Container } from "react-bootstrap";
import CardList from "../../components/CardList";
import PageFrame from "../../components/PageFrame";
import { useMedicationApi } from "../../providers/MedicationProvider";

function SearchResultPage() {
  const { searchResults, isSearching } = useMedicationApi();

  return searchResults.content?.length > 0 || isSearching ? (
    <PageFrame title="Medicamentos">
      <CardList searchResults={searchResults} isSearching={isSearching} />
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
