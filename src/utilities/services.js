import AppApiFetch from "./api";
import { APP_STORAGE } from "./constant";

export const getLayouts = async () => {
  const options = {
    method: "GET"
  };
  const response = await AppApiFetch(APP_STORAGE.layout, options);
  const { status, data } = await response.json();
  return status ? data : [];
};

export const sendMail = async (data) => {
  const options = {
    method: "POST",
    body: data
  };
  //   const response = await AppApiFetch( "http://viralrathod.live/server/send_mail.php", options);
  const response = await AppApiFetch(APP_STORAGE.mail, options);
  const json = await response.json();
  return json;
};

export const uploadImageForBlog = async (formData) => {
  const options = {
    method: "POST",
    body: formData,
    setContentType: false,
    isTypeJson: false
  };
  const response = await AppApiFetch(APP_STORAGE.imageUpload, options);
  const json = await response.json();
  return json;
};
