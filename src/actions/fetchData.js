const fetchData = () => (dispatch) => {
  setTimeout(() => {
    console.log("I got tracks");
    dispatch({ type: "ADD_FETCH", payload: [] });
  }, 2000);
};

export default fetchData();
