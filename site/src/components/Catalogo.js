import "./Catalogo.css";

function Catalogo({ titulo, descricao, itens }) {
  return (
    <section className="catalogo">
      <header className="catalogo-cabecalho">
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </header>
      <div className="catalogo-grade">
        {itens.map((item) => (
          <article className="catalogo-card" key={item.nome}>
            <div className="catalogo-card-cabecalho">
              <img className="catalogo-icone" src={item.icone} alt="" />
              <div>
                <p className="catalogo-tipo">{item.tipo}</p>
                <h2>{item.nome}</h2>
              </div>
            </div>
            <p className="catalogo-descricao">{item.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;