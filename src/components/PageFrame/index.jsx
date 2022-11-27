import { Button, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function PageFrame({ children, title }) {
  const navigate = useNavigate();

  return (<Container className="col-md-6 col-lg-8 mt-4">
    <Container className="mb-0 bg-secondary p-2 shadow text-light">
      <Row className="g-0 align-items-center justify-content-start">
        <Button
          onClick={() => navigate(-1)}
          className="btn-secondary col-1 p-1"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <h1 className="col-9 text-start">{title}</h1>
      </Row>
    </Container>
    <Container
      className="mb-3 border border-3 border-top-0 px-1 pt-3 border-secondary text-start"
    >
      {children}
    </Container>
  </Container>);
}

export default PageFrame;
