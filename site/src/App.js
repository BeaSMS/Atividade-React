import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Minions from "./pages/Minions";
import Mounts from "./pages/Mounts";
import Glamours from "./pages/Glamours";
import Extra from "./pages/Extra";
import Loja from "./pages/Loja";
import Checkout from "./pages/Checkout";

function App() {
return (
<BrowserRouter>
<Header />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/mounts" element={<Mounts />} />
<Route path="/minions" element={<Minions />} />
<Route path="/glamours" element={<Glamours />} />
<Route path="/extra" element={<Extra />} />
<Route path="/loja" element={<Loja />} />
<Route path="/checkout/:produtoId" element={<Checkout />} />

</Routes>
</main>
<Footer />
</BrowserRouter>
);
}
export default App;