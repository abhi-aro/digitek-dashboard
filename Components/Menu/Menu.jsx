import React from "react";
import Styles from "@/Styles/Menu/Menu.module.css";
import { v4 as uuidv4 } from "uuid";

const Menu = () => {
	const menuData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	return (
		<div className={Styles.container}>
			{menuData.map((el, ind) => {
				return <MenuItem key={uuidv4()} />;
			})}
		</div>
	);
};

const MenuItem = ({ key }) => {
	return (
		<div key={key} className={Styles.item}>
			Item
		</div>
	);
};

export default Menu;
