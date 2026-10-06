import Banner from "../components/Banner";
import "./Home.css";

function Home() {
	return (
		<div className="pagina-home" id="inicio">
			<Banner />
			<div className="home-conteudo">
				<section className="home-evercold">
					<h2 className="home-evercold-titulo">PROXIMA EXPANSÃO VAI SAIR ANO QUE VEM!</h2>
					<img src="/Evercold.png" alt="Final Fantasy XIV: Evercold, lançamento em janeiro de 2027" />
				</section>
				<section className="home-copypasta">
					<p>" Have you heard of the critically acclaimed MMORPG FFXIV? With an expanded free trial
                         which you can play through the entirety of A Realm Reborn, Heavensward, Stormblood,
                          and the award-winning Shadowbringers expansion up to level 80 for free with no 
                          restrictions on playtime?"</p>
				</section>
			</div>
		</div>
	);
}

export default Home;