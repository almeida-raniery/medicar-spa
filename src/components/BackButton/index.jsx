import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      className="btn-secondary col-1 p-1 mx-2"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  );
}

export default BackButton;
