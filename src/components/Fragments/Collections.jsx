import React, { useState, useEffect } from "react";
import CardLayouths from "../Layouts/CardLayouths";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/slices/cardsSlice";

const Collections = () => {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");

  const categories = [
    "Semua Kelas", 
    "Digital & Teknologi", 
    "Pemasaran", 
    "Desain", 
    "Pengembangan Diri", 
    "Bisnis"
  ];

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchCards());
    }
  }, [dispatch, cards]);

  const filteredCards = activeCategory === "Semua Kelas" ? cards : cards.filter((item) => item.category === activeCategory);

  const displayedCards = filteredCards.slice(0, 9);

  if (loading) {
    return (
      <section className="flex max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <h3 className="font-poppins font-semibold md:text-lg text-md ">Loading...</h3>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <h3 className="font-poppins font-semibold md:text-xl text-1g text-error-default">{error}</h3>
      </section>
    );
  }

  return (
    <div id="collection">
      <section className="flex max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-center items-start gap-1">
            <h2 className="font-poppins font-semibold md:text-2xl text-xl leading-[1.1]">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="font-lato text-dark-2 md:text-lg sm:text-md text-sm pt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
          <div>
            <ul className="flex flex-row items-start list-none mb-8 md:text-lg sm:text-md text-xs lg:gap-8 md:gap-6 gap-3 cursor-pointer">
              {categories.map((category) => (
                <li key={category} className={`relative pb-4 ${activeCategory === category ? "text-tertiary-400 hover:text-tertiary-500" : "text-dark-2 hover:text-dark-1"}`} onClick={() => setActiveCategory(category)}>
                  <a>{category}</a>
                  {activeCategory === category && <span className="absolute bottom-[-6px] left-0 inline-block sm:w-14 w-10 h-1.5 bg-tertiary-400 hover:text-tertiary-500 rounded-lg"></span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex max-w-full mx-auto xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 w-full h-auto md:gap-8 gap-4">
          {displayedCards.length === 0 ? (
            <></>
          ) : (
            displayedCards.map((item) => {
              return (
                <RouterLink to={`/product/${item.id}`} key={item.id}>
                  <CardLayouths card={item} />
                </RouterLink>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Collections;
