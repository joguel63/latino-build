import React from 'react';
import SidebarOne from "../sidebar_one";
import EventCard from "../event_card";
import authorThumb from "../../assets/images/events/event-head.png";
export default function MyEventsContent() {
  return (
   <>
    <div className="content-body">
     <div className="container">
      <div className="row justify-content-between">
       <div className="col-xl-8">
        <div className="row">
         <div className="col-lg-6">
          <EventCard
            author="John Duo"
            author_thumb={authorThumb}
            event_name="Ecommerce"
            event_date="15 March 2021"
            event_location="London"
            tickets_date="5, 21"
            event_fee="$250"
          />
         </div>
         <div className="col-lg-6">
            <EventCard
              author="John Duo"
              author_thumb={authorThumb}
              event_name="Ecommerce"
              event_date="15 March 2021"
              event_location="London"
              tickets_date="5, 21"
              event_fee="$250"
            />
         </div>
        </div>
       </div>
       <div className="col-xl-3 left-line">
        <SidebarOne />
       </div>
      </div>
     </div>
    </div>
   </>
  );
}
