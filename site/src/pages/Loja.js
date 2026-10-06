import CardProduto from "../components/CardProduto";
import "./Loja.css";

export const produtos = [
	{
		id: "dawntrail-soundtrack",
		nome: "DAWNTRAIL Soundtrack",
		tipo: "Trilha sonora · CD",
		preco: "$44.99",
		imagem: "/produtos/dawntrail-soundtrack.jpg",
	},
	{
		id: "loporrit-plush",
		nome: "Loporrit Plushie",
		tipo: "Pelúcia",
		preco: "$34.99",
		imagem: "/produtos/loporrit-plush.jpg",
	},
	{
		id: "coin-collection",
		nome: "Coin Collection",
		tipo: "Colecionável",
		preco: "$36.99",
		imagem: "/produtos/ffxiv-coin-collection.jpg",
	},
	{
		id: "emet-crystal-keychain",
		nome: "Emet Selch's Crystal",
		tipo: "Acessório · Chaveiro",
		preco: "$14.99",
		imagem: "/produtos/emet-crystal-keychain.jpg",
	},
	{
		id: "forge-ahead-bluray",
		nome: "FORGE AHEAD Arrangement Album",
		tipo: "Trilha sonora · Blu-ray",
		preco: "$44.99",
		imagem: "/produtos/forge-ahead-bluray.jpg",
	},
	{
		id: "emet-selch-figure",
		nome: "Figure - Emet-Selch",
		tipo: "Figura",
		preco: "$84.99",
		imagem: "/produtos/emet-selch-figure.jpg",
	},
];

function Loja() {
	return (
		<div className="pagina-loja">
			<section className="loja-banner">
				<div className="loja-banner-conteudo">

					<h1>Lojinha fake de FINAL FANTASY XIV</h1>
					<span>Uma pequena seleção de produtos oficiais que eu peguei do site da square, esses sao os 6 mais comprados.</span>
				</div>
			</section>
			<div className="loja-conteudo">
				<section className="loja-produtos" id="produtos">
					<div className="loja-secao-cabecalho">
						<div>
							<p className="loja-etiqueta">Coleção oficial</p>
							<h2>Produtos de FINAL FANTASY XIV</h2>
						</div>

					</div>
					<div className="loja-grade">
						{produtos.map((produto) => 
                            <CardProduto produto={produto} key={produto.id} />)}
					</div>
				</section>
				<section className="loja-sobre" id="sobre-loja">
					<p>Uma réplica da loja oficial. So porque a atividade pediu, ELA E DE MENTIRA. NAO FAZ NADA.</p>
				</section>
			</div>
		</div>
	);
}

export default Loja;