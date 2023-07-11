"use client";

import React, { useEffect, useState } from "react";
import Styles from "../../Styles/Menu/Menu.module.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Menu = () => {
  const menuData = [
    { text: "Home", link: "/" },
    { text: "My Account", link: "/account" },
    { text: "My Digital Assets", link: "/assets" },
    { text: "My Wallet", link: "/wallet" },
    { text: "My Requirement", link: "/requirement" },
    { text: "My Analytics", link: "/analytics" },
    { text: "My Advertisements", link: "/advertisements" },
    { text: "List My Business", link: "/listing" },
    { text: "Promote My Service", link: "/promote" },
    { text: "My Assistant", link: "/assistant" },
    { text: "My Integrations", link: "/integrations" },
  ];
  return (
    <div className={Styles.container}>
      {menuData.map((item, ind) => {
        return <MenuItem data={item} />;
      })}
    </div>
  );
};

const MenuItem = ({ data }) => {
  const pathName = usePathname();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(pathName === data?.link);
  }, [pathName]);

  return (
    <Link
      href={data?.link}
      className={`${Styles.item} ${selected == true && Styles.selectedItem}`}
    >
      {data?.text}
    </Link>
  );
};

export default Menu;
