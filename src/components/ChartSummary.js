import React, { useState } from "react";
import "./ChartSummary.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import { Line } from "react-chartjs-2";

export const data = [
  {
    id: 1,
    time: "23:00",
    humidity: 35,
  },
  {
    id: 2,
    time: "24:00",
    humidity: 64,
  },
  {
    id: 3,
    time: "1:00",
    humidity: 11,
  },
  {
    id: 4,
    time: "2:00",
    humidity: 76,
  },
];

function ChartSummary({ chartdata }) {
  const [userData, setUserData] = useState({
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: "Humidity Forecast",
        data: data.map((item) => item.humidity),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  console.log(chartdata);
  return (
    <div className="chartbox">
      <Line data={userData} />
    </div>
  );
}

export default ChartSummary;
