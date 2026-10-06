import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
return (
<header className="cabecalho">
<Link className="cabecalho-logo" to="/">Light of the Crystal</Link>
<nav className="cabecalho-menu">
<Link to="/">Início</Link>
<Link to="/jobs">Classes e Jobs</Link>
<Link to="/minions">Minions</Link>
<Link to="/mounts">Mounts</Link>
<Link to="/glamours">Glamours</Link>
<Link to="/extra">Sobre o jogo</Link>
<Link to="/loja">Loja</Link>

</nav>
</header>
);
}
export default Header;
