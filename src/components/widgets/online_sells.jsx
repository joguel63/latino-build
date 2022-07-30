import React from 'react';
import LineChartTwo from "../charts/line_chart_two";
export default function OnlineSells() {
  return (
    <div className="card pb-0">
      <div className="card-body">
        <h4 className="card-title">Online Sells</h4>
        <LineChartTwo />
        <h4 className="color-primary">$5500.00</h4>
        <h6 className="mb-0">Rough Cost</h6>
      </div>
    </div>
  );
}
