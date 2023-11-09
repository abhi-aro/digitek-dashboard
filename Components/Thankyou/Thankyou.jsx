import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Styles from "../../Styles/Thankyou/Thankyou.module.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className={Styles.oppsText}>OOPS!!!!</div>;
  }

  return (
    <div className={Styles.timerCont}>
      <div className="value">{remainingTime}</div>
    </div>
  );
};

const Thankyou = () => {
  return (
    <div className={Styles.mainThanksCOntainer}>
      <div className={Styles.ticketCreated}>
        Your Ticket has been created successfully
      </div>
      <CountdownCircleTimer
        style={{ background: "red" }}
        key={"digi"}
        isPlaying
        duration={100}
        colors={"#616161"}
        background={"red"}
        onComplete={() => [true, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
      <div className={Styles.ticketCreated}>
        Please join the meeting our consultant will connect in maximum 10x  
        minutes
      </div>
      <a
        href="https://meet.google.com/dfh-datk-ctg"
        className={Styles.joinNowBtn}
      >
        Join Now
      </a>
    </div>
  );
};

export default Thankyou;
