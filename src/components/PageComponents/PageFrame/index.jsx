import Container from "react-bootstrap/Container";
import PageHeader from "../PageHeader";

function PageFrame({ children, title }) {
  return (
    <Container className="col-md-6 col-lg-8 mt-4">
      <PageHeader title={title} />
      <Container className="mb-3 border border-3 border-top-0 px-1 pt-3 border-secondary text-start">
        {children}
      </Container>
    </Container>
  );
}

export default PageFrame;
