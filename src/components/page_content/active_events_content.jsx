import React from 'react';
import SidebarOne from "../sidebar_one";
import EventCard from "../event_card";
import authorThumb from "../../assets/images/events/event-head.png";
export default function ActiveEventsContent() {
  return (
    <div className="content-body">
     <div className="container">
      <div className="row justify-content-between">
       <div className="col-xl-8">
        <div className="row">
         <div className="col-lg-6">
           <EventCard
            author = "John Duo"
            author_thumb={authorThumb}
            event_name = "Ecommerce"
            event_date = "15 March 2021"
            event_location = "London"
            tickets_date = "5, 21"
            event_fee = "$250"
           />
         </div>
         <div className="col-lg-6">
            <EventCard
              author="Rocky"
              author_thumb={authorThumb}
              event_name="Ecommerce"
              event_date="15 March 2021"
              event_location="London"
              tickets_date="2, 20"
              event_fee="Free"
            />
         </div>
         <div className="col-lg-6">
            <EventCard
              author="Arif Khan"
              author_thumb={authorThumb}
              event_name="Ecommerce"
              event_date="15 March 2021"
              event_location="London"
              tickets_date="3, 18"
              event_fee="$125"
            />
         </div>
         <div className="col-lg-6">
            <EventCard
              author="Abraham"
              author_thumb={authorThumb}
              event_name="Ecommerce"
              event_date="15 March 2021"
              event_location="London"
              tickets_date="6, 19"
              event_fee="$540"
            />
         </div>
        </div>
       </div>
       <div className="col-xl-3 left-line">
         <SidebarOne/>
       </div>
      </div>
     </div>
    </div>
  );
}
