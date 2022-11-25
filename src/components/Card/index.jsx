import { Link } from "react-router-dom";

function Card({data: {nomeProduto, razaoSocial, numProcesso}}){
  return (
    <div>
      <Link to={`/medicamento/${numProcesso}`}> <h3>{nomeProduto}</h3> </Link>
      
      <p>{razaoSocial}</p>
    </div>
  )
}

export default Card;