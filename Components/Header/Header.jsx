"use client";

import React from "react";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Services from "../Services/Services";
import Styles from "../../Styles/Header/Header.module.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [servicesOpened, setServicesOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
    setServicesOpened(false);
  };

  const toggleServices = () => {
    setMenuOpened(false);
    setServicesOpened((prev) => !prev);
  };

  return (
    <div className={Styles.menuWrapper}>
      <div
        className={`${Styles.menuClosed} ${menuOpened && Styles.menuOpened}`}
      >
        <Menu />
      </div>
      <div
        className={`${Styles.servicesClosed} ${
          servicesOpened && Styles.servicesOpened
        }`}
      >
        <Services />
      </div>
      <div className={Styles.headerIcons}>
        <MenuIcon
          type={"menu"}
          opened={menuOpened}
          setOpened={setMenuOpened}
          toggleOpened={toggleMenu}
        />
        {/* <MenuIcon
          type={"service"}
          opened={servicesOpened}
          setOpened={setServicesOpened}
          toggleOpened={toggleServices}
        /> */}
      </div>
    </div>
  );
};

const MenuIcon = ({ type, opened, toggleOpened }) => {
  return (
    <div
      className={`${Styles.iconContainer} ${
        opened == true ? Styles.opened : Styles.closed
      } ${type == "menu" && Styles.menuIcon} ${
        type == "service" && Styles.serviceIcon
      }`}
      onClick={toggleOpened}
    >
      <div className={Styles.iconLine}></div>
      <div className={Styles.iconLine}></div>
      <div className={Styles.iconLine}></div>
    </div>
  );
};

export default Header;
