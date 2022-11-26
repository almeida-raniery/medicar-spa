import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useMedicationApi } from "../../providers/MedicationProvider";
import Card from "../Card";
import CardListPagination from "../CardListPagination";
import PlaceholderCard from "../PlaceholderCard";

function CardList() {
  const { searchResults, isSearching } = useMedicationApi();

  return (
    <Container className="col-lg-6 mt-4">
      <h1 className="mb-0 bg-secondary p-2 shadow text-light">Medicamentos:</h1>
      <Container
        className="mb-3 border border-3 border-top-0 px-1 pt-3 border-secondary"
        style={{ textAlign: "left" }}
      >
        {!isSearching && searchResults.content ? (
          <ListGroup>
            {searchResults.content.map((medication) => (
              <ListGroupItem
                className="mb-2 bg-light"
                key={medication.idProduto}
              >
                <Card data={medication} />
              </ListGroupItem>
            ))}
          </ListGroup>
        ) : (
          <ListGroup>
            {[...Array(4)].map((e, i) => (
              <ListGroupItem className="mb-2 bg-light" key={i}>
                <PlaceholderCard />
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Container>
      <CardListPagination />
    </Container>
  );
}

export default CardList;
