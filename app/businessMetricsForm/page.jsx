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
    useState(null);
  const [customer_lifetime_value_, setcustomer_lifetime_value_] =
    useState(null);
  const [average_order_value_, setaverage_order_value_] = useState(null);
  const [gross_margin, setgross_margin] = useState(null);
  const [net_promoter_score, setnet_promoter_score] = useState(null);
  const [abandoned_cart_rate, setabandoned_cart_rate] = useState(null);
  const [churn_rate, setchurn_rate] = useState(null);
  const [conversion_rate, setconversion_rate] = useState(null);
  const [inventory_turnover_rate, setinventory_turnover_rate] = useState(null);
  const [new_customer_acquisition_cost, setnew_customer_acquisition_cost] =
    useState(null);
  const [product_return_rate, setproduct_return_rate] = useState(null);
  const [repeat_purchase_rate, setrepeat_purchase_rate] = useState(null);
  const [retention_rate, setretention_rate] = useState(null);
  const [return_on_advertising_spend, setreturn_on_advertising_spend] =
    useState(null);
  const [user_traffic, setuser_traffic] = useState(null);
  const [email, setemail] = useState(null);

  useEffect(() => {
    setemail(session?.user?.email);
  }, [session]);

  const submitButton = async () => {
    const response = await api_BusinessMetricForm({
      customer_acquisition_cost_,
      customer_lifetime_value_,
      average_order_value_,
      gross_margin,
      net_promoter_score,
      abandoned_cart_rate,
      churn_rate,
      conversion_rate,
      inventory_turnover_rate,
      new_customer_acquisition_cost,
      product_return_rate,
      repeat_purchase_rate,
      retention_rate,
      return_on_advertising_spend,
      user_traffic,
      email,
    });
    router.push("/");
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.formWrapper}>
        <label
          htmlFor="customer_acquisition_cost_"
          className={Styles.inputContainer}
        >
          <span className={Styles.label}>Customer acquisition cost</span>
          <input
            className={Styles.input}
            value={customer_acquisition_cost_}
            onChange={(e) => setcustomer_acquisition_cost_(e.target.value)}
            type="text"
            id="customer_acquisition_cost_"
          />
        </label>
        <label
          htmlFor="customer_lifetime_value_"
          className={Styles.inputContainer}
        >
          <span className={Styles.label}>Customer lifetime value</span>
          <input
            className={Styles.input}
            value={customer_lifetime_value_}
            onChange={(e) => setcustomer_lifetime_value_(e.target.value)}
            type="text"
            id="customer_lifetime_value_"
          />
        </label>
        <label htmlFor="average_order_value_" className={Styles.inputContainer}>
          <span className={Styles.label}>Average order value</span>
          <input
            className={Styles.input}
            value={average_order_value_}
            onChange={(e) => setaverage_order_value_(e.target.value)}
            type="text"
            id="average_order_value_"
          />
        </label>
        <label htmlFor="gross_margin" className={Styles.inputContainer}>
          <span className={Styles.label}>Gross Margin</span>
          <input
            className={Styles.input}
            value={gross_margin}
            onChange={(e) => setgross_margin(e.target.value)}
            type="text"
            id="gross_margin"
          />
        </label>
        <label htmlFor="net_promoter_score" className={Styles.inputContainer}>
          <span className={Styles.label}>Net promoter score</span>
          <input
            className={Styles.input}
            value={net_promoter_score}
            onChange={(e) => setnet_promoter_score(e.target.value)}
            type="text"
            id="net_promoter_score"
          />
        </label>
        <label htmlFor="abandoned_cart_rate" className={Styles.inputContainer}>
          <span className={Styles.label}>Abandoned cart rate</span>
          <input
            className={Styles.input}
            value={abandoned_cart_rate}
            onChange={(e) => setabandoned_cart_rate(e.target.value)}
            type="text"
            id="abandoned_cart_rate"
          />
        </label>
        <label htmlFor="churn_rate" className={Styles.inputContainer}>
          <span className={Styles.label}>Churn rate</span>
          <input
            className={Styles.input}
            value={churn_rate}
            onChange={(e) => setchurn_rate(e.target.value)}
            type="text"
            id="churn_rate"
          />
        </label>
        <label htmlFor="conversion_rate" className={Styles.inputContainer}>
          <span className={Styles.label}>Conversion rate</span>
          <input
            className={Styles.input}
            value={conversion_rate}
            onChange={(e) => setconversion_rate(e.target.value)}
            type="text"
            id="conversion_rate"
          />
        </label>
        <label
          htmlFor="inventory_turnover_rate"
          className={Styles.inputContainer}
        >
          <span className={Styles.label}>Inventory turnover rate</span>
          <input
            className={Styles.input}
            value={inventory_turnover_rate}
            onChange={(e) => setinventory_turnover_rate(e.target.value)}
            type="text"
            id="inventory_turnover_rate"
          />
        </label>
        <label
          htmlFor="new_customer_acquisition_cost"
          className={Styles.inputContainer}
        >
          <span className={Styles.label}>New customer acquisition cost</span>
          <input
            className={Styles.input}
            value={new_customer_acquisition_cost}
            onChange={(e) => setnew_customer_acquisition_cost(e.target.value)}
            type="text"
            id="new_customer_acquisition_cost"
          />
        </label>
        <label htmlFor="product_return_rate" className={Styles.inputContainer}>
          <span className={Styles.label}>Product return rate</span>
          <input
            className={Styles.input}
            value={product_return_rate}
            onChange={(e) => setproduct_return_rate(e.target.value)}
            type="text"
            id="product_return_rate"
          />
        </label>
        <label htmlFor="repeat_purchase_rate" className={Styles.inputContainer}>
          <span className={Styles.label}>Repeat purchase rate</span>
          <input
            className={Styles.input}
            value={repeat_purchase_rate}
            onChange={(e) => setrepeat_purchase_rate(e.target.value)}
            type="text"
            id="repeat_purchase_rate"
          />
        </label>
        <label htmlFor="retention_rate" className={Styles.inputContainer}>
          <span className={Styles.label}>Retention rate</span>
          <input
            className={Styles.input}
            value={retention_rate}
            onChange={(e) => setretention_rate(e.target.value)}
            type="text"
            id="retention_rate"
          />
        </label>
        <label
          htmlFor="return_on_advertising_spend"
          className={Styles.inputContainer}
        >
          <span className={Styles.label}>Return on advertising spend</span>
          <input
            className={Styles.input}
            value={return_on_advertising_spend}
            onChange={(e) => setreturn_on_advertising_spend(e.target.value)}
            type="text"
            id="return_on_advertising_spend"
          />
        </label>
        <label htmlFor="user_traffic" className={Styles.inputContainer}>
          <span className={Styles.label}>User traffic</span>
          <input
            className={Styles.input}
            value={user_traffic}
            onChange={(e) => setuser_traffic(e.target.value)}
            type="text"
            id="user_traffic"
          />
        </label>
        <label htmlFor="email" className={Styles.inputContainer}>
          <span className={Styles.label}>Email</span>
          <input
            className={Styles.input}
            value={email}
            disabled={true}
            type="text"
            id="email"
          />
        </label>
        <button className={Styles.submitButton} onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BusinessMetricsForm;
