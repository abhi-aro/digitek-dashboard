import React from "react";
import Menu from "../Menu/Menu";
import Services from "../Services/Services";
import Index from "./Index";
import Styles from "@/Styles/HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <Menu />
      <Index />
      <Services />
    </div>
  );
};

export default HomePage;
