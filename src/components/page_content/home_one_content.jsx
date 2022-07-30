import React from 'react';
import NetSells from "../widgets/net_sells";
import Tickets from "../widgets/tickets";
import UpcomingEvents from "../widgets/upcoming_events";
import RecentSells from "../widgets/recent_sells";
import TotalSeats from "../widgets/total_seats";
import OnlineSells from "../widgets/online_sells";
import Campaign from "../widgets/campaign";

export default function HomeOneContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <NetSells />
          </div>
          <div className="col-xl-3">
            <Tickets />
          </div>
          <div className="col-xl-3">
            <UpcomingEvents />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <RecentSells />
          </div>
          <div className="col-xl-3">
            <TotalSeats />
          </div>
          <div className="col-xl-3">
            <OnlineSells />
            <Campaign />
          </div>
        </div>
      </div>
    </div>
  );
}
