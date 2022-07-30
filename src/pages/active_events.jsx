import React from 'react';
import Pagelayout from "../layouts/page_layout";
import ActiveEventsContent from "../components/page_content/active_events_content";
import Breadcrumb from "../components/breadcrumb";
export default function ActiveEvents() {
  return (
     <Pagelayout>
       <Breadcrumb title="Active Events"/>
       <ActiveEventsContent/>
     </Pagelayout>
  );
}
