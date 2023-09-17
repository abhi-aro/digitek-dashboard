import { postApi } from "./apiCalls";

export async function api_CreateUser({ data }) {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/check_create_user_digitek";
  let headers = {
    "x-api-key": "0uOidSnt9l3mFrjeA0jpD7jdDNIf4eVHosNaL39d",
    Authorization: "I1Cg4SwS0RrePU2R5j9focUpIQBJ3gzh",
    "Content-Type": "application/json",
  };
  let body = JSON.stringify({
    first_name: data?.given_name,
    last_name: data?.family_name,
    country_code: "+91",
    email: data?.email,
    dob: "",
  });

  return postApi(url, body, headers);
}

export async function api_UpdateUser({ data }) {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/basic_details_update";
  let headers = {
    "x-api-key": "0uOidSnt9l3mFrjeA0jpD7jdDNIf4eVHosNaL39d",
    authorizationtoken: "I1Cg4SwS0RrePU2R5j9focUpIQBJ3gzh",
    "Content-Type": "application/json",
  };
  let body = JSON.stringify({
    country_code: data?.country_code || "",
    mobile_no: data?.mobile_no || "",
    company_name: data?.company_name || "",
    company_domain: data?.company_domain || "",
    company_sub_domain: data?.company_sub_domain || "",
    company_size: data?.company_size || "",
    yearly_revenue: data?.yearly_revenue || "",
    purpose_of_utility: [data?.purpose_of_utility || ""] || [],
    email: data?.email || "",
  });
  return postApi(url, body, headers);
}
