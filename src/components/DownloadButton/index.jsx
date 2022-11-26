import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

function DownloadButton({ patientId }) {
  return (
      <Button className="btn-light border border-primary text-primary py-3 px-0 my-4 ml-2">
        <a
          className="h4 p-3"
          style={{ textDecoration: "none" }}
          href={`https://bula.vercel.app/pdf?id=${patientId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bula
          <FontAwesomeIcon className="mx-2" icon={faCloudArrowDown} />
        </a>
      </Button>
  );
}

export default DownloadButton;
