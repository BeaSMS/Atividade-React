import Catalogo from "../components/Catalogo";

const jobs = [
    {
        nome: "Paladin",
        icone: "/game-icons/jobs/paladin.png",
        tipo: "Tank",
        descricao: "Defende o grupo com escudo, espada e habilidades de proteção.",
    },
    {
        nome: "White Mage",
        icone: "/game-icons/jobs/whitemage.png",
        tipo: "Healer",
        descricao: "Cura aliados com magia branca e também causa dano com magia sagrada.",
    },
    {
        nome: "Dragoon",
        icone: "/game-icons/jobs/dragoon.png",
        tipo: "DPS corpo a corpo",
        descricao: "Lutador de lança conhecido por saltos e ataques de grande alcance.",
    },
    {
        nome: "Bard",
        icone: "/game-icons/jobs/bard.png",
        tipo: "DPS à distância",
        descricao: "Ataca com arco e usa canções para apoiar os companheiros.",
    },
    {
        nome: "Black Mage",
        icone: "/game-icons/jobs/blackmage.png",
        tipo: "DPS mágico",
        descricao: "Especialista em feitiços elementais de alto impacto.",
    },
    {
        nome: "Scholar",
        icone: "/game-icons/jobs/scholar.png",
        tipo: "Healer",
        descricao: "Combina cura por barreiras com o apoio de uma fada companheira.",
    },
    {
        nome: "Warrior",
        icone: "/game-icons/jobs/warrior.png",
        tipo: "Tank",
        descricao: "Luta com um machado e transforma força bruta em resistência.",
    },
    {
        nome: "Monk",
        icone: "/game-icons/jobs/monk.png",
        tipo: "DPS corpo a corpo",
        descricao: "Combate de perto com golpes rápidos e sequências de artes marciais.",
    },
    {
        nome: "Ninja",
        icone: "/game-icons/jobs/ninja.png",
        tipo: "DPS corpo a corpo",
        descricao: "Usa técnicas de ninjutsu e ataques ágeis para surpreender os inimigos.",
    },
    {
        nome: "Dark Knight",
        icone: "/game-icons/jobs/darkknight.png",
        tipo: "Tank",
        descricao: "Empunha uma grande espada e canaliza poderes sombrios para proteger o grupo.",
    },
    {
        nome: "Astrologian",
        icone: "/game-icons/jobs/astrologian.png",
        tipo: "Healer",
        descricao: "Combina magia astral, cura e cartas que fortalecem os aliados.",
    },
    {
        nome: "Machinist",
        icone: "/game-icons/jobs/machinist.png",
        tipo: "DPS à distância",
        descricao: "Ataca com armas de fogo e ferramentas mecânicas.",
    },
    {
        nome: "Samurai",
        icone: "/game-icons/jobs/samurai.png",
        tipo: "DPS corpo a corpo",
        descricao: "Usa uma katana e prepara golpes poderosos com suas técnicas de Iaijutsu.",
    },
    {
        nome: "Red Mage",
        icone: "/game-icons/jobs/redmage.png",
        tipo: "DPS mágico",
        descricao: "Alterna magia branca e negra antes de avançar para ataques com florete.",
    },
    {
        nome: "Gunbreaker",
        icone: "/game-icons/jobs/gunbreaker.png",
        tipo: "Tank",
        descricao: "Protege o grupo com uma gunblade e combina defesa com combos explosivos.",
    },
    {
        nome: "Dancer",
        icone: "/game-icons/jobs/dancer.png",
        tipo: "DPS à distância",
        descricao: "Ataca com chakrams e apoia um parceiro com passos de dança.",
    },
    {
        nome: "Sage",
        icone: "/game-icons/jobs/sage.png",
        tipo: "Healer",
        descricao: "Usa nouliths para atacar e criar barreiras que protegem os aliados.",
    },
    {
        nome: "Reaper",
        icone: "/game-icons/jobs/reaper.png",
        tipo: "DPS corpo a corpo",
        descricao: "Luta com uma foice e invoca um avatar para ampliar seus ataques.",
    },
    {
        nome: "Viper",
        icone: "/game-icons/jobs/viper.png",
        tipo: "DPS corpo a corpo",
        descricao: "Combina duas lâminas em sequências velozes e ataques de grande alcance.",
    },
    {
        nome: "Pictomancer",
        icone: "/game-icons/jobs/pictomancer.png",
        tipo: "DPS mágico",
        descricao: "Dá vida a pinturas mágicas para atacar e apoiar os companheiros.",
    },
    {
        nome: "Summoner",
        icone: "/game-icons/jobs/summoner.png",
        tipo: "DPS mágico",
        descricao: "Invoca poderes primais e alterna entre diferentes ataques elementais.",
    },
];

function Jobs() {
    return (
        <Catalogo
            titulo="Classes e Jobs"
            descricao="Um pequeno resumo dos classes de combate. Meu favorito e o Bard."
            itens={jobs}
        />
    );
}

export default Jobs;