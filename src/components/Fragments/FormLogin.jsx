import React, { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link as RouterLink } from "react-router-dom";
import { OffEyeIcon, OnEyeIcon } from "../Elements/SVG";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

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

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", formData.email);

      setAlertMessage("Login berhasil!");
      setAlertType("success");
      setTimeout(() => (window.location.href = "/home"), 3000);
    } else {
      setError("Email atau password salah.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="mt-8">
      <InputForm label="E-Mail" type="email" name="email" value={formData.email} onChange={handleChange} />

      <div className="relative mb-4">
        <InputForm
          label="Kata Sandi"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="font-lato w-full mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-2 pt-7 flex items-center cursor-pointer">
          {showPassword ? <OnEyeIcon /> : <OffEyeIcon />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm my-4">{error}</p>}

      {alertMessage && <div className={`alert ${alertType === "success" ? "bg-success-default" : "bg-error-default"} flex justify-center gap-4 p-3 rounded-xl text-white mb-4`}>{alertMessage}</div>}

      <Button variant="primary" margin="mt-4" btn={1} type="submit">
        Masuk
      </Button>
      <RouterLink to="/register">
        <Button variant="primary" margin="mt-4" btn={2}>
          Daftar
        </Button>
      </RouterLink>
    </form>
  );
};

export default FormLogin;
