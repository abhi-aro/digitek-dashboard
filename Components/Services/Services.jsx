import React from "react";
import Styles from "@/Styles/Services/Services.module.css";
import { v4 as uuidv4 } from "uuid";

const Services = () => {
	const servicesData = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
	];
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.header}>Services</div>
			<div className={Styles.container}>
				{servicesData.map((el, ind) => {
					return <ServiceItem key={uuidv4()} />;
				})}
			</div>
		</div>
	);
};

const ServiceItem = ({ key }) => {
	return (
		<div key={key} className={Styles.item}>
			Item
		</div>
	);
};

export default Services;
