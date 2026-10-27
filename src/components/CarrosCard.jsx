import bmw from "../assets/bmw.jpg";
import CarrosCard from "../components/CarrosCard";

function Carros() {
  return (
    <CarrosCard
      nome="BMW M4"
      marca="BMW"
      preco={1500}
      imagem={bmw}
    />
  );
}

export default Carros;