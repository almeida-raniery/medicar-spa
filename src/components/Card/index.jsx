function Card({data: {nomeProduto, razaoSocial}}){
  return (
    <div>
      <h3>{nomeProduto}</h3>
      <p>{razaoSocial}</p>
    </div>
  )
}

export default Card;