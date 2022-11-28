import Container from "react-bootstrap/Container";
import DownloadButton from "../../Buttons/DownloadButton";
import InfoCard from "../../Cards/InfoCard";

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
        data-testid="infoCard-1"
        title="Classe Terapêutica:"
        info={classesTerapeuticas[0]}
      />
      <InfoCard title="Princípio Ativo:" info={principioAtivo} />
      <InfoCard
        data-testid="infoCard-2"
        title="Medicamento de Referência:"
        info={medicamentoReferencia}
      />
      <InfoCard
        data-testid="infoCard-3"
        title="Categoria Regulatória:"
        info={categoriaRegulatoria}
      />
      <InfoCard
        data-testid="infoCard-4"
        title="Nome do Fabricante:"
        info={empresa.razaoSocial}
      />
      <Container className="text-center">
        <DownloadButton data-testid="download-btn" patientId={codigoBulaPaciente} />
      </Container>
    </Container>
  );
}

export default InfoPanel;
