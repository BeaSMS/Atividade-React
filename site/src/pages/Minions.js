import "./Minions.css";

const minions = [
    {
        nome: "Wind-up Yuffie",
        fonte: "Online Store",
        porcentagem: "0.2%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004974_hr1.tex",
        url: "https://ffxivcollect.com/minions/573",
    },
    {
        nome: "Laudouble",
        fonte: "Kornago Merchant, Bentbranch Meadows. Requer a conquista Crucible Reforged II.",
        porcentagem: "0.3%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004989_hr1.tex",
        url: "https://ffxivcollect.com/minions/588",
    },
    {
        nome: "Little Red Viking",
        fonte: "PvP Series 12, nível 15",
        porcentagem: "0.3%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004982_hr1.tex",
        url: "https://ffxivcollect.com/minions/581",
    },
    {
        nome: "Wind-up Zero",
        fonte: "Código incluído na trilha sonora original de Dawntrail",
        porcentagem: "0.3%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004926_hr1.tex",
        url: "https://ffxivcollect.com/minions/526",
    },
    {
        nome: "Hydaelyn Idol",
        fonte: "Código incluído na trilha sonora original de Growing Light",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004901_hr1.tex",
        url: "https://ffxivcollect.com/minions/501",
    },
    {
        nome: "Shalloweye",
        fonte: "A Load of Verminion II",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004563_hr1.tex",
        url: "https://ffxivcollect.com/minions/163",
    },
    {
        nome: "Wind-up Dalamud",
        fonte: "Código incluído na trilha sonora Before Meteor",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004447_hr1.tex",
        url: "https://ffxivcollect.com/minions/55",
    },
    {
        nome: "Wind-up Erenville",
        fonte: "Código incluído no artbook The Art of Succession -Relics of Heritage-",
        porcentagem: "0.4%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004927_hr1.tex",
        url: "https://ffxivcollect.com/minions/527",
    },
    {
        nome: "Rroneek Calf",
        fonte: "400 Faux Leaves",
        porcentagem: "0.5%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004961_hr1.tex",
        url: "https://ffxivcollect.com/minions/558",
    },
    {
        nome: "Soothing Sea-beast",
        fonte: "Trisassant, Old Sharlayan. Custa 12 Corvosi Brass.",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004980_hr1.tex",
        url: "https://ffxivcollect.com/minions/578",
    },
    {
        nome: "Spoony Bard",
        fonte: "Código incluído na trilha sonora original de Heavensward",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004581_hr1.tex",
        url: "https://ffxivcollect.com/minions/182",
    },
    {
        nome: "Tiny Omniscient",
        fonte: "Expedition Antiquarian, North Horn. Custa 10 Arcane Amulets.",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004986_hr1.tex",
        url: "https://ffxivcollect.com/minions/585",
    },
    {
        nome: "Wisp of Darkness",
        fonte: "The Cloud of Darkness (Chaotic)",
        porcentagem: "0.6%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004937_hr1.tex",
        url: "https://ffxivcollect.com/minions/537",
    },
    {
        nome: "Kydonia Strolls",
        fonte: "400 Faux Leaves",
        porcentagem: "0.7%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004895_hr1.tex",
        url: "https://ffxivcollect.com/minions/495",
    },
    {
        nome: "Tin Soldier S3",
        fonte: "400 Faux Leaves",
        porcentagem: "0.7%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004935_hr1.tex",
        url: "https://ffxivcollect.com/minions/535",
    },
    {
        nome: "Wind-up Bahamut",
        fonte: "Código incluído na trilha sonora original de A Realm Reborn",
        porcentagem: "0.7%",
        imagem: "https://v2.xivapi.com/api/asset?format=webp&path=ui%2Ficon%2F004000%2F004469_hr1.tex",
        url: "https://ffxivcollect.com/minions/78",
    },
];

function Minions() {
    return (
        <section className="minions">
            <header className="minions-cabecalho">
                <h1>Minions mais raros</h1>
                <p>
                    Uma seleção dos minions mais raros de acordo com o FFXIV Collect.
                </p>
            </header>
            <div className="minions-grade">
                {minions.map((minion) => (
                    <article className="minion-card" key={minion.url}>
                        <a className="minion-icone-link" href={minion.url} target="_blank" rel="noreferrer">
                            <img className="minion-icone" src={minion.imagem} alt={minion.nome} loading="lazy" />
                        </a>
                        <div className="minion-detalhes">
                            <div className="minion-titulo-linha">
                                <h2><a href={minion.url} target="_blank" rel="noreferrer">{minion.nome}</a></h2>
                                <span className="minion-taxa">{minion.porcentagem}</span>
                            </div>
                            <p>{minion.fonte}</p>
                            <a className="minion-origem" href={minion.url} target="_blank" rel="noreferrer">Ver no FFXIV Collect</a>
                        </div>
                    </article>
                ))}
            </div>
            <p className="minions-fonte">
                Taxas e fontes consultadas no <a href="https://ffxivcollect.com/minions" target="_blank" rel="noreferrer">FFXIV Collect</a>. Os percentuais podem mudar conforme os personagens cadastrados.
            </p>
        </section>
    );
}

export default Minions;
