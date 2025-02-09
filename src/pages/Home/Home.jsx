import React from "react";
import home from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
