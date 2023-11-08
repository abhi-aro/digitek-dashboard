"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { api_UpdateUser } from "../api/Authentication";
import Styles from "../../Styles/Account/Account.module.css";

const Account = () => {
  const { data: session } = useSession();

  const [data, setData] = useState({});
  console.debug(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await api_UpdateUser({
      data: { email: session?.user?.email },
    });
    if (response?.data?.body?.stage == 0) {
      redirect("/formData");
    } else {
      setData(response?.data?.body?.data);
    }
  };

  return (
    <div className={Styles.accMainContainer}>
      <div className={Styles.detailsHead}>Details</div>
      <div className={Styles.det1Main}>
        <div className={Styles.det1Head1}>Company Name:</div>
        <div className={Styles.det1Head2}>{data?.company_name}</div>
      </div>
      <div className={Styles.det1Main}>
        <div className={Styles.det1Head1}>Registeration Code:</div>
        <div className={Styles.det1Head2}>{data?.registration_code}</div>
      </div>
      <div className={Styles.det1Main}>
        <div className={Styles.det1Head1}>Email:</div>
        <div className={Styles.det1Head2}>{data?.email}</div>
      </div>
      <div className={Styles.det1Main}>
        <div className={Styles.det1Head1}>Company Size:</div>
        <div className={Styles.det1Head2}>{data?.company_size}</div>
      </div>
    </div>
  );
};

export default Account;
