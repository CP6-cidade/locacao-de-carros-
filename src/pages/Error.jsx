import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-yellow-500 mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Ops! A página que você está procurando
          não existe ou foi removida.
        </p>

        <Link
          to="/"
          className="inline-block bg-gray-900 text-white font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          Voltar para Home
        </Link>

      </div>

    </main>
  );
}

export default Error;