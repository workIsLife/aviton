import React from "react";
import { getItem } from "./actions/getItem";
import getNews from "./API/getNews";
import API from "./API/getItem";
import { connect } from "react-redux";
import fetchData from "./actions/fetchData";

function App(props) {
  return (
    <div className="App">
      <button>получить новости</button>
      <br />
      <br />
      <button
        onClick={() =>
          getItem(
            "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
          )
        }
      >
        узнать подробности
      </button>
      <button onClick={props.onAsync}>Async</button>
      <div>
        <ul>{props.testState.by}</ul>
      </div>
      {console.log("props")}
      {console.log(props.testState)}
    </div>
  );
}

export default connect(
  (state) => ({
    testState: state
  }),
  (dispatch) => ({
    onAsync: () => {
      dispatch(
        getItem(
          "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
        )
      );
    }
  })
)(App);
