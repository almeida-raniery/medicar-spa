import Container from "react-bootstrap/Container";
import DownloadButton from "../../../Buttons/DownloadButton";
import InfoCard from "../../../Cards/InfoCard";

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
    <Container data-testid="info-panel">
      <InfoCard title="Classe Terapêutica:" info={classesTerapeuticas[0]} />
      <InfoCard title="Princípio Ativo:" info={principioAtivo} />
      <InfoCard
        title="Medicamento de Referência:"
        info={medicamentoReferencia}
      />
      <InfoCard title="Categoria Regulatória:" info={categoriaRegulatoria} />
      <InfoCard title="Nome do Fabricante:" info={empresa.razaoSocial} />
      <Container className="text-center">
        <DownloadButton
          data-testid="codigoBulaPaciente"
          patientId={codigoBulaPaciente}
        />
      </Container>
    </Container>
  );
}

export default InfoPanel;
