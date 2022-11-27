import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";

function CardListPagination() {
  const navigate = useNavigate();
  const { searchResults, isSearching } = useMedicationApi();

  function onClickNav(page) {
    navigate(`/?nome=${searchResults.medicationName}&pagina=${page}`);
  }

  return (
    <Pagination size="lg" className="d-flex justify-content-center">
      {!searchResults.first && (
        <Pagination.First
          disabled={isSearching}
          onClick={() => onClickNav(1)}
        />
      )}
      {!searchResults.first && (
        <Pagination.Prev
          disabled={isSearching}
          onClick={() => onClickNav(searchResults.number)}
        />
      )}
      {!searchResults.last && (
        <Pagination.Next
          disabled={isSearching}
          onClick={() => onClickNav(searchResults.number + 2)}
        />
      )}
      {!searchResults.last && (
        <Pagination.Last
          disabled={isSearching}
          onClick={() => onClickNav(searchResults.totalPages)}
        />
      )}
    </Pagination>
  );
}

export default CardListPagination;
