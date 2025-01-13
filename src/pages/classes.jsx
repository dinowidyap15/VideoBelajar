import React from "react";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import Classes from "../components/Fragments/Classes";

const ClassesPage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Classes />
      <Footer />
    </main>
  );
};

export default ClassesPage;
