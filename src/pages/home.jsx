import React from "react";
import Hero from "../components/Fragments/Hero";
import CollectionsPage from "../components/Fragments/Collections";
import CreateCardPage from "../components/Fragments/CreateCard";
import NewsletterPage from "../components/Fragments/Newsletter";
import Footer from "../components/Fragments/Footer";
import Header from "../components/Fragments/Header";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <CollectionsPage />
      <NewsletterPage />
      <Footer />
    </main>
  );
};

export default HomePage;
