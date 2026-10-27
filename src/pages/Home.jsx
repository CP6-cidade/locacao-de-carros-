import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="bg-gray-900 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Bem-vindo à Luxury Cars
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Viva uma experiência única com os melhores
          carros importados e de luxo.
        </p>

        <Link
          to="/carros"
          className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-400"
        >
          Ver nossos carros
        </Link>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Por que escolher a Luxury Cars?
        </h2>

        <p className="text-gray-600 text-lg">
          Oferecemos veículos exclusivos, conforto,
          segurança e uma experiência premium
          para nossos clientes.
        </p>
      </section>

    </main>
  );
}

export default Home;