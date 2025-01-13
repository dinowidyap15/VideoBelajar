import React, { useState } from "react";
import Button from "../Elements/Button";
import { Book, Cart, User } from "../Elements/SVG";
import FloatingLabelInput from "../Elements/Input/floatingLabel";
import Select from "../Elements/Select";
import { Link as RouterLink } from "react-router-dom";

const Classes = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <>
      <section className="flex lg:flex-row flex-col space-x-2 max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-5 bg-bg-main">
        <div id="profile" className="flex flex-col gap-8 lg:w-1/4 w-full">
          <div className="flex flex-col justify-center items-start gap-1">
            <h2 className="font-poppins font-semibold md:text-xl text-lg leading-[1.1]">Ubah Profil</h2>
            <p className="font-lato text-dark-2 md:text-lg text-md pt-2">Ubah data diri Anda</p>
          </div>
          <div className="flex flex-col w-full h-auto gap-4 overflow-hidden border border-bg-border rounded-xl bg-white items-start relative p-4 cursor-pointer">
            <div className="flex flex-col justify-start w-full p-1 gap-1 cursor-pointer">
              <h3 className="flex flex-row font-poppins font-semibold text-md text-dark-3 p-2 border-2 border-white">
                <RouterLink to="/profile" className="flex flex-row gap-2 w-full">
                <User />
                Profil Saya
                </RouterLink>
              </h3>
              <h3 className="flex flex-row font-poppins font-semibold text-md text-dark-3 p-2 text-secondary-400 rounded-md bg-secondary-50 border-2 border-secondary-400">
                <RouterLink to="/classes" className="flex flex-row gap-2 w-full">
                <Book />
                Kelas Saya
                </RouterLink>
              </h3>
              <h3 className="flex flex-row font-poppins font-semibold text-md text-dark-3 p-2 border-2 border-white">
                <RouterLink to="/orders" className="flex flex-row gap-2 w-full">
                <Cart />
                Pesanan Saya
                </RouterLink>
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full border border-bg-border rounded-xl bg-white flex flex-col items-start relative p-5 m-auto gap-3">
          <div className="flex items-center gap-4">
            <div className="overflow-hidden">
              <img src="/avatar/ava-profile.png" alt="avatar" />
            </div>
            <div className="flex flex-col justify-between gap-2.5">
              <h2 className="font-medium text-dark-1 md:text-lg text-md">Jennie Ruby Jane</h2>
              <h3 className="font-lato font-regular text-dark-1 md:text-lg text-md">rubyjane@gmail.com</h3>
              <p className="font-lato font-bold text-tertiary-400 md:text-md text-sm cursor-pointer">Ganti Foto Profil</p>
            </div>
          </div>
          <div className="w-full border-t border-bg-border my-3"></div>

          <div className="grid md:grid-cols-3 grid-rows w-full md:gap-3 gap-5">
            <FloatingLabelInput
              label="Nama Lengkap"
              id="nama-lengkap"
            />
            <FloatingLabelInput 
              label="E-Mail" 
              id="E-Mail" 
            />
            <div className="flex flex-row gap-3 w-full">
              <div className="flex-grow">
                <Select label="+62" isOpen={selectOpen} onClick={setSelectOpen}>
                  <div className="p-2">Option 1</div>
                  <div className="p-2">Option 2</div>
                  <div className="p-2">Option 3</div>
                </Select>
              </div>
              <div className="flex-grow">
                <FloatingLabelInput
                  label="No. Hp"
                  id="No-Hp"
                  width="w-full"
                />
                </div>
            </div>
          </div>

          <div className="flex ml-auto mt-2 w-full md:w-auto">
            <Button variant="primary" btn={1} size="text-md" height="h-11" >
              Simpan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;
