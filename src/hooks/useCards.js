// import { useState, useEffect } from 'react';
// import axios from 'axios';

// // URL API yang digunakan
// const API_URL = "https://6773a22077a26d4701c5e15a.mockapi.io/api/v1/cards";

// // Custom hook untuk GET dan POST data kartu
// const useCards = () => {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fungsi untuk mengambil data kartu
//   const getCards = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(API_URL);
//       setCards(response.data);
//     } catch (err) {
//       setError("Gagal mengambil data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fungsi untuk menambah kartu baru
//   const addCard = async (newCard) => {
//     try {
//       const response = await axios.post(API_URL, newCard);
//       setCards([...cards, response.data]);
//     } catch (err) {
//       setError("Gagal menambah kartu");
//     }
//   };

//   // Mengambil data kartu saat pertama kali render
//   useEffect(() => {
//     getCards();
//   }, []);

//   return { cards, loading, error, addCard };
// };

// export default useCards;
