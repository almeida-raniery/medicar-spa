import { Container } from "react-bootstrap";
import CardList from "../../components/CardList";
import PageFrame from "../../components/PageFrame";
import { useMedicationApi } from "../../providers/MedicationProvider";

function SearchResultPage() {
  const { searchResults, isSearching } = useMedicationApi();

  return searchResults.content?.length > 0 ? (
    <PageFrame title="Medicamentos" >
      <CardList searchResults={searchResults} isSearching={isSearching} />
    </PageFrame>
  ) : (
    <PageFrame>
      <Container>
        <h3>
          Sua busca não teve resultados. Verifique se o nome do medicamento foi
          digitado corretamente.
        </h3>
      </Container>
    </PageFrame>
  );
}

export default SearchResultPage;
