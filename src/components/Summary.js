import React from "react";
import "./Summary.css";
import ChartSummary from "./ChartSummary";
import Grid from "./Grid";
function Summary({ data }) {
  return (
    <div className="summary">
      <div className="top">
        <p className="text">
          Welcome Back Sidharth !<br />
          <small className="small">Checkout Todays Information</small>
        </p>
        <div className="right">
          <button className="icons">...</button>
          <div className="dp"></div>
        </div>
      </div>
      <ChartSummary data={data} />
      <p className="text">More Details of Todays Weather</p>
      <Grid />
    </div>
  );
}

export default Summary;
