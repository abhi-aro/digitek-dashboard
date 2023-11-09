"use client";

import React, { useEffect, useState } from "react";
import Styles from "../../Styles/Services/Services.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  api_fetchService,
  api_getAllocation,
} from "../../app/api/Communication";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { setSessionStorageData } from "../Session";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  // bgcolor: "rgb(63, 64, 75)",
  // border: "2px solid rgb(63, 64, 75)",
  boxShadow: 24,
  outline: 0,
  pt: 2,
  px: 4,
  pb: 3,
};

const Services = () => {
  const router = useRouter();
  const [serviceData, setServiceData] = useState({});
  const [serviceL1, setServiceL1] = useState([]);
  const [serviceModal, setServiceModal] = useState(false);
  const [valueL1, setValue1] = useState("");
  const [valueL2, setValue2] = useState("");

  const handleProceedToTimeSelection = ({ value1, value2 }) => {
    if (value1 === "" || value2 === "") return;
    setValue1(value1);
    setValue2(value2);
    setServiceModal(true);
  };

  const fetchData = async () => {
    let data = await api_fetchService();
    setServiceData(data?.data?.body);
    let keys = Object.keys(data?.data?.body);
    setServiceL1(keys);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setServiceModal(false);
  };

  const handleProceedAllocation = async (time) => {
    let payload = {
      top_funnel: valueL1,
      top_funnels_domains: valueL2,
      time: time,
    };

    let result = await api_getAllocation({ data: payload });
    if (result?.data?.body.length > 0) {
      setSessionStorageData("availableAllocation", result?.data?.body);
      setSessionStorageData("timePeriod", result?.data?.time);
      handleCloseModal();
      router.push(`/teamType/${valueL2}`);
    }
  };

  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.header}>Services</div>
        <div className={Styles.container}>
          {serviceL1?.map((ele) => (
            <Accordion style={{}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  background: "rgb(63, 64, 75)",
                  color: "white",
                  outline: "0px",
                  border: "1px solid #343540",
                }}
              >
                <Typography>{ele}</Typography>
              </AccordionSummary>
              <AccordionDetails className={Styles.accodianMain}>
                {serviceData[ele]?.map((data) => (
                  <div
                    onClick={() =>
                      handleProceedToTimeSelection({
                        value1: ele,
                        value2: data,
                      })
                    }
                    className={Styles.eachElement}
                  >
                    {data}
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <div className={Styles.modalTop}>
        <Modal
          open={serviceModal}
          onClose={handleCloseModal}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: "100%" }}>
            <div className={Styles.modalContainer}>
              <div className={Styles.closeIcon}>
                <HighlightOffIcon onClick={handleCloseModal} />
              </div>
              <div className={Styles.valueContainer}>
                <span>{valueL1}</span>
                <span>{">"}</span>
                <span>{valueL2}</span>
              </div>
              <div className={Styles.buttonIcon}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>Shared Resource</div>
                  <div
                    onClick={() => handleProceedAllocation(8)}
                    className={Styles.timeButton}
                  >
                    <span>Time Less then </span>
                    <span>8 Hours</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>Dedicated Resource</div>
                  <div
                    onClick={() => handleProceedAllocation(9)}
                    className={Styles.timeButton}
                  >
                    <span>Time More then </span>
                    <span>8 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Services;
