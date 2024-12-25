import React from "react";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="" class="mt-8">
      <InputForm 
      label="E-Mail" 
      type="email" 
      name="email" />
      <InputForm 
      label="Kata Sandi" 
      type="password" 
      name="password" />
    </form>
  );
};

export default FormLogin;
