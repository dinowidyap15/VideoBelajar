import React from "react";
import Header from "../components/Fragments/Header";
import DetailProduct from "../components/Fragments/DetailProduct";
import Footer from "../components/Fragments/Footer";

const DetailProductPage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <DetailProduct />
      <Footer />
    </main>
  );
};

export default DetailProductPage;
