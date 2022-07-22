import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://api.themembers.dev.br/api/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          console.log(data.access_token);
          setToken(data.access_token);
          navigate("/home");
        } else {
          toast.error("Usuário e/ou Senha incorretos");
        }
      });

    setPassword("");
    setEmail("");
  };
  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <form onSubmit={handleSubmit}>
        <img
          width={120}
          src="https://cdn.greatsoftwares.com.br/arquivos/paginas_editor/3768-f0ac8155e7ba585692d2963314289494.png"
          alt="logo"
        />
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <input className="btn" type="submit" value="Entrar" />
      </form>
    </>
  );
};

export default Login;
