import React from "react";
import Styles from "@/Styles/HomePage/Index.module.css";

const Sponsered = () => {
  return (
    <div className={Styles.sponseredContainer}>
      <div className={Styles.header}>Sponsered</div>
      <div className={Styles.sponseredPlaceholder}></div>
    </div>
  );
};

export default Sponsered;
