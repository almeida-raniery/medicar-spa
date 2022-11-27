import { ListGroup, ListGroupItem } from "react-bootstrap";
import PlaceholderCard from "../PlaceholderCard";

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
