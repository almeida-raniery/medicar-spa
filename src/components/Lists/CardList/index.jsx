import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Card from "../../Cards/Card";

function CardList({content}) {
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

export default CardList;
