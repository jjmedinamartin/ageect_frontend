export const getServiceString = (endpoint) => {
    return `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API}${endpoint}`;
  };
  