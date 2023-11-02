import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

   function handleLoginSubmit(ev) {
    ev.preventDefault();
    axios.post("http://localhost:3000/", { username, password }).then((res)=>{
      setRedirect(true);
    })
   
  }

  if (redirect) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className="mt-4 grow flex flex-col items-center justify-around border rounded-md pb-4 ">
      <form
        className="flex flex-col p-3 m-2 rounded-md w-max"
        onSubmit={handleLoginSubmit}
      >
        <input
          className="my-3  p-4 rounded-md w-80 text-md"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className="mb-3 p-4 rounded-md w-80 text-md"
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
