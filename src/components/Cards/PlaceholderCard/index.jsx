import Container from "react-bootstrap/Container";
import Placeholder from "react-bootstrap/Placeholder"

function PlaceholderCard() {
  return (
    <Container>
      <Placeholder animation="wave">
        <Placeholder className="w-50 my-3" size="lg"/>
      </Placeholder>
      <Placeholder animation="wave">
        <Placeholder className="w-75 my-2" />
      </Placeholder>
    </Container>
  )
}

export default PlaceholderCard