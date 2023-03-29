import { STRAPI_TROKEN, HOST_URL } from "./urls";

export const fetchData = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_TROKEN,
    },
  };
  const res = await fetch(`${HOST_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};
