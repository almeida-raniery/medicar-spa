import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import InfoPanel from "../../components/InfoPanel";
import PageFrame from "../../components/PageFrame";
import { useMedicationApi } from "../../providers/MedicationProvider";

function MedicationInfoPage() {
  const { processNumber } = useParams();
  const { getMedicationByProcess } = useMedicationApi();
  const [medicationData, setMedicationData] = useState({});

  useEffect(() => {
    async function getMedication() {
      const data = await getMedicationByProcess(processNumber);

      setMedicationData(data);
    }

    getMedication();
  }, []);

  return medicationData.nomeComercial ? (
    <PageFrame title={medicationData.nomeComercial} >
      <InfoPanel data={medicationData} />
    </PageFrame>
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

export default MedicationInfoPage;
