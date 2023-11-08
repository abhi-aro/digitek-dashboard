"use client";

import { useEffect, useState } from "react";
import Styles from "../../Styles/BusinessMetricsForm/BusinessMetricsForm.module.css";
import { useSession } from "next-auth/react";
import { api_BusinessMetricForm } from "../api/Authentication";
import { useRouter } from "next/navigation";

const BusinessMetricsForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [customer_acquisition_cost_, setcustomer_acquisition_cost_] =
    useState("");
  const [customer_lifetime_value_, setcustomer_lifetime_value_] = useState("");
  const [average_order_value_, setaverage_order_value_] = useState("");
  const [gross_margin, setgross_margin] = useState("");
  const [net_promoter_score, setnet_promoter_score] = useState("");
  const [abandoned_cart_rate, setabandoned_cart_rate] = useState("");
  const [churn_rate, setchurn_rate] = useState("");
  const [conversion_rate, setconversion_rate] = useState("");
  const [inventory_turnover_rate, setinventory_turnover_rate] = useState("");
  const [new_customer_acquisition_cost, setnew_customer_acquisition_cost] =
    useState("");
  const [product_return_rate, setproduct_return_rate] = useState("");
  const [repeat_purchase_rate, setrepeat_purchase_rate] = useState("");
  const [retention_rate, setretention_rate] = useState("");
  const [return_on_advertising_spend, setreturn_on_advertising_spend] =
    useState("");
  const [user_traffic, setuser_traffic] = useState("");
  const [email, setemail] = useState("");

  useEffect(() => {
    setemail(session?.user?.email);
  }, [session]);

  const submitButton = async () => {
    let payload = {
      customer_acquisition_cost_: customer_acquisition_cost_,
      customer_lifetime_value_: customer_lifetime_value_,
      average_order_value_: average_order_value_,
      gross_margin: gross_margin,
      net_promoter_score: net_promoter_score,
      abandoned_cart_rate: abandoned_cart_rate,
      churn_rate: churn_rate,
      conversion_rate: conversion_rate,
      inventory_turnover_rate: inventory_turnover_rate,
      new_customer_acquisition_cost: new_customer_acquisition_cost,
      product_return_rate: product_return_rate,
      repeat_purchase_rate: repeat_purchase_rate,
      retention_rate: retention_rate,
      return_on_advertising_spend: return_on_advertising_spend,
      user_traffic: user_traffic,
      email: email,
    };

    const response = await api_BusinessMetricForm({ data: payload });
    console.debug(response);
    if (response?.data?.body?.success) {
      router.push("/");
    } else {
      alert("Something went wrong please try after some time");
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.formWrapper}>
        <input
          className={Styles.inputBox}
          value={customer_acquisition_cost_}
          onChange={(e) => setcustomer_acquisition_cost_(e.target.value)}
          type="text"
          placeholder="Customer acquisition cost"
        />
        <input
          className={Styles.inputBox}
          value={customer_lifetime_value_}
          onChange={(e) => setcustomer_lifetime_value_(e.target.value)}
          type="text"
          placeholder="Customer lifetime value"
        />
        <input
          className={Styles.inputBox}
          value={average_order_value_}
          onChange={(e) => setaverage_order_value_(e.target.value)}
          type="text"
          placeholder="Average order value"
        />
        <input
          className={Styles.inputBox}
          value={gross_margin}
          onChange={(e) => setgross_margin(e.target.value)}
          type="text"
          placeholder="Gross Margin"
        />
        <input
          className={Styles.inputBox}
          value={net_promoter_score}
          onChange={(e) => setnet_promoter_score(e.target.value)}
          type="text"
          placeholder="Net promoter score"
        />
        <input
          className={Styles.inputBox}
          value={abandoned_cart_rate}
          onChange={(e) => setabandoned_cart_rate(e.target.value)}
          type="text"
          placeholder="Abandoned cart rate"
        />
        <input
          className={Styles.inputBox}
          value={churn_rate}
          onChange={(e) => setchurn_rate(e.target.value)}
          type="text"
          placeholder="Churn rate"
        />
        <input
          className={Styles.inputBox}
          value={conversion_rate}
          onChange={(e) => setconversion_rate(e.target.value)}
          type="text"
          placeholder="Conversion rate"
        />
        <input
          className={Styles.inputBox}
          value={inventory_turnover_rate}
          onChange={(e) => setinventory_turnover_rate(e.target.value)}
          type="text"
          placeholder="Inventory turnover rate"
        />
        <input
          className={Styles.inputBox}
          value={new_customer_acquisition_cost}
          onChange={(e) => setnew_customer_acquisition_cost(e.target.value)}
          type="text"
          placeholder="New customer acquisition cost"
        />
        <input
          className={Styles.inputBox}
          value={product_return_rate}
          onChange={(e) => setproduct_return_rate(e.target.value)}
          type="text"
          placeholder="Product return rate"
        />
        <input
          className={Styles.inputBox}
          value={repeat_purchase_rate}
          onChange={(e) => setrepeat_purchase_rate(e.target.value)}
          type="text"
          placeholder="Repeat purchase rate"
        />
        <input
          className={Styles.inputBox}
          value={retention_rate}
          onChange={(e) => setretention_rate(e.target.value)}
          type="text"
          placeholder="Retention rate"
        />
        <input
          className={Styles.inputBox}
          value={return_on_advertising_spend}
          onChange={(e) => setreturn_on_advertising_spend(e.target.value)}
          type="text"
          placeholder="Return on advertising spend"
        />
        <input
          className={Styles.inputBox}
          value={user_traffic}
          onChange={(e) => setuser_traffic(e.target.value)}
          type="text"
          placeholder="User traffic - Monthly"
        />
        <input
          className={Styles.inputBox}
          value={email}
          disabled={true}
          type="text"
          id="email"
        />
        <button className={Styles.submitButton} onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BusinessMetricsForm;
