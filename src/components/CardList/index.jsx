import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import CardListPagination from "../CardListPagination";
import PlaceholderCard from "../PlaceholderCard";
import PlaceholderList from "../PlaceholderList";
import ResultsList from "../ResultsList";

function CardList({ searchResults, isSearching }) {
  return (
    <Container>
      {!isSearching && searchResults.content ? (
        <ResultsList content={searchResults.content} />
      ) : (
        <PlaceholderList />
      )}
      <CardListPagination />
    </Container>
  );
}

export default CardList;
