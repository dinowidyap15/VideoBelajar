import React, { useState, useEffect } from "react";
import CreateCardPage from "./CreateCard";
import CardLayouths from "../Layouts/CardLayouths";
import { getCard, updateCard as apiUpdateCard, deleteCard as apiDeleteCard } from "../../services/cards.service";
import Triangle from "../Elements/SVG/triangle";
import DropdownArrow from "../Elements/SVG/arrow";
import UnCheck from "../Elements/SVG/uncheck";
import Check from "../Elements/SVG/check";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const [cards, setCards] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [sortOption, setSortOption] = useState("none");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [openStudy, setOpenStudy] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const categories = [
    "Digital & Teknologi",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  useEffect(() => {
    getCard((data) => {
      console.log(data);
      setCards(data);
    });
  }, []);

  const filteredCards = activeCategory === "Semua Kelas"
    ? cards
    : cards.filter((item) => item.category === activeCategory);

  const toggleStudy = () => setOpenStudy(prevState => !prevState);
  const togglePrice = () => setOpenPrice(prevState => !prevState);

  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (sortOption) {
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      case "priceHigh":
        return b.price - a.price;
      case "priceLow":
        return a.price - b.price;
      case "ratingHigh":
        return b.rating - a.rating;
      case "ratingLow":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  const addCard = (newCard) => {
    if (!editCard) {
      setCards([...cards, newCard]);
    }
  };

  const updateCard = (updatedCard) => {
    apiUpdateCard(updatedCard.id, updatedCard, (res) => {
      setCards(cards.map((item) => (item.id === updatedCard.id ? res : item)));
      setEditCard(null);
    });
  };

  const deleteCard = (id) => {
    apiDeleteCard(id, () => {
      setCards(cards.filter((item) => item.id !== id));
    });
  };

  const startEdit = (card) => setEditCard(card);
  const cancelEdit = () => setEditCard(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(sortedCards.length / cardsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  return (
    <>
      <section className="flex flex-col max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 bg-bg-main">
        <div id="collection" className="flex flex-col gap-8 w-full">
          <div id="filter" className="flex flex-col justify-center items-start gap-1">
            <h2 className="font-poppins font-semibold md:text-2xl text-xl leading-[1.1]">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="font-lato text-dark-2 md:text-lg sm:text-md text-sm pt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
        </div>
      </section>

      <section className="flex sm:flex-row flex-col max-w-full mx-auto xl:pt-10 lg:pt-8 md:pt-6 pt-4 xl:px-32 lg:px-20 md:px-16 px-6 lg:gap-10 gap-6 bg-bg-main">
        <div className="flex flex-col lg:w-1/4 sm:w-1/2 w-full h-1/4 gap-4 overflow-hidden border border-bg-border rounded-xl bg-white items-start relative p-4">
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="font-poppins font-semibold text-md text-dark-2">Filter</h3>
            <button
              onClick={() => setActiveCategory("Semua Kelas")}
              className="text-tertiary-400 text-md font-semibold hover:text-tertiary-500"
            >
              Reset
            </button>
          </div>

          <ul className="flex flex-col w-full gap-4 overflow-hidden border border-bg-border rounded-xl bg-white items-start relative p-2">
            <div className="flex flex-row gap-2 text-primary-400 cursor-pointer w-full" onClick={toggleStudy}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H8M8 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H8M8 4V20M12 11H16M12 8H16" stroke="#3ECF4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Bidang Studi
              <span className="absolute flex inset-y-0 right-3 pt-2">
                {openStudy ? <DropdownArrow colorClass="text-primary-400" direction="up" /> : <DropdownArrow />}
              </span>
            </div>
            {openStudy && categories.map((category) => (
              <li 
                key={category} 
                className={`flex flex-row gap-2 cursor-pointer rounded-xl w-full ${activeCategory === category 
                ? "text-dark-1" 
                : "bg-white text-dark-2 hover:text-dark-1"}`} 
                onClick={() => setActiveCategory(category)}>
                <span>{activeCategory === category ? <Check /> : <UnCheck />}</span>
                {category}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col w-full gap-4 overflow-hidden border border-bg-border rounded-xl bg-white items-start relative p-2">
            <div className="flex flex-row gap-2 text-primary-400 cursor-pointer w-full" onClick={togglePrice}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8M3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8036C21 17.9215 21 18.4805 20.7822 18.9079C20.5905 19.2842 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20H6.19691C5.07899 20 4.5192 20 4.0918 19.7822C3.71547 19.5905 3.40973 19.2842 3.21799 18.9079C3 18.4801 3 17.9203 3 16.8002Z" stroke="#3ECF4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Harga
              <span className="absolute flex inset-y-0 right-3 pt-2">
                {openPrice ? <DropdownArrow colorClass="text-primary-400" direction="up" /> : <DropdownArrow />}
              </span>
            </div>
            {openPrice && categories.map((category) => (
              <li 
                key={category} 
                className={`flex flex-row gap-2 cursor-pointer rounded-xl ${activeCategory === category 
                ? "text-dark-1" 
                : "bg-white text-dark-2"}`} 
                onClick={() => setActiveCategory(category)}>
                <span>{activeCategory === category ? <Check /> : <UnCheck />}</span>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:w-3/4 gap-8">
          <div className="relative flex justify-end z-40">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="flex flex-row px-4 py-2 gap-2 bg-white hover:bg-gr-100 text-dark-2 border border-bg-border rounded-xl">
                Urutkan
              <span>{dropdownOpen ? <Triangle direction="down" /> : <Triangle />}</span>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-[100%] mt-2 w-40 py-1 bg-white border border-bg-border rounded-xl shadow-lg z-30">
                {["priceHigh", "priceLow", "az", "za", "ratingHigh", "ratingLow"].map((option) => (
                  <li
                    key={option}
                    className={`px-4 py-2 cursor-pointer ${selectedOption === option 
                      ? "bg-gr-100 text-dark-1" 
                      : "hover:bg-gr-100 hover:text-dark-1 text-dark-2"}`}
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setSortOption(option); 
                      setSelectedOption(option); }}
                  >
                    {option === "az" ? "A-Z" : 
                    option === "za" ? "Z-A" : 
                    option === "priceHigh" ? "Harga Tertinggi" : 
                    option === "priceLow" ? "Harga Terendah" : 
                    option === "ratingHigh" ? "Rating Tertinggi" : "Rating Terendah"}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 w-full sm:gap-6 gap-4">
            {currentCards.map((item) => (
              <CardLayouths 
                key={item.id} 
                card={item} 
                onEdit={startEdit} 
                onDelete={deleteCard}
                showActions={true} />
            ))}
          </div>

          <div className="flex justify-end items-center mt-2 space-x-2">
            <button 
              onClick={handlePrevious} 
              disabled={currentPage === 1} 
              className={`px-4 py-2 rounded ${currentPage === 1 
                ? "bg-bg-base" 
                : "bg-bg-base"}`}
            >
              <DropdownArrow direction="left" colorClass="text-dark-2"/>
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index + 1} 
                onClick={() => handlePageClick(index + 1)} 
                className={`px-4 py-2 rounded ${currentPage === index + 1 
                ? "bg-secondary-400 text-white" 
                : "text-dark-2 hover:text-white hover:bg-secondary-400"}`}
              >
                {index + 1}
              </button>
            ))}

            <button 
              onClick={handleNext} 
              disabled={currentPage === totalPages} 
              className={`px-4 py-2 rounded ${currentPage === totalPages 
              ? "bg-bg-base" 
              : "bg-bg-base"}`}
            >
              <DropdownArrow direction="right" colorClass="text-dark-2"/>
            </button>
          </div>
        </div>
      </section>

      <div>
        <CreateCardPage 
          addCard={addCard} 
          editCard={editCard} 
          cancelEdit={cancelEdit} 
          updateCard={updateCard} />
      </div>
    </>
  );
};

export default Category;

