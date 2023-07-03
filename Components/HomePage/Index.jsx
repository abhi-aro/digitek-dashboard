import React from "react";
import Styles from "@/Styles/HomePage/Index.module.css";
import Feed from "./Feed";
import Shop from "./Shop";
import Sponsered from "./Sponsered";

const Index = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.feedWrapper}>
        <Feed />
        <Shop />
      </div>
      <Sponsered />
    </div>
  );
};

export default Index;
