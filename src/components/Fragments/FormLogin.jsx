import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

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
      <div className="flex justify-end">
        <a href="#" className="font-lato text-gr-700 sm:text-md text-sm hover:underline">
          Lupa Password?
        </a>
      </div>
      <Button variant="primary" margin="mt-4" btn={1} type="submit">
        Masuk
      </Button>
      <Link to="/register">
        <Button variant="primary" margin="mt-4" btn={2}>
          Daftar
        </Button>
      </Link>
    </form>
  );
};

export default FormLogin;
