import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function fazerLogin(e) {
    e.preventDefault();

    if (email && senha) {
      setMensagem(
        "Formulário validado!"
      );
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-4">
          Login
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Acesse sua conta Luxury Cars
        </p>

        <form onSubmit={fazerLogin} className="space-y-5">

          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-2"
            >
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
            <label
              htmlFor="senha"
              className="block font-medium mb-2"
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Entrar
          </button>

        </form>

        {mensagem && (
          <p className="mt-5 text-center text-green-600 font-medium">
            {mensagem}
          </p>
        )}

      </div>
    </main>
  );
}

export default Login;