import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";
import LoadingMessage from "../../components/PageComponents/LoadingMessage";
import PageFrame from "../../components/PageComponents/PageFrame";
import InfoPanel from "../../components/PageComponents/Content/InfoPanel";

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
