export const baseURL =
  "https://viralrathod.in/national-reliable-care-at-home/server";
// export const baseURL = "http://localhost/national-reliable-care-at-home-server";

export default function AppApiFetch(apiEndPointName, options) {
  const {
    isTypeJson = true,
    isTokenAdd = false,
    method = "GET",
    queryParams = null,
    body = {},
    setContentType = true,
    noBase = false
  } = options;

  let headers = setContentType
    ? {
        "Content-Type": isTypeJson ? "application/json" : "multipart/form-data",
        ...options.headers
      }
    : { ...options.headers };

  if (isTokenAdd) {
    // headers["Authorization"] = AppStorage.getLocalStorage(storageNames.token);
  }

  let queryParamsString = "";

  if (queryParams) {
    queryParamsString += "?";
    for (const key in queryParams) {
      if (Object.hasOwnProperty.call(queryParams, key)) {
        const value = queryParams[key];
        queryParamsString += `${key}=${value}&`;
      }
    }
    queryParamsString = queryParamsString.slice(0, -1);
  }

  const url = noBase
    ? `${apiEndPointName}${queryParamsString}`
    : `${baseURL}/${apiEndPointName}${queryParamsString}`;

  let apiOptions = {
    method,
    headers
  };

  if (method !== "GET") {
    apiOptions.body = body.formdata ? body.formdata : JSON.stringify(body);
  }

  return fetch(url, apiOptions);
}
