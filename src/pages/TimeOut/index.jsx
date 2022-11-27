import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";

function TimeOutPage() {
  const { isTimeOut } = useMedicationApi();
  const navigate = useNavigate();

  useEffect(()=>{
    if (!isTimeOut) {
      navigate(-1, {
        replace:true
      })
    }
  },[])

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
