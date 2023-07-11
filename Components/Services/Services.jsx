import React from "react";
import Styles from "../../Styles/Services/Services.module.css";
import { v4 as uuidv4 } from "uuid";

const Services = () => {
  const servicesData = [
    "SEO",
    "SEM",
    "SMM",
    "HRMS",
    "Website & More",
    "Content Creation",
    "Creative & More",
    "Influencer Marketing",
    "Business Incorporation",
    "Taxation",
    "Accounts Management",
    "Investments & More",
    "Application Development",
  ];
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>Services</div>
      <div className={Styles.container}>
        {servicesData.map((item, ind) => {
          return <ServiceItem key={uuidv4()} data={item} />;
        })}
      </div>
    </div>
  );
};

const ServiceItem = ({ key, data }) => {
  return (
    <div key={key} className={Styles.item}>
      {data}
    </div>
  );
};

export default Services;
