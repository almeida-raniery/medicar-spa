import { Container } from "react-bootstrap";
import { useMedicationApi } from "../../providers/MedicationProvider";
import Card from "../Card";

function CardList() {
  const { searchResults } = useMedicationApi();

  return (
    <Container>
      <h1>Medicamentos</h1>
      <ul>
        {searchResults.map((medication) => (
            <li key = {medication.idProduto} >
              <Card data={medication} />
            </li>
        ))}
      </ul>
    </Container>
  );
}

export default CardList;
