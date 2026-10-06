import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { produtos } from "./Loja";
import "./Checkout.css";

function Checkout() {

	const { produtoId } = useParams();
	const produto = produtos.find((item) => item.id === produtoId);
	const [quantidade, setQuantidade] = useState(1);
	const [confirmado, setConfirmado] = useState(false);
	const [metodo, setMetodo] = useState("Cartão");


	const preco = Number(produto.preco.replace("$", ""));
	const total = (preco * quantidade)
    
	function enviarPedido(event) {
		event.preventDefault();
		setConfirmado(true);
	}

	if (confirmado) {
		return (
			<section className="checkout checkout-confirmacao">
				<div className="checkout-confirmacao-icone" aria-hidden="true">✓</div>

				<h1>Pedido confirmado!</h1>

				<p>Seu pedido de {quantidade} × {produto.nome} foi recebido. Obrigada pela compra!</p>
				<Link className="checkout-botao-secundario" to="/loja">Voltar à loja</Link>
			</section>
		);
	}

	return (
		<section className="checkout">
			<header className="checkout-cabecalho">
				<h1>Finalizar compra</h1>
				<p>Informe os dados para entrega e escolha a forma de pagamento.</p>
			</header>
			<div className="checkout-layout">
				<form className="checkout-formulario" onSubmit={enviarPedido} noValidate>
					<section className="checkout-secao">
						<h2>Contato</h2>
						<label>Nome completo<input name="nome" autoComplete="name" placeholder="Seu nome" /></label>
						<label>E-mail<input name="email" autoComplete="email" placeholder="nome@provedor.com" /></label>
					</section>
					<section className="checkout-secao">
						<h2>Endereço de entrega</h2>
						<label>Endereço<input name="endereco" autoComplete="street-address" placeholder="Rua das Estrelas, 14" /></label>
						<div className="checkout-campos-linha">
							<label>Cidade<input name="cidade" autoComplete="address-level2" placeholder="Gridania" /></label>
							<label>CEP<input name="cep" autoComplete="postal-code" placeholder="00000" /></label>
						</div>
					</section>
					<section className="checkout-secao">
						<h2>Pagamento</h2>
						<label>Forma de pagamento
							<select value={metodo} onChange={(event) => setMetodo(event.target.value)}>
								<option>Cartão</option>
								<option>Pix</option>
								<option>Boleto</option>
							</select>
						</label>
					</section>
					<button className="checkout-botao-principal" type="submit">Confirmar pedido</button>
				</form>
				<aside className="checkout-resumo">
					<h2>Resumo do pedido</h2>
					<div className="checkout-produto">
						<img src={produto.imagem} alt="" />
						<div>
							<h3>{produto.nome}</h3>
							<p>{produto.tipo}</p>
							<strong>{produto.preco}</strong>
						</div>
					</div>
					<div className="checkout-quantidade">
						<span>Quantidade</span>
						<div>
							<button type="button" aria-label="Diminuir quantidade" onClick={() => setQuantidade(Math.max(1, quantidade - 1))}>−</button>
							<output>{quantidade}</output>
							<button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantidade(Math.min(10, quantidade + 1))}>+</button>
						</div>
					</div>
					<div className="checkout-total"><span>Total</span><strong>{total}</strong></div>
					<Link className="checkout-voltar" to="/loja">Continuar escolhendo</Link>
				</aside>
			</div>
		</section>
	);
}

export default Checkout;