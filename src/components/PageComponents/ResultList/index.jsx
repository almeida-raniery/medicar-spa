import Container from "react-bootstrap/Container";
import PlaceholderList from "../../Lists/PlaceholderList";
import CardListPagination from "../CardListPagination";
import CardList from "../../Lists/CardList";

function ResultList({ searchResults, isSearching }) {
  return (
    <Container>
      {!isSearching && searchResults?.content ? (
        <CardList content={searchResults.content} />
      ) : (
        <PlaceholderList />
      )}
      <CardListPagination />
    </Container>
  );
}

export default ResultList;
