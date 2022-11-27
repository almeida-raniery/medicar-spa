import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"

function LoadingMessage() {
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row className="justify-content-center">
        <Spinner className="my-2" />
        <h4>Carregando...</h4>
      </Row>
    </Container>
  )
}

export default LoadingMessage;

