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
    user_type: data?.user_type || 0,
    country_code: data?.country_code || "",
    mobile_no: Number(data?.mobile_no) || "",
    company_name: data?.company_name || "",
    company_domain: data?.company_domain || "",
    company_sub_domain: data?.company_sub_domain || "",
    company_size: data?.company_size || "",
    yearly_revenue: data?.yearly_revenue || "",
    purpose_of_utility: data?.purpose_of_utility || [],
    email: data?.email || "",
    registration_code: data?.registration_code || "",
  });
  return postApi(url, body, headers);
}
export async function api_UpdateUser2({ data }) {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/basic_details_update";
  let headers = {
    "x-api-key": "0uOidSnt9l3mFrjeA0jpD7jdDNIf4eVHosNaL39d",
    authorizationtoken: "I1Cg4SwS0RrePU2R5j9focUpIQBJ3gzh",
    "Content-Type": "application/json",
  };
  let body = JSON.stringify({
    user_type: data?.user_type || 0,
    country_code: data?.country_code || "",
    mobile_no: Number(data?.mobile_no) || "",
    company_name: data?.company_name || "",
    company_domain: data?.company_domain || "",
    company_sub_domain: data?.company_sub_domain || "",
    company_size: data?.company_size || "",
    yearly_revenue: data?.yearly_revenue || "",
    service: data?.purpose_of_utility || [],
    email: data?.email || "",
    registration_code: data?.registration_code || "",
  });
  return postApi(url, body, headers);
}

export async function api_BusinessMetricForm({ data }) {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/business_metrics_users";
  let headers = {
    "x-api-key": "0uOidSnt9l3mFrjeA0jpD7jdDNIf4eVHosNaL39d",
    authorizationtoken: "I1Cg4SwS0RrePU2R5j9focUpIQBJ3gzh",
    "Content-Type": "application/json",
  };
  let body = JSON.stringify({
    customer_acquisition_cost: data?.customer_acquisition_cost_,
    customer_lifetime_value: data?.customer_lifetime_value_,
    average_order_value: data?.average_order_value_,
    gross_margin: data?.gross_margin,
    net_promoter_score: data?.net_promoter_score,
    abandoned_cart_rate: data?.abandoned_cart_rate,
    churn_rate: data?.churn_rate,
    conversion_rate: data?.conversion_rate,
    inventory_turnover_rate: data?.inventory_turnover_rate,
    new_customer_acquisition_cost: data?.new_customer_acquisition_cost,
    product_return_rate: data?.product_return_rate,
    repeat_purchase_rate: data?.repeat_purchase_rate,
    retention_rate: data?.retention_rate,
    return_on_advertising_spend: data?.return_on_advertising_spend,
    user_traffic: data?.user_traffic,
    email: data?.email,
  });
  return postApi(url, body, headers);
}
