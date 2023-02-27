import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Auth from "../../components/auth/Auth";
import { loginSchema } from "./validator";
import { Container } from "../../components/CommonStyles";
import { AuthenticateAPI } from "../../API/api";
import { Authentication } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLoading, setAuthentication, isAuthenticated, setUser } =
    useContext(Authentication);
  const navigate = useNavigate();
  const win = window.localStorage;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (d) => {
    setLoading(true);
    const res = await AuthenticateAPI("login", d);
    setLoading(false);
    if (res.success) {
      setAuthentication(true);
      console.log(isAuthenticated);
      setUser(res.message);
      console.log(res.message.role);
      win.setItem("token", res.token);
      if (res.message.role === "Admin") {
        navigate("/admin", { replace: true });
      }

      console.log(res.token);
      win.setItem("token", res.token);
      navigate("/", { replace: true });
    }
  };

  return (
    <Container>
      <Auth
        method="login"
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </Container>
  );
};

export default Login;
