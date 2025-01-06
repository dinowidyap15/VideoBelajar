import React from "react";
import Hero from "../components/Fragments/Hero";
import Collections from "../components/Fragments/Collections";
import Newsletter from "../components/Fragments/Newsletter";
import Footer from "../components/Fragments/Footer";
import Header from "../components/Fragments/Header";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Collections />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default HomePage;
