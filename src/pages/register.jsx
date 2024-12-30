import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import Header from "../components/Fragments/Header";

const RegisterPage = () => {
  return (
    <main className="overflow-hidden">
      <Header 
        showCategory={false} 
        showAvatar={false} 
        showButton={false} 
        showHamMenu={false}/>
      <AuthLayouts title="Pendaftaran Akun" desc="Yuk, daftarkan akunmu sekarang juga!" type="register">
        <FormRegister />
      </AuthLayouts>
    </main>
  );
};

export default RegisterPage;
