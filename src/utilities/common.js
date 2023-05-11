import moment from "moment";

export const removeSpaceFromString = (str) =>
  str.replace(/ +/g, "_").replace(/\s\s+/g, "").replace(/_/g, " ");

export const formatDate = (date = new Date(), format = "YYYY-MM-DD") =>
  moment(date).format(format);

export const getCurrentMonth = () => moment(new Date()).format("MMMM");

export const sortedArray = (list) =>
  list.sort(
    (a, b) =>
      new moment(b.date).format("YYYYMMDD") -
      new moment(a.date).format("YYYYMMDD")
  );

export const getClassName = (className) =>
  `${className ? " " + className : ""}`;

export const getObjectFromList = (list, defaultObject, name) => {
  let obj = null;

  if (list.length > 0 && name) {
    const { content } = list.find((item) => item.name === name) || {
      content: null
    };
    obj = content ? content : defaultObject;
  } else {
    obj = defaultObject;
  }

  return obj;
};

export const lowerCase = (str) =>
  str.replace(/ +/g, "").replace(/\s\s+/g, "").toLowerCase();
