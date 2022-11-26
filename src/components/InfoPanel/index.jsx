import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";
import DownloadButton from "../DownloadButton";
import InfoCard from "../InfoCard";

function InfoPanel() {
  const { processNumber } = useParams();
  const { getMedicationByProcess } = useMedicationApi();

  const [medicationData, setMedicationData] = useState({});

  useEffect(() => {
    async function getMedication() {
      const medicationData = await getMedicationByProcess(processNumber);
      console.log(medicationData);

      setMedicationData(medicationData);
    }

    getMedication();
  }, []);

  return medicationData.nomeComercial ? (
    <Container className="col-md-6 mt-4">
      <h1 className="mb-0 bg-secondary p-2 shadow text-light">
        {medicationData.nomeComercial}
      </h1>
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
        <DownloadButton patientId={medicationData.codigoBulaPaciente} />
      </Container>
    </Container>
  ) : (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row className="justify-content-center" >
        <Spinner className="my-2"/>
        <h4>Carregando...</h4>
      </Row>
    </Container>
  );
}

export default InfoPanel;
