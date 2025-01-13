import React from "react";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import Orders from "../components/Fragments/Orders";

const OrdersPage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Orders />
      <Footer />
    </main>
  );
};

export default OrdersPage;
