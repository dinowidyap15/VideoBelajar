import React from "react";
import InputForm from "../Elements/Input";
import DropdownArrow from "../Elements/SVG/arrow";

const FormRegister = () => {
  return (
    <form action="" class="mt-8">
      <InputForm label="Nama Lengkap" type="text" name="fullName" />
      <InputForm label="E-Mail" type="email" name="email" />
      <div className="mb-4 mt-4 relative">
        <label htmlFor="gender" className="flex items-center gap-1 font-lato font-regular text-dark-2 sm:text-md text-sm">
          Jenis Kelamin <span className="font-poppins text-red-500">*</span>
        </label>
        <select
          id="gender"
          name="gender"
          className="font-lato !sm:text-md w-full mt-2 h-12 px-4 border border-bg-border rounded-lg
     text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300 appearance-none"
        >
          <option value="wanita">Wanita</option>
          <option value="pria">Pria</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pt-7 pr-4 pointer-events-none text-dark-2">
          <DropdownArrow />
        </div>
      </div>

      <div className="mb-4 relative">
        <label htmlFor="gender" className="flex items-center gap-1 font-lato font-regular text-dark-2 sm:text-md text-sm">
          No. Hp <span className="font-poppins text-red-500">*</span>
        </label>
        <div className=" flex space-x-2 gap-4">
          <select
            id="country"
            name="country"
            className="font-lato !sm:text-md w-1/3 mt-2 h-12 px-4 border border-bg-border rounded-lg
      text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300 appearance-none"
          >
            <option value="ID">+62</option>
            <option value="US">+1</option>
          </select>
          <div className="absolute inset-y-0 left-0 flex items-center pt-7 sm:pl-28 pl-20 pointer-events-none text-dark-2">
            <DropdownArrow />
          </div>
          <input type="tel" className="font-lato w-2/3 mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300" />
        </div>
      </div>

      <InputForm label="Kata Sandi" type="password" name="password" />
      <InputForm label="Konfirmasi Kata Sandi" type="password" name="confirmPassword" />
    </form>
  );
};

export default FormRegister;
