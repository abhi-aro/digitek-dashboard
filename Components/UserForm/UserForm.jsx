import React, { useEffect, useState } from "react";
import Styles from "../../Styles/FormData/UserForm.module.css";
import { api_UpdateUser, api_UpdateUser2 } from "../../app/api/Authentication";
import {
  api_CompanySize,
  api_fetchUtility,
  api_priceRange,
} from "../../app/api/Communication";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const UserForm = ({ data, router }) => {
  const [selectedType, setSelectedType] = useState(0);
  return (
    <>
      <div className={Styles.mainContainer}>
        <div className={Styles.serviceProviderSelector}>
          <div
            onClick={(e) => setSelectedType(0)}
            className={
              selectedType === 0 ? Styles.textActive : Styles.normalText
            }
          >
            I need a service provider
          </div>
          <div
            onClick={(e) => setSelectedType(1)}
            className={
              selectedType === 1 ? Styles.textActive : Styles.normalText
            }
          >
            I am a service provider
          </div>
        </div>
        <FormInput1 router={router} selectedType={selectedType} />
      </div>
    </>
  );
};

const FormInput1 = ({ router, selectedType }) => {
  const [pNumber, setPNumber] = useState("");
  const [countryCode, setCOuntryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [cName, setCName] = useState("");
  const [cType, setCType] = useState("");
  const [csType, setCSType] = useState("");
  const [regCode, setRegCode] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [revenue, setRevenue] = useState("");
  const [curUtility, setCurUtility] = useState(false);
  const [show, setShow] = useState(false);
  const [utility, setUtility] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [suggest, setSuggest] = useState([]);
  const [removed, setRemoved] = useState([]);
  const [size, setSize] = useState([]);

  const [priceRange, setPriceRange] = useState([]);
  console.debug(priceRange);

  const handleSubmit = async () => {
    let payload = {
      user_type: selectedType,
      country_code: countryCode,
      mobile_no: pNumber,
      company_name: cName,
      company_domain: cType,
      company_sub_domain: csType,
      company_size: companySize,
      registration_code: regCode,
      yearly_revenue: revenue,
      purpose_of_utility: utility,
      email: email,
    };
    if (selectedType === 0) {
      const response = await api_UpdateUser({ data: payload });
      if (response?.data?.body?.stage === 1) {
        router.push("/businessMetricsForm");
      }
    } else {
      const response = await api_UpdateUser2({ data: payload });
      if (response?.data?.body?.stage === 1) {
        router.push("/");
      }
    }
  };

  useEffect(() => {
    handleFetchService();
    handleFetchCompanySize();
    handleFetchPriceRange();
  }, [utility]);

  const handleFetchCompanySize = async () => {
    let data = await api_CompanySize();
    setSize(data?.data?.body);
  };

  const handleFetchService = async () => {
    let data = await api_fetchUtility();
    setSuggest(data?.data?.body);
  };
  const handleFetchPriceRange = async () => {
    let data = await api_priceRange();
    setPriceRange(data?.data?.body);
  };

  const handleselectSize = (ele) => {
    setCompanySize(ele);
  };
  const handleUtility = (ele) => {
    if (removed.includes(ele)) {
      const index = removed.indexOf(ele);
      if (index > -1) {
        removed.splice(index, 1);
      }
    }
    if (utility.includes(ele)) {
      setCurUtility(false);
      return;
    }
    setUtility((prev) => [...prev, ele]);
    setCurUtility(false);
  };

  const handleRemove = (ele) => {
    setRemoved((prev) => [...prev, ele]);
    const index = utility.indexOf(ele);
    if (index > -1) {
      utility.splice(index, 1);
    }
  };

  return (
    <div className={Styles.formInputCOntainer}>
      <input
        className={Styles.inputBox}
        type="tel"
        maxLength={10}
        placeholder="Phone Number"
        onChange={(e) => setPNumber(e.target.value)}
        value={pNumber}
      />

      <input
        className={Styles.inputBox}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        value={email}
      />
      <input
        className={Styles.inputBox}
        type="text"
        placeholder="Company Name"
        onChange={(e) => setCName(e.target.value)}
        value={cName}
      />
      <input
        className={Styles.inputBox}
        type="text"
        placeholder="Company Type"
        onChange={(e) => setCType(e.target.value)}
        value={cType}
      />
      <input
        className={Styles.inputBox}
        type="text"
        placeholder="Company Sub Type"
        onChange={(e) => setCSType(e.target.value)}
        value={csType}
      />
      <input
        className={Styles.inputBox}
        type="text"
        placeholder="Registration Code"
        onChange={(e) => setRegCode(e.target.value)}
      />
      {/* <input
        className={Styles.inputBox}
        onChange={(e) => setRevenue(e.target.value)}
        type="text"
        placeholder="Revenue"
        value={revenue}
      /> */}

      <div
        style={{ marginLeft: "45px", marginBottom: "10px" }}
        className={Styles.companySizeCont}
      >
        <div>Revenue :</div>
        <Dropdown>
          <MenuButton
            style={{ color: "white" }}
            className={Styles.companySizeBUtton}
          >
            {revenue || "Select Revenue"}
          </MenuButton>
          <Menu>
            {priceRange?.map((ele) => (
              <MenuItem onClick={() => setRevenue(ele)}>{ele}</MenuItem>
            ))}
          </Menu>
        </Dropdown>
      </div>
      <div className={Styles.companySizeCont}>
        <div>Company Size :</div>
        <Dropdown>
          <MenuButton
            style={{ color: "white" }}
            className={Styles.companySizeBUtton}
          >
            {companySize || "Microenterprise (1-9 employees)"}
          </MenuButton>
          <Menu>
            {size?.map((ele) => (
              <MenuItem onClick={() => handleselectSize(ele)}>{ele}</MenuItem>
            ))}
          </Menu>
        </Dropdown>
      </div>
      <div className={Styles.companySizeCont2}>
        <div>Select {selectedType === 1 ? "Services" : "Utility"} :</div>
        <Dropdown>
          <MenuButton
            style={{ color: "white" }}
            className={Styles.companySizeBUtton}
          >
            Please Select the options
          </MenuButton>
          <Menu sx={{ height: "400px", overflowY: "scroll" }}>
            {suggest?.map((ele) => (
              <MenuItem onClick={() => handleUtility(ele)}>{ele}</MenuItem>
            ))}
          </Menu>
        </Dropdown>
      </div>
      {utility.length > 0 && (
        <div className={Styles.utilityMain}>
          {utility?.map((ele) => (
            <div
              className={
                !removed.includes(ele)
                  ? Styles.selectedElements
                  : Styles.selectedElements2
              }
            >
              <CloseIcon onClick={() => handleRemove(ele)} />
              <span>{ele}</span>
            </div>
          ))}
        </div>
      )}
      <div onClick={handleSubmit} className={Styles.submitButton}>
        Submit
      </div>
    </div>
  );
};

export default UserForm;
