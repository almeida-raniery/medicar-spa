import Container from "react-bootstrap/Container";
<<<<<<<< HEAD:src/components/PageComponents/Content/InfoPanel/index.jsx
import DownloadButton from "../../../Buttons/DownloadButton";
import InfoCard from "../../../Cards/InfoCard";

========
import DownloadButton from "../../Buttons/DownloadButton";
import InfoCard from "../../Cards/InfoCard";
>>>>>>>> 7377b9b72d8a79cc07a6e5c084733bfbd797df8b:src/components/PageComponents/InfoPanel/index.jsx

function InfoPanel({
  data: {
    classesTerapeuticas,
    principioAtivo,
    medicamentoReferencia,
    categoriaRegulatoria,
    empresa,
    codigoBulaPaciente,
  },
}) {
  return (
    <Container>
      <InfoCard
        title="Classe Terapêutica:"
        info={classesTerapeuticas[0]}
      />
      <InfoCard title="Princípio Ativo:" info={principioAtivo} />
      <InfoCard
        title="Medicamento de Referência:"
        info={medicamentoReferencia}
      />
      <InfoCard
        title="Categoria Regulatória:"
        info={categoriaRegulatoria}
      />
      <InfoCard
        title="Nome do Fabricante:"
        info={empresa.razaoSocial}
      />
      <Container className="text-center">
        <DownloadButton patientId={codigoBulaPaciente} />
      </Container>
    </Container>
  );
}

export default InfoPanel;
