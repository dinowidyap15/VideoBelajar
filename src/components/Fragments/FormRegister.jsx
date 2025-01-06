import React, { useState } from "react";
import { registerUser } from "../../services/auth.service";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link as RouterLink } from "react-router-dom";
import { DropdownArrow, OffEyeIcon, OnEyeIcon } from "../Elements/SVG";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName || !formData.email || !formData.gender || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError("Semua kolom harus diisi!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid!");
      return;
    }

    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Nomor telepon tidak valid!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      return;
    } else if (formData.password.length < 6) {
      setError("Password minimal harus terdiri dari 6 karakter!");
      return;
    }

    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      gender: formData.gender,
      phone: `${formData.country}${formData.phone}`,
      password: formData.password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    registerUser(userData, (response) => {
      if (response) {
        setAlertMessage("Pendaftaran berhasil! Silahkan login.");
        setAlertType("success");
        setTimeout(() => (window.location.href = "/login"), 2000);
      } else {
        setAlertMessage("Terjadi kesalahan saat mendaftar. Coba lagi!");
        setAlertType("error");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleRegister} className="mt-8">
        <InputForm label="Nama Lengkap" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />

        <InputForm label="E-Mail" type="email" name="email" value={formData.email} onChange={handleChange} />

        <div className="mb-4 mt-4 relative">
          <label htmlFor="gender" className="flex items-center gap-1 font-lato font-regular text-dark-2 sm:text-md text-sm">
            Jenis Kelamin <span className="font-poppins text-red-500">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="font-lato !sm:text-md w-full mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300 appearance-none"
          >
            <option value="">Silahkan pilih jenis kelamin</option>
            <option value="wanita">Wanita</option>
            <option value="pria">Pria</option>
          </select>
          <div className="absolute inset-y-0 right-2 pt-7 flex items-center pointer-events-none">
            <DropdownArrow colorClass="text-dark-2" />
          </div>
        </div>

        <div className="mb-4 relative">
          <label htmlFor="phone" className="flex items-center gap-1 font-lato font-regular text-dark-2 sm:text-md text-sm">
            No. Hp <span className="font-poppins text-red-500">*</span>
          </label>
          <div className="flex space-x-2 gap-4">
            <div className="relative w-1/3">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="font-lato !sm:text-md w-full mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300 appearance-none"
              >
                <option value="ID">+62</option>
                <option value="US">+1</option>
              </select>
              <div className="absolute inset-y-0 right-2 pt-2 flex items-center pointer-events-none">
                <DropdownArrow colorClass="text-dark-2" />
              </div>
            </div>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="font-lato w-2/3 mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300" />
          </div>
        </div>

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

        <div className="relative mb-4">
          <InputForm
            label="Konfirmasi Kata Sandi"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="font-lato w-full mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300"
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-2 pt-7 flex items-center cursor-pointer">
            {showConfirmPassword ? <OnEyeIcon /> : <OffEyeIcon />}
          </button>
        </div>

        {error && <p className="text-error-default text-start my-4">{error}</p>}

        {alertMessage && <div className={`alert ${alertType === "success" ? "bg-success-default" : "bg-error-default"} flex justify-center gap-4 p-3 rounded-xl text-white mb-4`}>{alertMessage}</div>}

        <Button variant="primary" margin="mt-4" btn={1} type="submit">
          Daftar
        </Button>
        <RouterLink to="/login">
          <Button variant="primary" margin="mt-4" btn={2}>
            Masuk
          </Button>
        </RouterLink>
      </form>
    </>
  );
};

export default FormRegister;
