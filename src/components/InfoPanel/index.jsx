import InfoCard from "../InfoCard";

function InfoPanel({
  data: { name, activeIngredient, reference, category, company },
}) {
  return (
    <section>
      <InfoCard title = "Nome do Produto" info = {name} />
      <InfoCard title = "Princípio Ativo" info = {activeIngredient} />
      <InfoCard title = "Medicamento de Referência" info = {reference} />
      <InfoCard title = "Categoria Regulatória" info = {category} />
      <InfoCard title = "Nome do Fabricante" info = {company} />
    </section>
  );
}

export default InfoPanel;
