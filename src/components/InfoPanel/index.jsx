import { useEffect, useState } from "react";
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

  return medicationData.codigoProduto ? (
    <section>
      <h1>{medicationData.nomeComercial}</h1>
      <InfoCard
        title="Classe Terapêutica"
        info={medicationData.classesTerapeuticas[0]}
      />
      <InfoCard title="Princípio Ativo" info={medicationData.principioAtivo} />
      <InfoCard
        title="Medicamento de Referência"
        info={medicationData.medicamentoReferencia}
      />
      <InfoCard
        title="Categoria Regulatória"
        info={medicationData.categoriaRegulatoria}
      />
      <InfoCard
        title="Nome do Fabricante"
        info={medicationData.empresa.razaoSocial}
      />
      <DownloadButton patientId={medicationData.codigoBulaPaciente} />
    </section>
  ) : (
    <p>Carregando...</p>
  );
}

export default InfoPanel;
