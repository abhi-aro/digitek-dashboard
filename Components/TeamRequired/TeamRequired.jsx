import React, { useState } from "react";
import Styles from "../../Styles/TeamRequired/TeamRequired.module.css";

const data = [
  {
    id: "1",
    name: "Single Developer",
    availble: "2 developer available Now",
    benefits: [
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: "2",
    name: "Required Team",
    availble: "5 Teams available Now",
    benefits: [
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        points: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
];

const TeamRequired = ({ router }) => {
  const [paymentModal, setPaymentModal] = useState(false);
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
        <div className={Styles.teamComponent}>
          {data?.map((ele) => (
            <div className={Styles.container}>
              <div className={Styles.detailsContainer}>
                <div className={Styles.teamHead}>{ele?.name}</div>
                <div className={Styles.availablilty}>
                  <div className={Styles.avivHead}>Availability:</div>
                  <div className={Styles.avilList}>{ele?.availble}</div>
                </div>
                <div className={Styles.benefitSection}>
                  <div className={Styles.benefitText}>Benefit:</div>
                  <div className={Styles.benefitList}>
                    {ele?.benefits?.map((elem) => (
                      <div className={Styles.eachBenefit}>
                        <img
                          src="/images/tick.png"
                          alt=""
                          style={{ height: "10px", width: "10px" }}
                        />
                        <div>{elem?.points}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={askForPayment}
                className={Styles.proceedPayButton}
              >
                Proceed to Pay
              </button>
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
