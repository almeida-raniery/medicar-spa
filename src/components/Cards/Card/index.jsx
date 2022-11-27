import { Link } from "react-router-dom";
import Container  from "react-bootstrap/Container";

function Card({ data: { nomeProduto, razaoSocial, numProcesso } }) {
  return (
    <Container className="my-2">
      <Link to={`/medicamento/${numProcesso}`}>
        <h4>{nomeProduto}</h4>
      </Link>

      <p>{razaoSocial}</p>
    </Container>
  );
}

export default Card;
