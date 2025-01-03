import React from "react";
import Category from "../components/Fragments/Category";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";

const CategoryPage = () => {
  return (
    <main className="overflow-hidden">
      <Header categoryColor="text-primary-400" categoryHover="hover:text-primary-500"/>
      <Category />
      <Footer />
    </main>
  );
};

export default CategoryPage;