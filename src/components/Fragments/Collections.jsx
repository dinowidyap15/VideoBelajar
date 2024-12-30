import React, { useState, useEffect } from "react";
import { card as initialCards } from "../../constants";
import CreateCardPage from "./CreateCard";
import Button from "../Elements/Button";

const CollectionsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const [cards, setCards] = useState([]);
  const [editCard, setEditCard] = useState(null);

  const categories = ["Semua Kelas", "Digital & Teknologi", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards"));
    if (storedCards) {
      setCards(storedCards);
    } else {
      setCards(initialCards);
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [cards]);

  const filteredCards = activeCategory === "Semua Kelas" ? cards : cards.filter((item) => item.category === activeCategory);

  const addCard = (newCard) => {
    if (!editCard) {
      setCards([...cards, newCard]);
    }
  };

  const updateCard = (updatedCard) => {
    setCards(cards.map((item) => (item.id === updatedCard.id ? updatedCard : item)));
    setEditCard(null);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((item) => item.id !== id));
  };

  const startEdit = (card) => {
    setEditCard(card);
  };

  const cancelEdit = () => {
    setEditCard(null);
  };

  return (
    <div>
      <section className="flex max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <div id="collection" className="flex flex-col gap-8">
          <div className="flex flex-col justify-center items-start gap-1">
            <h2 className="font-poppins font-semibold md:text-2xl text-xl leading-[1.1]">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="font-lato text-dark-2 md:text-lg sm:text-md text-sm pt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>

          <div>
            <ul className="flex flex-row items-start list-none mb-8 md:text-lg sm:text-md text-xs lg:gap-8 md:gap-6 gap-3 cursor-pointer">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`relative pb-4 ${activeCategory === category ? "text-tertiary-400" : "text-dark-2"}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <a to="collection">{category}</a>
                  {activeCategory === category && <span className="absolute bottom-[-6px] left-0 inline-block sm:w-14 w-10 h-1.5 bg-tertiary-400 rounded-lg"></span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex max-w-full mx-auto xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 w-full md:gap-8 gap-4">
          {filteredCards.map((item) => (
            <div key={item.id} className="overflow-hidden border border-bg-border rounded-xl bg-white flex flex-col items-start relative p-4 gap-4">
              <div className="flex flex-row gap-5 md:flex-col">
                <img src={item.thumbnail} alt="collection video" className="w-20 h-20 md:w-auto md:h-auto md:rounded-xl object-cover rounded-lg md:object-contain" />
                <div className="flex flex-col md:flex-col justify-between">
                  <div className="flex flex-col md:mb-4 mb-0 gap-2">
                    <h5 className="font-poppins font-regular md:text-lg text-md leading-[1.1]">{item.title}</h5>
                    <p className="font-lato font-bold text-dark-2 md:block hidden">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-auto">
                    <div className="w-10 h-10 overflow-hidden">
                      <img src={item.avatar} alt="avatar" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-lato font-bold text-dark-1 md:text-md text-sm mb-1">{item.name}</h4>
                      <p className="font-lato font-regular text-dark-2 md:text-sm text-xs">
                        {item.role} <span className="hidden sm:inline">di</span> <span className="font-lato font-bold text-dark-2 sm:text-sm text-xs hidden sm:inline">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <p className="font-poppins font-semibold md:text-xl text-lg text-primary-400">{item.price}</p>
              </div>
              <div className="flex ml-auto gap-3 mt-4">
                <Button 
                  onClick={() => startEdit(item)} 
                  width="w-24" 
                  variant="primary" 
                  btn={1}
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => deleteCard(item.id)} 
                  width="w-24" 
                  variant="primary" 
                  btn={3}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CreateCardPage 
        addCard={addCard} 
        editCard={editCard} 
        updateCard={updateCard} 
        cancelEdit={cancelEdit} />
    </div>
  );
};

export default CollectionsPage;