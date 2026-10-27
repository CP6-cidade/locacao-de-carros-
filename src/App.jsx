import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./pages/Contato";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Carros from "./pages/Carros";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;