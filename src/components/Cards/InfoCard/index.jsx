import Container from "react-bootstrap/Container";

function InfoCard({title, info}){
  return (
    <Container className="border-bottom mb-2 shadow-sm">
      <h3>{title}</h3>
      <p>{info}</p>
    </Container>
  )
}

export default InfoCard;