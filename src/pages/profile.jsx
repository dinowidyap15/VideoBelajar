import React from "react";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import Profile from "../components/Fragments/Profile";

const ProfilePage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Profile />
      <Footer />
    </main>
  );
};

export default ProfilePage;
