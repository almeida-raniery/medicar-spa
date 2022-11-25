import Pagination from "react-bootstrap/Pagination";
import { useMedicationApi } from "../../providers/MedicationProvider";

function CardListPagination() {
  const { searchResults, getMedicationByName } = useMedicationApi();

  function onClickNav(page){
    getMedicationByName(searchResults.medicationName, page)
  }

  return (
    <Pagination size="lg">
      {console.log(searchResults)}
      {!searchResults.first && <Pagination.First onClick={()=>onClickNav(1)}/>}
      {!searchResults.first && <Pagination.Prev onClick={()=>onClickNav(searchResults.number - 2)}/>}
      {!searchResults.last && <Pagination.Next onClick={()=>onClickNav(searchResults.number + 2)}/>}
      {!searchResults.last && <Pagination.Last onClick={()=>onClickNav(searchResults.totalPages)}/>}
    </Pagination>
  );
}

export default CardListPagination;
