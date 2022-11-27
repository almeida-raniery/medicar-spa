import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import InfoPanel from "../../components/InfoPanel";
import LoadingMessage from "../../components/LoadingMessage";
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
    <LoadingMessage />
  );
}

export default MedicationInfoPage;
