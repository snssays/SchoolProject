export const isUserAuthCheck = () =>
  sessionStorage.getItem("isUserAuthenticated") === "true";

export const getIsUserAuthenticated = () =>
  sessionStorage.getItem("isUserAuthenticated");

export const setValueInSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const setIsUserAuthenticated = str => {
  sessionStorage.setItem("isUserAuthenticated", str);
};

export const clearSession = () => {
  sessionStorage.clear();
};
