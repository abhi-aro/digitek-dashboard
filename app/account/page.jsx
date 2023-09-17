"use client";

import React, { useEffect, useState } from "react";
import Styles from "../../Styles/Account/Account.module.css";
import { v4 as uuidv4 } from "uuid";
import { api_UpdateUser } from "../api/Authentication";
import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();

  const [userInfo, setUserInfo] = useState([
    {
      key: "country_code",
      type: "text",
      label: "Country Code",
      value: "",
      placeholder: "+91",
    },
    {
      key: "mobile_no",
      type: "number",
      label: "Mobile Number",
      value: "",
      placeholder: "12345 67890",
    },
    {
      key: "company_name",
      type: "text",
      label: "Company Name",
      value: "",
      placeholder: "digitek",
    },
    {
      key: "company_domain",
      type: "text",
      label: "Company Domain",
      value: "",
      placeholder: "www.digitekservice.com",
    },
    {
      key: "company_sub_domain",
      type: "text",
      label: "Company Sub Domain",
      value: "",
      placeholder: "dashboard.digitekservice.com",
    },
    {
      key: "company_size",
      type: "number",
      label: "Company Size",
      value: "",
      placeholder: "8",
    },
    {
      key: "yearly_revenue",
      type: "number",
      label: "Yearly Revenue",
      value: "",
      placeholder: "10,00,00,000",
    },
    {
      key: "purpose_of_utility",
      type: "text",
      label: "Purpose of Utility",
      value: "",
      placeholder: "SEO",
    },
    {
      key: "email",
      type: "text",
      label: "Email",
      value: "",
      placeholder: "support@digitekservice.com",
    },
  ]);

  useEffect(() => {
    (async () => {
      const response = await api_UpdateUser({
        data: { email: session?.user?.email },
      });

      const resbody = response?.data?.body?.data;

      setUserInfo((prev) => {
        const newUserInfo = prev?.map((el) => {
          return { ...el, value: resbody?.[el?.key] };
        });

        return [...newUserInfo];
      });
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let data = {};

    userInfo?.forEach((el) => {
      data = {
        ...data,
        [el?.key]: formData.get(el?.key),
        email: session?.user?.email,
      };
    });
    const response = await api_UpdateUser({ data });
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.formWrapper} onSubmit={handleSubmit}>
        {userInfo?.map((el) => {
          return <FormInput key={uuidv4()} data={el} />;
        })}
        <button className={Styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ data }) => {
  const [value, setValue] = useState(data?.value || "");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={Styles.inputContainer}>
      <label htmlFor={data?.key} className={Styles.label}>
        {data?.label}
      </label>
      <input
        type={data?.type}
        id={data?.key}
        disabled={data?.key == "email"}
        name={data?.key}
        placeholder={data?.placeholder}
        value={value}
        onChange={handleValueChange}
        className={Styles.input}
      />
    </div>
  );
};

export default Account;
