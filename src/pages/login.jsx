import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import Header from "../components/Fragments/Header";

const LoginPage = () => {
  return (
    <main className="overflow-hidden">
      <Header 
        showCategory={false} 
        showAvatar={false} 
        showButton={false} 
        showHamMenu={false} />
      <AuthLayouts title="Masuk ke Akun" desc="Yuk, lanjutin belajarmu di videobelajar." type="login">
        <FormLogin />
      </AuthLayouts>
    </main>
  );
};

export default LoginPage;
