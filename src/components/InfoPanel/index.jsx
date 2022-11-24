import InfoCard from "../InfoCard";

function InfoPanel({
  data: { name, medicationClass, activeIngredient, reference, category, company },
}) {
  return (
    <section>
      <h1>{name}</h1>
      <InfoCard title = "Classe Terapêutica" info = {medicationClass} />
      <InfoCard title = "Princípio Ativo" info = {activeIngredient} />
      <InfoCard title = "Medicamento de Referência" info = {reference} />
      <InfoCard title = "Categoria Regulatória" info = {category} />
      <InfoCard title = "Nome do Fabricante" info = {company} />
    </section>
  );
}

export default InfoPanel;
