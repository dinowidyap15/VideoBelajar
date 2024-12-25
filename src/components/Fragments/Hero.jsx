import React from "react";
import Button from "../Elements/Button";

const Hero = () => {
  return (
    <>
      <section className="flex max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <div
          className="relative flex justify-center items-center h-full bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/hero.jpg')",
          }}
        >
          <div
            className="flex flex-col h-full text-light-1 justify-center text-center items-center 
    lg:px-32 md:px-12 sm:px-10 px-6 lg:py-18 md:py-16 sm:py-10 py-8 md:gap-4 gap-2"
          >
            <h1 className="font-poppins font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-[1.1]">
              Revolusi Pembelajaran: Temukan <br />
              Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="lg:text-md text-sm mb-2 sm:leading-normal leading-[1.1]">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, <br />
              Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <Button variant="primary" type={1} width={1 / 2}>
              Temukan Video Course!
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
