import "./Glamours.css";

const glamours = [
    {
        nome: "Nirvana",
        autor: "Nya Nya «Faerie»",
        loves: "3,903",
        imagem: "https://glamours.eorzeacollection.com/28906/cover-0-1775289038.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/28906/nirvana",
    },
    {
        nome: "Goelia - The Lightwarden",
        autor: "Nightingale Salvance «Asura»",
        loves: "3,490",
        imagem: "https://glamours.eorzeacollection.com/24767/neo-the-lightwarden-1-1602390886.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/24767/goelia-the-lightwarden",
    },
    {
        nome: "Shadow Mage",
        autor: "Liviana Erdene «Midgardsormr»",
        loves: "3,402",
        imagem: "https://glamours.eorzeacollection.com/43099/shadow-mage-0-1593203515.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/43099/shadow-mage",
    },
    {
        nome: "Cherries Heal All Wounds",
        autor: "Lohia Aihol «Cerberus»",
        loves: "2,820",
        imagem: "https://glamours.eorzeacollection.com/34521/cherries-heal-all-wounds-1-1645546698.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/34521/cherries-heal-all-wounds",
    },
    {
        nome: "Goelia - White Fantasy",
        autor: "Nightingale Salvance «Asura»",
        loves: "2,799",
        imagem: "https://glamours.eorzeacollection.com/23284/neo---white-fantasy-0-1569475563.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/23284/goelia-white-fantasy",
    },
    {
        nome: "Goelia - Rabies Virus",
        autor: "Nightingale Salvance «Asura»",
        loves: "2,685",
        imagem: "https://glamours.eorzeacollection.com/29542/neo-rabies-virus-0-1578407486.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/29542/goelia-rabies-virus",
    },
    {
        nome: "Dancing Princess",
        autor: "Lohia Aihol «Cerberus»",
        loves: "2,528",
        imagem: "https://glamours.eorzeacollection.com/36275/dancing-princess-1-1645542542.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/36275/dancing-princess",
    },
    {
        nome: "Battle Angel",
        autor: "Lohia Aihol «Cerberus»",
        loves: "2,456",
        imagem: "https://glamours.eorzeacollection.com/44298/battle-angel-1-1630442093.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/44298/battle-angel",
    },
    {
        nome: "Wanna Fight ?",
        autor: "Xiny Mizuhiki «Louisoix»",
        loves: "2,453",
        imagem: "https://glamours.eorzeacollection.com/54807/wanna-fight--1-1608201150.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/54807/wanna-fight-",
    },
    {
        nome: "Dust of Time",
        autor: "Namii Mau «Balmung»",
        loves: "2,419",
        imagem: "https://glamours.eorzeacollection.com/34251/dust-of-time-1-1584602756.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/34251/dust-of-time",
    },
    {
        nome: "Cherry Blossom Captain",
        autor: "Cherry Bonbon «Midgardsormr»",
        loves: "2,398",
        imagem: "https://glamours.eorzeacollection.com/30221/cherry-blossom-captain-1-1606801961.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/30221/cherry-blossom-captain",
    },
    {
        nome: "Fiery Samurai",
        autor: "Bright Dancer «Omega»",
        loves: "2,397",
        imagem: "https://glamours.eorzeacollection.com/13512/fiery-samurai.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/13512/fiery-samurai",
    },
    {
        nome: "Abyss",
        autor: "Para Noia «Phantom»",
        loves: "2,380",
        imagem: "https://glamours.eorzeacollection.com/54089/abyss-0-1600314211.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/54089/abyss",
    },
    {
        nome: "Crepuscule",
        autor: "Lohia Aihol «Cerberus»",
        loves: "2,370",
        imagem: "https://glamours.eorzeacollection.com/69976/crepuscule-0-1610793327.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/69976/crepuscule",
    },
    {
        nome: "Goelia - Illusionist",
        autor: "Nightingale Salvance «Asura»",
        loves: "2,341",
        imagem: "https://glamours.eorzeacollection.com/30781/neo-illusionist-1-1582582424.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/30781/goelia-illusionist",
    },
    {
        nome: "Boyish Crafter",
        autor: "Bright Dancer «Omega»",
        loves: "2,337",
        imagem: "https://glamours.eorzeacollection.com/13477/boyish-crafter.png",
        url: "https://ffxiv.eorzeacollection.com/glamour/13477/boyish-crafter",
    },
];

function Glamours() {
    return (
        <section className="glamours">
            <header className="glamours-cabecalho">
                <h1>Glamours favoritos da comunidade</h1>
                <p>
                    Glamour é o sistema de aparência de FFXIV: ele permite mudar o visual do equipamento sem trocar seus atributos. 
                    Esses looks estavam entre os mais curtidos pela comunidade quando eu visitei o site do Eorzea Collection.
                </p>
            </header>
            <div className="glamours-grade">
                {glamours.map((glamour) => (
                    <article className="glamour-card" key={glamour.url}>
                        <a className="glamour-imagem-link" href={glamour.url} target="_blank" rel="noreferrer">
                            <img className="glamour-imagem" src={glamour.imagem} alt={`Glamour ${glamour.nome}`} loading="lazy" />
                        </a>
                        <div className="glamour-detalhes">
                            <h2><a href={glamour.url} target="_blank" rel="noreferrer">{glamour.nome}</a></h2>
                            <p className="glamour-autor">Por {glamour.autor}</p>
                            <p className="glamour-loves"><span aria-hidden="true">♥</span> {glamour.loves} loves</p>
                        </div>
                    </article>
                ))}
            </div>
            <p className="glamours-fonte">
                Dados consultados no <a href="https://ffxiv.eorzeacollection.com/glamours?page1" target="_blank" rel="noreferrer">Eorzea Collection</a>
            </p>
        </section>
    );
}

export default Glamours;
