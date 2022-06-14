import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

import InputText from "../components/UI/InputText";
import Button from "../components/UI/Button";

const LOGIN_URL = "auth/login";

const Login = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.authorities;

      setAuth({ username, password, roles, accessToken });
      navigate("/reports", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <InputText
          name={"username"}
          id={"usernameInput"}
          type={"text"}
          label={"Username"}
          value={username}
          onChange={handleUsername}
        />
        <InputText
          name={"password"}
          id={"passwordInput"}
          type={"password"}
          label={"Password"}
          value={password}
          onChange={handlePassword}
        />

        <div className="text-end">
          <Button type={"submit"} classType={"primary"}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
