function Card({data: {name, company}}){
  return (
    <div>
      <h3>{name}</h3>
      <p>{company}</p>
    </div>
  )
}

export default Card;