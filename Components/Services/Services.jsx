"use client";

import React, { useState } from "react";
import Styles from "../../Styles/Services/Services.module.css";
import { v4 as uuidv4 } from "uuid";

const Services = () => {
  const [paymentModal, setPaymentModal] = useState(false);

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
    <>
      <PaymentModal
        paymentModal={paymentModal}
        setPaymentModal={setPaymentModal}
      />
      <div className={Styles.wrapper}>
        <div className={Styles.header}>Services</div>
        <div className={Styles.container}>
          {servicesData.map((item, ind) => {
            return (
              <ServiceItem
                key={uuidv4()}
                data={item}
                setPaymentModal={setPaymentModal}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const ServiceItem = ({ data, setPaymentModal }) => {
  const askForPayment = () => {
    setPaymentModal(true);
  };

  return (
    <div key={uuidv4()} className={Styles.item} onClick={askForPayment}>
      {data}
    </div>
  );
};

const PaymentModal = ({ paymentModal, setPaymentModal }) => {
  const [paid, setPaid] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const closeModal = () => {
    setPaymentModal(false);
  };

  const paymentRedirect = (e) => {
    e.stopPropagation();
    setPaid(true);
    setPaymentStatus("Payment Successful");
    setTimeout(() => {
      setPaymentStatus("Redirecting to {INVALID SITE}");
    }, 2000);
    setTimeout(() => {
      setPaymentStatus("JK 😁");
    }, 3000);
    setTimeout(() => {
      setPaymentStatus("Redirecting to UV desk");
      window.location.href =
        "http://service.digitekservice.com/helpdesk-project/public/en/member/login";
    }, 4000);
  };

  return paymentModal == false ? (
    <></>
  ) : (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        width: "100dvw",
        background: "rgba(0,0,0, 0.5)",
      }}
      onClick={closeModal}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          maxHeight: "40vh",
          width: "100%",
          maxWidth: "40vw",
          background: "#343540",
          borderRadius: "12px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {paid == true ? (
          <>
            <div
              style={{
                padding: "20px",
                background: "rgba(75,181,67, 0.8)",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              {paymentStatus}
            </div>
          </>
        ) : (
          <div
            style={{
              padding: "20px",
              background: "rgba(0,0,0,.5)",
              borderRadius: "12px",
              cursor: "pointer",
            }}
            onClick={paymentRedirect}
          >
            Click me to pay
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
