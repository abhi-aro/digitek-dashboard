import { getApi, postApi } from "./apiCalls";

export async function api_SendMail({ data }) {
  let url =
    "https://xfjf5qvgwl.execute-api.ap-south-1.amazonaws.com/prod/uvdeskemailsent";
  let headers = {
    "x-api-key": "0uOidSnt9l3mFrjeA0jpD7jdDNIf4eVHosNaL39d",
    Authorization: "I1Cg4SwS0RrePU2R5j9focUpIQBJ3gzh",
    "Content-Type": "application/json",
  };
  let body = JSON.stringify({
    email: data?.email,
  });

  return postApi(url, body, headers);
}

export async function api_fetchService() {
  let url =
    "https://5hsg496kki.execute-api.ap-south-1.amazonaws.com/prod/service_domains";
  let headers = {};

  return getApi(url, headers);
}

export async function api_fetchUtility() {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/service";
  let headers = {};

  return getApi(url, headers);
}
export async function api_CompanySize() {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/company_size";
  let headers = {};

  return getApi(url, headers);
}
export async function api_priceRange() {
  let url =
    "https://q68elgriue.execute-api.ap-south-1.amazonaws.com/prod/price_range";
  let headers = {};

  return getApi(url, headers);
}

export async function api_getAllocation({ data }) {
  let url =
    "https://a00jeyjdmj.execute-api.ap-south-1.amazonaws.com/prod/get_service_details_users";
  let headers = {
    "x-api-key": "0uOidSnt9l3mFrjeA0jpD7jdDNIf4eVHosNaL39d",
    // Authorization: "I1Cg4SwS0RrePU2R5j9focUpIQBJ3gzh",
    "Content-Type": "application/json",
  };
  let body = JSON.stringify({
    top_funnel: data?.top_funnel || "",
    top_funnels_domains: data?.top_funnels_domains || "",
    time: data?.time,
  });

  return postApi(url, body, headers);
}
