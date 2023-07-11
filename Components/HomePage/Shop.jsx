import React from "react";
import Styles from "@/Styles/HomePage/Index.module.css";
import { v4 as uuidv4 } from "uuid";

const Shop = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={Styles.shopContainer}>
      <div className={Styles.header}>Shop</div>
      <div className={Styles.shopList}>
        {items.map((item, ind) => {
          return <ShopItem key={uuidv4()} />;
        })}
      </div>
    </div>
  );
};

const ShopItem = ({ key }) => {
  return (
    <div key={key} className={Styles.shopItem}>
      Item
    </div>
  );
};

export default Shop;
