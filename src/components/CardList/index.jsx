import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useMedicationApi } from "../../providers/MedicationProvider";
import Card from "../Card";
import CardListPagination from "../CardListPagination";

function CardList() {
  const { searchResults } = useMedicationApi();

  return (
    <Container className="col-lg-6 mt-4">
      <h1 className="mb-0 bg-secondary p-2 shadow text-light">Medicamentos:</h1>
      <Container
        className="my-3 border p-0 border-primary"
        style={{ "text-align": "left" }}
      >
        <ListGroup>
          {searchResults.content.map((medication) => (
            <ListGroupItem className="mb-2 bg-light" key={medication.idProduto}>
              <Card data={medication} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
      <CardListPagination />
    </Container>
  );
}

export default CardList;
