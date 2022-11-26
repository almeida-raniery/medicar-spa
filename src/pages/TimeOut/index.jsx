import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "react-bootstrap";

function TimeOutPage() {
  return (
    <Container
      className="d-flex flex-column justify-content-center col-md-4"
      style={{ height: "100vh" }}
    >
      <Row>
        <FontAwesomeIcon
          className="display-5 text-warning"
          icon={faTriangleExclamation}
        />
        <h2 className="text-danger">Ops, Aconteceu um erro!</h2>
        <h4>
          A aplicação demorou para responder, Por favor recarregue a página e
          tente novamente.
        </h4>
      </Row>
    </Container>
  );
}

export default TimeOutPage;
