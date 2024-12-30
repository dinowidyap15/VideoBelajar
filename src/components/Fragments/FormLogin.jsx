import React, { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import EyeIcon from "../Elements/SVG/eye";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email dan password harus diisi!");
      return;
    }

    const storedUser = localStorage.getItem(formData.email);
    if (!storedUser) {
      setError("Email tidak terdaftar! Silahkan daftar.");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password !== formData.password) {
      setError("Kata sandi salah!");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", formData.email);

    alert("Login berhasil!");
    window.location.href = "/home";
  };

  return (
    <form onSubmit={handleLogin} className="mt-8">
      <InputForm
        label="E-Mail"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <div className="relative mb-4">
        <InputForm
          label="Kata Sandi"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="font-lato w-full mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 pt-7 flex items-center cursor-pointer"
        >
          <EyeIcon />
        </button>
      </div>

      {error && <p className="text-red-500 text-sm my-4">{error}</p>}

      <div className="flex justify-end">
        <a
          href="#"
          className="font-lato text-gr-700 sm:text-md text-sm hover:underline"
        >
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