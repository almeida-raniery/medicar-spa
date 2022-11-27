import { Container, Row } from "react-bootstrap";
import BackButton from "../BackButton";

function PageHeader({ title }) {
  return (
    <Container className="mb-0 bg-secondary p-2 shadow text-light">
      <Row className="g-0 align-items-center justify-content-start">
        <BackButton />
        <h1 className="col-9 text-start">{title}</h1>
      </Row>
    </Container>
  );
}

export default PageHeader;
