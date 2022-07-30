import React from 'react';
import LineChartOne from "../charts/line_chart_one";

export default function NetSells() {
  return (
   <div className="card">
    <div className="card-body">
     <h4 className="card-title">Net Sales</h4>
     <div className="row mt-4">
      <div className="col-xl-4">
       <h6>This Week</h6>
       <h4 className="color-primary">$5500.00</h4>
      </div>
      <div className="col-xl-4">
       <h6>Previous Week</h6>
       <h4 className="color-primary">$6550.00</h4>
      </div>
     </div>
     <div className="line-chart-wrapper mt-4">
      <LineChartOne />
     </div>
    </div>
   </div>
  );
}
