import "./CardProduto.css";
import { Link } from "react-router-dom";

function CardProduto({ produto }) {
  return (
    <article className="card-produto">
      <div className="card-produto-imagem">
        <img src={produto.imagem} alt={produto.nome} loading="lazy" />
      </div>
      <div className="card-produto-conteudo">
        <p className="card-produto-tipo">{produto.tipo}</p>
        <h3>{produto.nome}</h3>
        <div className="card-produto-rodape">
          <p className="card-produto-preco">{produto.preco}</p>
          <Link className="card-produto-comprar" to={`/checkout/${produto.id}`}>Comprar</Link>
        </div>
      </div>
    </article>
  );
}

export default CardProduto;