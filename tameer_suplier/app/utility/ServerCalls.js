import config from "../config/config";

export const getUserData = async (companyId) => {
  var url =
    config.server + "api/company/getCompanyAndProducts?companyId=" + companyId;
  return fetch(url).then((data) => data.json());
};

export const removeItemProvider = async (companyId, id, type) => {
  var url =
    config.server +
    "api/company/removeProvider?companyId=" +
    companyId +
    "&itemId=" +
    id +
    "&category=" +
    type;
  return fetch(url, { method: "GET" }).then((data) => {
    return data;
  });
};
export const saveInfo = async (name, email, companyId) => {
  const data = {
    name: name,
    email: email,
    companyId: companyId,
  };
  const url = config.server + "api/company/auth/saveCompanyLoginInfo";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};
