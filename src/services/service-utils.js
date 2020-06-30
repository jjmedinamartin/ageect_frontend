export const getServiceString = (endpoint, param) => {
  return `${process.env.REACT_APP_SERVER_URL}${
    process.env.REACT_APP_API
  }${endpoint}${param && "/" + param}`;
};
