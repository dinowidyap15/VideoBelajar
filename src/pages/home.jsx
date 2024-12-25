import React from "react";
import Hero from "../components/Fragments/Hero";
import Nav from "../components/Fragments/Nav";
import CollectionsPage from "../components/Fragments/Collections";
import NewsletterPage from "../components/Fragments/Newsletter";
import Footer from "../components/Fragments/Footer";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <CollectionsPage />
      <NewsletterPage />
      <Footer />
    </>
  );
};

export default HomePage;
