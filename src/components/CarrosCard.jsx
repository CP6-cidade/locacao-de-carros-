function CarrosCard({ nome, marca, preco, imagem }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={imagem}
        alt={nome}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {nome}
        </h2>

        <p className="text-gray-600 mb-2">
          Marca: {marca}
        </p>

        <p className="text-green-600 text-xl font-bold mb-4">
          R$ {preco.toLocaleString("pt-BR")} / dia
        </p>

        <button
          type="button"
          className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          Alugar agora
        </button>
      </div>

    </div>
  );
}

export default CarrosCard;