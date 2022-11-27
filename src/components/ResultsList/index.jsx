import { ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "../Card";

function ResultsList({content}) {
  return (
    <ListGroup>
      {content.map((medication) => (
        <ListGroupItem className="mb-2 bg-light" key={medication.idProduto}>
          <Card data={medication} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default ResultsList;
