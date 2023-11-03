import React, { useState } from "react";
import Styles from "../../Styles/TeamRequired/TeamRequired.module.css";
import { getSessionStorageData } from "../Session";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const TeamRequired = ({ router }) => {
  const [paymentModal, setPaymentModal] = useState(false);
  const allocation = getSessionStorageData("availableAllocation");
  console.debug(allocation);
  const askForPayment = () => {
    setPaymentModal(true);
  };
  return (
    <>
      <PaymentModal
        paymentModal={paymentModal}
        setPaymentModal={setPaymentModal}
      />
      <div className={Styles.teamMainContainer}>
        <div className={Styles.typeHead}>{router?.split("/")[2]}</div>
        <div className={Styles.totalAvivility}>
          Total availability : {allocation?.length}
        </div>
        <div className={Styles.teamComponent}>
          {allocation?.length > 0 &&
            allocation?.map((data) => (
              <div className={Styles.eachCOntainer}>
                <div className={Styles.layer1}>
                  <div className={Styles.layer11}>
                    <LocationOnIcon />
                    <span>{data?.location}</span>
                  </div>
                  <div className={Styles.layer11}>
                    <StarIcon />
                    <span>{data?.rating}</span>
                  </div>
                </div>
                <div className={Styles.layer2}>
                  <div className={Styles.layer21}>Position:</div>
                  <div className={Styles.layer22}>{data?.position}</div>
                </div>
                <div className={Styles.layer2}>
                  <div className={Styles.layer21}>Experience:</div>
                  <div className={Styles.layer22}>
                    {data?.total_experiance} years
                  </div>
                </div>
                <div className={Styles.layer2}>
                  <div className={Styles.layer21}>Level:</div>
                  <div className={Styles.layer22}>{data?.level}</div>
                </div>
                <div className={Styles.borderBottomArea}></div>
                <div className={Styles.layer2}>
                  <div className={Styles.layer21}>Ticket Completed:</div>
                  <div className={Styles.layer22}>
                    {data?.tickets_completed}
                  </div>
                </div>
                <div className={Styles.pricingHead}>Pricing:- </div>
                <div className={Styles.layer2}>
                  <div className={Styles.layer21}>Daily:</div>
                  <div className={Styles.layer22}>₹{data?.cost_per_day}</div>
                </div>
                <div className={Styles.layer2}>
                  <div className={Styles.layer21}>Monthly:</div>
                  <div className={Styles.layer22}>₹{data?.cost_per_month}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
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
    <div className={Styles.payT1} onClick={closeModal}>
      <div className={Styles.payT2} onClick={(e) => e.stopPropagation()}>
        {paid == true ? (
          <div className={Styles.payT3}>{paymentStatus}</div>
        ) : (
          <div className={Styles.payT4} onClick={paymentRedirect}>
            Click me to pay
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamRequired;
