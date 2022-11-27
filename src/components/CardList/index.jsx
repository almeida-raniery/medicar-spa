import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useMedicationApi } from "../../providers/MedicationProvider";
import Card from "../Card";
import CardListPagination from "../CardListPagination";
import PlaceholderCard from "../PlaceholderCard";

function CardList({ searchResults, isSearching }) {
  return (
    <Container>
      {!isSearching && searchResults.content ? (
        <ListGroup>
          {searchResults.content.map((medication) => (
            <ListGroupItem className="mb-2 bg-light" key={medication.idProduto}>
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
      <CardListPagination />
    </Container>
  );
}

export default CardList;
