import React from 'react';
import CircleChartOne from "../charts/circle_chart_one";
export default function TotalSeats() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title m-b-15">Total Seats</h4>
        <div className="total-seats text-center mt-4">
          <div className="position-relative d-inline-block mb-4">
            <div className="progressbar-wrapper-one">
              <CircleChartOne value={360} />
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
        <h5 className="m-t-30 m-b-15">Sold Seats <span className="pull-right">95</span></h5>
        <div className="progress">
          <div className="progress-bar bg-danger wow animated progress-animated mb-3" style={{ width: "85%", height: "4px" }} role="progressbar">
            <span className="sr-only">60% Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
