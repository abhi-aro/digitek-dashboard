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
