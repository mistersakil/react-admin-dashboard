export const ucFirstFunc = (str = null) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

export const camelCase = (str) => {
  return str.replace(/[ ]/g, "");
};
