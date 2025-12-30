import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>

      <Link to="/">Entrar sem login (demo)</Link>
    </div>
  );
}
