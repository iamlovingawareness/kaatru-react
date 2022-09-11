import React from "react";
import Card from "./Shared/Card";
import "./Grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Grid() {
  return (
    <div className="grid">
      <Card>
        <div className="card-top">
          <h4>Humidity</h4>

          <div className="percentage">
            <div className="stat">
              <strong>82% bad</strong>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <h4>Wind</h4>

          <div className="percentage">
            <div className="stat">
              <strong>8km/h</strong>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <h4>Precipitation</h4>

          <div className="percentage">
            <div className="stat">
              <strong>1.4cm</strong>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <h4>UV Index</h4>

          <div className="percentage">
            <div className="stat">
              <strong>4 medium</strong>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <h4>Feels Like</h4>

          <div className="percentage">
            <div className="stat">
              <strong>30 &;</strong>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <h4>Chance of rain</h4>

          <div className="percentage">
            <div className="stat">
              <strong>42%</strong>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Grid;
