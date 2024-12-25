import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import Nav from "../components/Fragments/Nav";

const RegisterPage = () => {
  return (
    <>
      <Nav />
      <AuthLayouts title="Pendaftaran Akun" desc="Yuk, daftarkan akunmu sekarang juga!" type="register">
        <FormRegister />
      </AuthLayouts>
    </>
  );
};

export default RegisterPage;
