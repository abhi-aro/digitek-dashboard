import React, { useState } from "react";
import Styles from "../../Styles/Language/Language.module.css";
import { setSessionStorageData } from "../Session";
import { useRouter } from "next/navigation";

const data = [
  {
    id: "1",
    lang: "English",
  },
  {
    id: "2",
    lang: "Hindi",
  },
  {
    id: "3",
    lang: "Arabic",
  },
  {
    id: "4",
    lang: "French",
  },
];

const LanguageComponent = () => {
  const router2 = useRouter();
  const [selectLangauage, setSelectLanguage] = useState("");
  const handleProceed = () => {
    setSessionStorageData("lang", selectLangauage);
    router2.push("/thankyou");
  };
  return (
    <div className={Styles.langContainer}>
      <div className={Styles.pleaseSelect}>Please Select the language</div>
      <div className={Styles.languageSelectedSection}>
        {data?.map((ele) => (
          <div
            onClick={() => setSelectLanguage(ele?.lang)}
            className={
              selectLangauage === ele?.lang
                ? Styles.eachSection2
                : Styles.eachSection
            }
            key={ele?.id}
          >
            {ele?.lang}
          </div>
        ))}
      </div>
      {selectLangauage?.trim().length > 0 && (
        <div onClick={handleProceed} className={Styles.proceedPay}>
          DialX
        </div>
      )}
    </div>
  );
};

export default LanguageComponent;
