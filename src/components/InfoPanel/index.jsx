import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useMedicationApi } from "../../providers/MedicationProvider";
import DownloadButton from "../DownloadButton";
import InfoCard from "../InfoCard";

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
