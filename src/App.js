import "./App.css";
import { useState } from "react";
import Carousel from "./components/Carousel";
import Summary from "./components/Summary";
import { ChartData as data } from "./data";
function App() {
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
  return (
    <div className="container">
      <Carousel className="carousel" />
      <Summary className="summary" chartData={userData} />
    </div>
  );
}

export default App;
