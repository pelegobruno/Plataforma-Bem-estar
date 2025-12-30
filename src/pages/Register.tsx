import { Link } from "react-router-dom";

export function Register() {
  return (
    <div>
      <h2>Criar conta</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <button>Cadastrar</button>

      <Link to="/">Voltar</Link>
    </div>
  );
}
