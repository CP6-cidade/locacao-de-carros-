import CarrosCard from "../components/CarrosCard";

import bmw from "../assets/bmw m4.jpeg";
import ferrari from "../assets/Ferrari.jpeg";
import porsche from "../assets/porsche.jpeg";
import lamborghini from "../assets/lamborghini.jpeg";

function Carros() {
  const carros = [
    {
      id: 1,
      nome: "BMW M4 Competition",
      marca: "BMW",
      preco: 1500,
      imagem: bmw
    },
    {
      id: 2,
      nome: "Ferrari 488 GTB",
      marca: "Ferrari",
      preco: 4500,
      imagem: ferrari
    },
    {
      id: 3,
      nome: "Porsche 911 Carrera",
      marca: "Porsche",
      preco: 2800,
      imagem: porsche
    },
    {
      id: 4,
      nome: "Lamborghini Huracán",
      marca: "Lamborghini",
      preco: 6000,
      imagem: lamborghini
    }
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Nossos Carros
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Escolha seu carro importado e viva uma
        experiência de luxo.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carros.map((carro) => (
          <CarrosCard
            key={carro.id}
            nome={carro.nome}
            marca={carro.marca}
            preco={carro.preco}
            imagem={carro.imagem}
          />
        ))}
      </div>
    </main>
  );
}

export default Carros;