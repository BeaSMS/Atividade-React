import "./Minions.css";

const mounts = [
    {
        nome: "Rocket Punch",
        fonte: "PvP Series 12, nível 25",
        porcentagem: "0.1%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004348_hr1.tex",
        url: "https://ffxivcollect.com/mounts/432",
    },
    {
        nome: "Turali Snowman",
        fonte: "Worqor and Peace V",
        porcentagem: "0.1%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004343_hr1.tex",
        url: "https://ffxivcollect.com/mounts/428",
    },
    {
        nome: "High Mobility Vacuum Suit",
        fonte: "Out of This World",
        porcentagem: "0.2%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004316_hr1.tex",
        url: "https://ffxivcollect.com/mounts/385",
    },
    {
        nome: "Ullr",
        fonte: "Dawnbright Hunter",
        porcentagem: "0.2%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004289_hr1.tex",
        url: "https://ffxivcollect.com/mounts/351",
    },
    {
        nome: "Wings of Legacy",
        fonte: "The Wing Spirit Cometh",
        porcentagem: "0.3%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004346_hr1.tex",
        url: "https://ffxivcollect.com/mounts/420",
    },
    {
        nome: "Genie of the Lamp",
        fonte: "Another Merchant's Tale; Trisassant, Old Sharlayan, por 100 Corvosi Manuscripts",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004333_hr1.tex",
        url: "https://ffxivcollect.com/mounts/412",
    },
    {
        nome: "His Royal Headness on Parade",
        fonte: "Online Store",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004313_hr1.tex",
        url: "https://ffxivcollect.com/mounts/388",
    },
    {
        nome: "Triceratops",
        fonte: "Nuts for Nutsy",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004150_hr1.tex",
        url: "https://ffxivcollect.com/mounts/190",
    },
    {
        nome: "Victor",
        fonte: "Endgame Hunter",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004220_hr1.tex",
        url: "https://ffxivcollect.com/mounts/267",
    },
    {
        nome: "Wings of Nihility",
        fonte: "The Unmaking (Extreme)",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004356_hr1.tex",
        url: "https://ffxivcollect.com/mounts/444",
    },
    {
        nome: "Astrope",
        fonte: "I Hope Mentor Will Notice Me VI",
        porcentagem: "0.5%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004061_hr1.tex",
        url: "https://ffxivcollect.com/mounts/83",
    },
    {
        nome: "Hovering Hot Pot",
        fonte: "Online Store",
        porcentagem: "0.5%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004300_hr1.tex",
        url: "https://ffxivcollect.com/mounts/362",
    },
    {
        nome: "Pilgrim's Protector",
        fonte: "99 First Light Relics; Pilgrim's Traverse - Sack of First Light",
        porcentagem: "0.5%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004317_hr1.tex",
        url: "https://ffxivcollect.com/mounts/379",
    },
    {
        nome: "Alexandrian Axe Beak",
        fonte: "600 Faux Leaves",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004297_hr1.tex",
        url: "https://ffxivcollect.com/mounts/359",
    },
    {
        nome: "Cu Sith",
        fonte: "Bonds Unbroken",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004349_hr1.tex",
        url: "https://ffxivcollect.com/mounts/434",
    },
    {
        nome: "Forgiven Mimicry",
        fonte: "99 First Light Relics; Pilgrim's Traverse - Sack of First Light",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004319_hr1.tex",
        url: "https://ffxivcollect.com/mounts/395",
    },
];

function Mounts() {
    return (
        <section className="minions">
            <header className="minions-cabecalho">
                <h1>Mounts</h1>
                <p>
                    Uma seleção das montarias mais raras de acordo com o FFXIV Collect. 
                </p>
            </header>
            <div className="minions-grade">
                {mounts.map((mount) => (
                    <article className="minion-card" key={mount.url}>
                        <a className="minion-icone-link" href={mount.url} target="_blank" rel="noreferrer">
                            <img className="minion-icone" src={mount.imagem} alt={mount.nome} loading="lazy" />
                        </a>
                        <div className="minion-detalhes">
                            <div className="minion-titulo-linha">
                                <h2><a href={mount.url} target="_blank" rel="noreferrer">{mount.nome}</a></h2>
                                <span className="minion-taxa">{mount.porcentagem}</span>
                            </div>
                            <p>{mount.fonte}</p>
                            <a className="minion-origem" href={mount.url} target="_blank" rel="noreferrer">Ver no FFXIV Collect</a>
                        </div>
                    </article>
                ))}
            </div>
            <p className="minions-fonte">
                Taxas e fontes consultadas no <a href="https://ffxivcollect.com/mounts" target="_blank" rel="noreferrer">FFXIV Collect</a>
            </p>
        </section>
    );
}

export default Mounts;