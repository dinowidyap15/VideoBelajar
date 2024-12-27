import React from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, desc, type } = props;
  return (
    <>
      <section
        className="flex max-w-full min-h-screen mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8
     bg-bg-main xl:pb-16 lg:pb-14 md:pb-12 pb-8 justify-center"
      >
        <div className="relative w-full max-w-xl bg-white rounded-md sm:p-9 p-5 border border-bg-border">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-poppins font-semibold sm:text-2xl text-xl text-dark-1">{title}</h3>
            <p className="font-lato sm:text-md text-sm text-dark-2">{desc}</p>
          </div>
          {children}
          <p className="font-lato sm:text-md text-sm text-gr-700 mt-3">
            {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}

            {type === "login" && (
              <Link to="/register" className="font-bold text-primary-400 hover:underline">
                Daftar
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-primary-400 hover:underline">
                Masuk
              </Link>
            )}
          </p>
          <div className="flex justify-end mb-6">
            <a href="#" class="font-lato text-gr-700 sm:text-md text-sm hover:underline">
              Lupa Password?
            </a>
          </div>
          <div className="space-y-4">
            <Button variant="primary" type={1}>
              Masuk
            </Button>
            <Button variant="primary" type={2}>
              Daftar
            </Button>
          </div>
          <div className="flex items-center gap-2 mb-6 mt-5">
            <span className="flex-1 h-px bg-bg-border"></span>
            <span className="font-lato text-gr-800 sm:text-md text-sm">atau</span>
            <span className="flex-1 h-px bg-bg-border"></span>
          </div>

          <button
            className="w-full flex items-center justify-center gap-3 border border-gr-300 hover:bg-gr-100 
          transition duration-400 md:h-11 h-9 md:px-6 px-4 md:text-md text-sm rounded-lg cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.4905 10.926C20.4905 10.0874 20.4224 9.47543 20.2752 8.84082H10.6992V12.6258H16.3201C16.2068 13.5664 15.5948 14.983 14.2349 15.9349L14.2159 16.0616L17.2436 18.4071L17.4534 18.4281C19.3798 16.6489 20.4905 14.0311 20.4905 10.926Z"
                fill="#4285F4"
              />
              <path
                d="M10.6992 20.8983C13.453 20.8983 15.7648 19.9917 17.4534 18.4279L14.2349 15.9347C13.3737 16.5353 12.2177 16.9546 10.6992 16.9546C8.00211 16.9546 5.71297 15.1754 4.89695 12.7163L4.77734 12.7265L1.62906 15.1629L1.58789 15.2774C3.26508 18.6091 6.71016 20.8983 10.6992 20.8983Z"
                fill="#34A853"
              />
              <path
                d="M4.89695 12.7164C4.68164 12.0818 4.55703 11.4018 4.55703 10.6993C4.55703 9.9966 4.68164 9.31668 4.88562 8.68207L4.87992 8.54691L1.69219 6.07129L1.58789 6.1209C0.896641 7.50348 0.5 9.05605 0.5 10.6993C0.5 12.3425 0.896641 13.895 1.58789 15.2775L4.89695 12.7164Z"
                fill="#FBBC05"
              />
              <path
                d="M10.6992 4.44367C12.6144 4.44367 13.9063 5.27094 14.6429 5.96227L17.5213 3.1518C15.7535 1.50859 13.453 0.5 10.6992 0.5C6.71016 0.5 3.26508 2.78914 1.58789 6.12086L4.88563 8.68203C5.71297 6.22289 8.00211 4.44367 10.6992 4.44367Z"
                fill="#EB4335"
              />
            </svg>
            <span className="font-lato font-semibold text-gr-800">Masuk dengan Google</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default AuthLayouts;
