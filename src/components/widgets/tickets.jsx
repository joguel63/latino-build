import React from 'react';
import CircleChartOne from "../charts/circle_chart_one";
export default function Tickets() {
  return (
    <div className="card">
      <div className="card-body ">
        <h4 className="card-title m-b-15">TICKETS</h4>
        <div className="tickets text-center mt-4">
          <div className="position-relative d-inline-block mb-4">
            <div className="progressbar-wrapper-one">
              <CircleChartOne value={90} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <h6>Total Seats</h6>
              <h4 className="color-primary">$5500.00</h4>
            </div>
            <div className="col-6">
              <h6>Sold Seats</h6>
              <h4 className="color-primary">$6550.00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
