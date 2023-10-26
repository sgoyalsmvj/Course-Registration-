import React, { useState } from "react";
import axios from "axios";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    await axios.post("http://localhost:3000/", { username, password });
  }

  return (
    <div className="mt-4 grow flex flex-col items-center justify-around ">
      <form className="flex flex-col" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>

      <span>Forget Password!</span>
    </div>
  );
};

export default LoginPage;
