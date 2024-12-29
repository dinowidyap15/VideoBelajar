import React from "react";
import Button from "../Elements/Button";

const NewsletterPage = () => {
  return (
    <section className="max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 pb-0 gap-8 bg-bg-main">
      <div
        className="relative h-full bg-cover bg-center bg-no-repeat rounded-lg"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/newslt.jpg')",
        }}
      >
        <div className="flex flex-col h-full justify-center text-center items-center lg:px-32 md:px-14 sm:px-12 px-6 lg:py-18 md:py-16 sm:py-10 py-8 gap-4">
          <span className="font-lato font-medium md:text-lg text-md text-gr-400">NEWSLETTER</span>
          <h6 className="font-poppins font-semibold lg:text-3xl text-2xl text-light-1 leading-[1.1]">Mau Belajar Lebih Banyak?</h6>
          <p className="font-lato text-gr-300 mb-4 leading-[1.1]">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br />
            penawaran spesial dari program-program terbaik hariesok.id
          </p>
          <div
            className="flex bg-white text-dark-2 md:w-[525px] w-full md:h-14 h-9 rounded-lg pl-4 pr-1.5
          items-center justify-between"
          >
            <input
              type="text"
              placeholder="Masukkan Emailmu"
              className="font-lato md:text-start 
            text-center md:text-md text-sm md:h-auto h-5 w-full border-0 outline-none placeholder:text-dark-2"
            />
            <Button variant="secondary" btn={1} width={1 / 2} display="hidden md:inline-block">
              Subscribe
            </Button>
          </div>
          <Button variant="secondary" btn={1} height="h-9" display="md:hidden inline-block">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPage;
