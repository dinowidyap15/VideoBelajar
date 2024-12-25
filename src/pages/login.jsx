import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import Nav from "../components/Fragments/Nav";

const LoginPage = () => {
  return (
    <>
      <Nav />
      <AuthLayouts title="Masuk ke Akun" desc="Yuk, lanjutin belajarmu di videobelajar." type="login">
        <FormLogin />
      </AuthLayouts>
    </>
  );
};

export default LoginPage;
