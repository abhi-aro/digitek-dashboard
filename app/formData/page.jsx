"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { v4 as uuidv4 } from "uuid";
import Styles from "../../Styles/FormData/FormData.module.css";
import { api_UpdateUser } from "../api/Authentication";
import { useRouter } from "next/navigation";

const UserFormData = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let utilityTags = [];
  const [user_type, setUser_type] = useState(0);
  const [userInfo, setUserInfo] = useState([
    {
      key: "user_type",
      type: "radio",
      label: "User Type",
      options: [
        {
          value: 0,
          label: "I need a service provider",
        },
        {
          value: 1,
          label: "I am a service provider",
        },
      ],
      value: "",
      placeholder: "",
    },
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
      type: "array",
      label: "Purpose of Utility",
      value: [],
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
          if (el?.key == "purpose_of_utility") {
            utilityTags = [...utilityTags, ...resbody?.[el?.key]];
          }
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
        purpose_of_utility: [...utilityTags],
      };
    });
    const response = await api_UpdateUser({ data });
    if (formData.get("user_type") == 0) {
      router.push("/businessMetricsForm");
    } else if (formData.get("user_type") == 1) {
      router.push("/");
    }
  };

  const handleTags = (tags = []) => {
    utilityTags = [...utilityTags, ...tags].filter(
      (item, index) => [...utilityTags, ...tags].indexOf(item) === index,
    );
  };

  const handleUserType = (value = 0) => {
    setUser_type(value);
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.formWrapper} onSubmit={handleSubmit}>
        {userInfo?.map((el) => {
          return (
            <FormInput
              key={uuidv4()}
              data={el}
              handleTags={handleTags}
              handleUserType={handleUserType}
              user_type={user_type}
            />
          );
        })}
        <button className={Styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ data, handleTags, handleUserType, user_type }) => {
  const [value, setValue] = useState(data?.value);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={Styles.inputContainer}>
      <label htmlFor={data?.key} className={Styles.label}>
        {data?.label}
      </label>
      <CustomInput
        type={data?.type}
        id={data?.key}
        disabled={data?.key == "email"}
        name={data?.key}
        placeholder={data?.placeholder}
        options={data?.options}
        handleUserType={handleUserType}
        user_type={user_type}
        value={value}
        onChange={handleValueChange}
        handleTags={handleTags}
        className={Styles.input}
      />
    </div>
  );
};

const CustomInput = (props) => {
  const { ...rest } = props;

  if (props?.type == "array") {
    return (
      <>
        <TagsInput
          {...rest}
          onChange={props?.handleTags}
          classNames={{ tag: Styles.tag, input: Styles.input }}
        />
      </>
    );
  }

  if (props?.type == "radio") {
    return (
      <>
        <UserTypeInput {...rest} />
      </>
    );
  }

  return (
    <>
      <input {...rest} />
    </>
  );
};

const UserTypeInput = (props) => {
  const { id, options, user_type, value, onChange, ...rest } = props;

  return (
    <label className={`${Styles.input} ${Styles.radioInput}`}>
      {options?.map((el) => {
        return (
          <>
            <label class={Styles.userTypeContainer}>
              <input
                type="radio"
                checked={user_type == el?.value}
                onClick={() => {
                  props?.handleUserType(el?.value);
                }}
                value={el?.value}
                name={id}
                {...rest}
              />
              <label class={Styles.userTypeCheckmark}>{el.label}</label>
            </label>
          </>
        );
      })}
    </label>
  );
};

export default UserFormData;
