import React from "react";
import { card } from "../../constants";

const CollectionsPage = () => {
  return (
    <>
      <section
        className="flex max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 
      xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-center items-start gap-1">
            <h2 className="font-poppins font-semibold md:text-2xl text-xl leading-[1.1]">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="font-lato text-dark-2 md:text-lg sm:text-md text-sm pt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
          <div>
            <ul className="flex flex-row items-start list-none mb-8 md:text-lg sm:text-md text-xs lg:gap-8 md:gap-6 gap-3">
              <li className="relative pb-4 first:text-tertiary-400">
                <a href="#">Semua Kelas</a>
                <span className="absolute bottom-[-6px] left-0 inline-block sm:w-14 w-10 h-1.5 bg-tertiary-400 rounded-lg"></span>
              </li>
              <li className="relative pb-4 text-dark-2">
                <a href="#">Pemasaran</a>
              </li>
              <li className="relative pb-4 text-dark-2">
                <a href="#">Desain</a>
              </li>
              <li className="relative pb-4 text-dark-2">
                <a href="#">Pengembangan Diri</a>
              </li>
              <li className="relative pb-4 text-dark-2">
                <a href="#">Bisnis</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex max-w-full mx-auto xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 w-full md:gap-8 gap-4">
          {card.map((user) => (
            <div className="overflow-hidden border border-bg-border rounded-xl bg-white flex flex-col items-start relative p-4 gap-4">
              <div className="flex flex-row gap-3 md:flex-col">
                <img src={user.thumbnail} alt="collection video" className="w-20 h-20 md:w-auto md:h-auto md:rounded-xl object-cover rounded-lg md:object-contain" />
                <div className="flex flex-col md:flex-col justify-between">
                  <div className="flex flex-col gap-1 md:mb-4 mb-0">
                    <h5 className="font-poppins font-regular md:text-lg text-md leading-[1.1]">{user.title}</h5>
                    <p className="font-lato font-bold text-dark-2 md:block hidden">{user.desc}</p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-auto">
                    <div className="w-10 h-10 overflow-hidden">
                      <img src={user.avatar} alt="avatar" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-lato font-bold text-dark-1 md:text-md text-sm mb-1">{user.name}</h4>
                      <p className="font-lato font-regular text-dark-2 md:text-sm text-xs">
                        {user.role} <span className="hidden sm:inline">di</span> <span className="font-lato font-bold text-dark-2 sm:text-sm text-xs hidden sm:inline">{user.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <svg className="xl:w-40 w-32" viewBox="0 0 151 21" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
                <p className="font-poppins font-semibold md:text-xl text-lg text-primary-400">{user.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CollectionsPage;
