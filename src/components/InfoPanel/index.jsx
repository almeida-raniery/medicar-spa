import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";
import DownloadButton from "../DownloadButton";
import InfoCard from "../InfoCard";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InfoPanel() {
  const { processNumber } = useParams();
  const { getMedicationByProcess } = useMedicationApi();
  
  const navigate = useNavigate();
  const [medicationData, setMedicationData] = useState({});

  useEffect(() => {
    async function getMedication() {
      const medicationData = await getMedicationByProcess(processNumber);

      setMedicationData(medicationData);
    }

    getMedication();
  }, []);

  return medicationData.nomeComercial ? (
    <Container className="col-md-6 mt-4">
      <Container className="mb-0 bg-secondary p-2 shadow text-light">
        <Row className="g-0 align-items-center justify-content-start">
          <Button onClick={()=>navigate("/")} className="btn-secondary col-1 p-1">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <h1 className="col-9">{medicationData.nomeComercial}</h1>
        </Row>
      </Container>
      <Container
        className="mb-3 border border-3 border-top-0 px-1 pt-3 border-secondary"
        style={{ textAlign: "left" }}
      >
        <InfoCard
          title="Classe Terapêutica:"
          info={medicationData.classesTerapeuticas[0]}
        />
        <InfoCard
          title="Princípio Ativo:"
          info={medicationData.principioAtivo}
        />
        <InfoCard
          title="Medicamento de Referência:"
          info={medicationData.medicamentoReferencia}
        />
        <InfoCard
          title="Categoria Regulatória:"
          info={medicationData.categoriaRegulatoria}
        />
        <InfoCard
          title="Nome do Fabricante:"
          info={medicationData.empresa.razaoSocial}
        />
        <Container className="text-center">
          <DownloadButton patientId={medicationData.codigoBulaPaciente} />
        </Container>
      </Container>
    </Container>
  ) : (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row className="justify-content-center">
        <Spinner className="my-2" />
        <h4>Carregando...</h4>
      </Row>
    </Container>
  );
}

export default InfoPanel;
