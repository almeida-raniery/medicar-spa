import Card from "../Card";

function CardList({ data }) {
  return (
    <section>
      <h1>Medicamentos</h1>
      <ul>
        {data.map((medication) => (
          <li>
            <Card data={medication} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
