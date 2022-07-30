import React from 'react';
import Pagelayout from "../layouts/page_layout";
import MyEventsContent from "../components/page_content/my_events_content";
import Breadcrumb from "../components/breadcrumb";
export default function MyEvents() {
 return (
  <Pagelayout>
   <Breadcrumb title="My Events"/>
   <MyEventsContent />
  </Pagelayout>
 );
}