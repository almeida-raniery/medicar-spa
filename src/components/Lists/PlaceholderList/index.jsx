import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import PlaceholderCard from "../../Cards/PlaceholderCard";

function PlaceholderList() {
  return (
    <ListGroup>
      {[...Array(4)].map((e, i) => (
        <ListGroupItem className="mb-2 bg-light" key={i}>
          <PlaceholderCard />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default PlaceholderList;
