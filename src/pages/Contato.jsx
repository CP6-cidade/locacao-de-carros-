import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(e) {
    e.preventDefault();
    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-4">
          Entre em Contato
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Tem alguma dúvida sobre nossos veículos?
          Entre em contato com a Luxury Cars.
        </p>

        {enviado && (
          <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-6">
            Formulário preenchido com sucesso!
            
          </p>
        )}

        <form onSubmit={enviarFormulario} className="space-y-5">

          <div>
            <label htmlFor="nome" className="block font-medium mb-2">
              Nome completo
            </label>
            <input
              id="nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              required
              rows="5"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Digite sua mensagem"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Enviar mensagem
          </button>

        </form>
      </div>
    </main>
  );
}

export default Contato;