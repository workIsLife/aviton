import API from "../API/getItem";

export const getItem = (url) => {
  return (dispatch) => {
    API(url).then((data) => {
      console.log("data       ");
      console.log(data);
      dispatch({ type: "FETCH", payload: data });
    });
  };
};
